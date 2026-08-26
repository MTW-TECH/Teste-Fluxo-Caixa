const SERIES_COLORS = {
  Inflows: '#10b981',
  Outflows: '#f5510b'
};

/**
 * Converte string monetária da API ("3152.38") em number seguro.
 */
export function parseMoney(value) {
  if (value === null || value === undefined || value === '') {
    return 0;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

/**
 * Formata valor para exibição pt-BR com prefixo R$.
 */
export function formatCurrency(value) {
  return `R$ ${parseMoney(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

/**
 * Formata valor para cards (sem o "R$ " — o Card adiciona).
 */
export function formatCardAmount(value) {
  return parseMoney(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/**
 * YYYY-MM-DD → "22 Mar 2026" (pt-BR curto).
 */
export function formatDisplayDate(isoDate) {
  if (!isoDate || typeof isoDate !== 'string') {
    return '';
  }
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) {
    return isoDate;
  }
  const date = new Date(year, month - 1, day);
  const formatted = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  // "22 de mar. de 2026" → "22 Mar 2026"
  return formatted
    .replace(/\s+de\s+/gi, ' ')
    .replace(/\./g, '')
    .replace(/(\d{2})\s+(\w+)\s+(\d{4})/i, (_, d, m, y) => {
      const monthLabel = m.charAt(0).toUpperCase() + m.slice(1).toLowerCase();
      return `${d} ${monthLabel} ${y}`;
    });
}

/**
 * YYYY-MM-DD → rótulo curto no eixo X do gráfico ("22 Mar").
 */
export function formatChartLabel(isoDate) {
  if (!isoDate || typeof isoDate !== 'string') {
    return '';
  }
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) {
    return isoDate;
  }
  const date = new Date(year, month - 1, day);
  const formatted = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short'
  });
  return formatted
    .replace(/\s+de\s+/gi, ' ')
    .replace(/\./g, '')
    .replace(/(\d{2})\s+(\w+)/i, (_, d, m) => {
      const monthLabel = m.charAt(0).toUpperCase() + m.slice(1).toLowerCase();
      return `${d} ${monthLabel}`;
    });
}

export function mapSummary(apiSummary) {
  if (!apiSummary) {
    return {
      entrada: '0,00',
      saida: '0,00',
      liquido: '0,00',
      balanco: '0,00',
      periodo: null,
      ultimoLancamento: null
    };
  }
  return {
    entrada: formatCardAmount(apiSummary.entrada),
    saida: formatCardAmount(apiSummary.saida),
    liquido: formatCardAmount(apiSummary.liquido),
    balanco: formatCardAmount(apiSummary.balanco),
    periodo: apiSummary.periodo || null,
    ultimoLancamento: apiSummary.ultimo_lancamento || null
  };
}

export function mapTrends(apiTrends) {
  if (!apiTrends) {
    return {
      saldoAtual: formatCurrency(0),
      previsao30Dias: formatCurrency(0)
    };
  }
  return {
    saldoAtual: formatCurrency(apiTrends.saldo_atual),
    previsao30Dias: formatCurrency(apiTrends.previsao_30_dias)
  };
}

export function mapTimeline(apiTimeline) {
  const series = Array.isArray(apiTimeline) ? apiTimeline : [];
  return series.map((serie) => ({
    id: serie.id,
    color: SERIES_COLORS[serie.id] || '#6b7280',
    data: (serie.data || []).map((point) => ({
      x: formatChartLabel(point.x),
      y: parseMoney(point.y)
    }))
  }));
}

/**
 * Calcula max do eixo Y a partir das séries (arredondado para cima).
 */
export function getTimelineYMax(lineData) {
  let maxY = 0;
  (lineData || []).forEach((serie) => {
    (serie.data || []).forEach((point) => {
      if (point.y > maxY) {
        maxY = point.y;
      }
    });
  });
  if (maxY <= 0) {
    return 100;
  }
  const padded = maxY * 1.1;
  const magnitude = Math.pow(10, Math.floor(Math.log10(padded)));
  return Math.ceil(padded / magnitude) * magnitude;
}

export function mapInflowsPage(apiPage) {
  const items = apiPage?.items || [];
  return {
    rows: items.map((item, index) => ({
      id: `in-${item.data}-${item.cliente}-${index}`,
      data: formatDisplayDate(item.data),
      cliente: item.cliente,
      quantia: parseMoney(item.quantia),
      status: item.status
    })),
    page: apiPage?.page ?? 1,
    perPage: apiPage?.per_page ?? 20,
    total: apiPage?.total ?? 0
  };
}

export function mapOutflowsPage(apiPage) {
  const items = apiPage?.items || [];
  return {
    rows: items.map((item, index) => ({
      id: `out-${item.data}-${item.fornecedor}-${index}`,
      data: formatDisplayDate(item.data),
      fornecedor: item.fornecedor,
      quantia: parseMoney(item.quantia),
      status: item.status
    })),
    page: apiPage?.page ?? 1,
    perPage: apiPage?.per_page ?? 20,
    total: apiPage?.total ?? 0
  };
}

const ALERT_STYLES = {
  aviso: {
    background: '#fff7ed',
    border: '1px solid #f59e0b',
    iconColor: '#f59e0b'
  },
  critico: {
    background: '#fef2f2',
    border: '1px solid #ef4444',
    iconColor: '#ef4444'
  }
};

export function mapAlerts(apiResponse) {
  const items = apiResponse?.items || [];
  return items.map((item) => ({
    id: item.id,
    titulo: item.titulo,
    mensagem: item.mensagem,
    severidade: item.severidade,
    estilo: ALERT_STYLES[item.severidade] || ALERT_STYLES.aviso
  }));
}

/** Formato fixo do header: "RAZÃO SOCIAL - CNPJ" */
export function mapCompany(apiCompany) {
  if (!apiCompany?.razao_social || !apiCompany?.cnpj) {
    return null;
  }
  return {
    id: apiCompany.id,
    razaoSocial: apiCompany.razao_social,
    cnpj: apiCompany.cnpj,
    displayLabel: `${apiCompany.razao_social} - ${apiCompany.cnpj}`
  };
}
