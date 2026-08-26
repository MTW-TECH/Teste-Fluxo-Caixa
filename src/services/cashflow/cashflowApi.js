import { httpGet } from '../http/httpClient';

function periodParams({ de, ate } = {}) {
  if (de && ate) {
    return { de, ate };
  }
  return {};
}

export function getSummary({ de, ate, signal } = {}) {
  return httpGet('/api/cashflow/summary', {
    signal,
    params: periodParams({ de, ate })
  });
}

export function getTrends({ signal } = {}) {
  return httpGet('/api/cashflow/trends', { signal });
}

export function getTimeline({ de, ate, signal } = {}) {
  return httpGet('/api/cashflow/timeline', {
    signal,
    params: periodParams({ de, ate })
  });
}

export function getInflows({ de, ate, page = 1, perPage = 20, signal } = {}) {
  return httpGet('/api/cashflow/inflows', {
    signal,
    params: {
      ...periodParams({ de, ate }),
      page,
      per_page: perPage
    }
  });
}

export function getOutflows({ de, ate, page = 1, perPage = 20, signal } = {}) {
  return httpGet('/api/cashflow/outflows', {
    signal,
    params: {
      ...periodParams({ de, ate }),
      page,
      per_page: perPage
    }
  });
}

export function getAlerts({ signal } = {}) {
  return httpGet('/api/cashflow/alerts', { signal });
}

export function getCompany({ signal } = {}) {
  return httpGet('/api/cashflow/company', { signal });
}
