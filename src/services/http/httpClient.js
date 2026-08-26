const DEFAULT_TIMEOUT_MS = 10000;

function getBaseUrl() {
  const baseUrl = process.env.REACT_APP_API_URL;
  if (!baseUrl) {
    throw new Error(
      'REACT_APP_API_URL não configurada. Defina a URL da API no arquivo .env.'
    );
  }
  return baseUrl.replace(/\/$/, '');
}

function getTimeoutMs() {
  const raw = process.env.REACT_APP_API_TIMEOUT_MS;
  const parsed = Number(raw);
  if (Number.isFinite(parsed) && parsed > 0) {
    return parsed;
  }
  return DEFAULT_TIMEOUT_MS;
}

function createTimeoutController(externalSignal, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort(new DOMException('Tempo esgotado', 'TimeoutError'));
  }, timeoutMs);

  const onExternalAbort = () => {
    controller.abort(externalSignal.reason);
  };

  if (externalSignal) {
    if (externalSignal.aborted) {
      clearTimeout(timeoutId);
      controller.abort(externalSignal.reason);
    } else {
      externalSignal.addEventListener('abort', onExternalAbort, { once: true });
    }
  }

  const cleanup = () => {
    clearTimeout(timeoutId);
    if (externalSignal) {
      externalSignal.removeEventListener('abort', onExternalAbort);
    }
  };

  return { signal: controller.signal, cleanup };
}

function isTimeoutError(error) {
  return (
    error?.name === 'TimeoutError' ||
    error?.name === 'AbortError' ||
    /tempo esgotado|timeout/i.test(error?.message || '')
  );
}

async function parseErrorMessage(response) {
  try {
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await response.json();
      if (body?.erro && typeof body.erro === 'string') {
        return body.erro;
      }
    }
  } catch {
    // ignora falha de parse e usa mensagem genérica por status
  }

  if (response.status === 503) {
    return 'Serviço temporariamente indisponível.';
  }
  if (response.status === 400) {
    return 'Requisição inválida.';
  }
  if (response.status >= 500) {
    return 'Erro interno do servidor.';
  }
  return `Falha na requisição (${response.status}).`;
}

/**
 * GET JSON com timeout e suporte a AbortSignal externo (React Query).
 */
export async function httpGet(path, { signal, params } = {}) {
  const url = new URL(path, `${getBaseUrl()}/`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const { signal: combinedSignal, cleanup } = createTimeoutController(
    signal,
    getTimeoutMs()
  );

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      credentials: 'omit',
      headers: {
        Accept: 'application/json'
      },
      signal: combinedSignal
    });

    if (!response.ok) {
      const message = await parseErrorMessage(response);
      const error = new Error(message);
      error.status = response.status;
      throw error;
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      throw new Error('Resposta inválida da API (esperado JSON).');
    }

    return response.json();
  } catch (error) {
    if (isTimeoutError(error) && !signal?.aborted) {
      const timeoutError = new Error(
        'Tempo esgotado ao consultar a API. Tente novamente.'
      );
      timeoutError.name = 'TimeoutError';
      throw timeoutError;
    }
    if (error?.name === 'TypeError') {
      throw new Error(
        'Não foi possível conectar à API. Verifique se o backend está em execução.'
      );
    }
    throw error;
  } finally {
    cleanup();
  }
}
