import { useQueries } from '@tanstack/react-query';
import {
  getAlerts,
  getCompany,
  getInflows,
  getOutflows,
  getSummary,
  getTimeline,
  getTrends
} from '../services/cashflow/cashflowApi';
import {
  getTimelineYMax,
  mapAlerts,
  mapCompany,
  mapInflowsPage,
  mapOutflowsPage,
  mapSummary,
  mapTimeline,
  mapTrends
} from '../services/cashflow/mappers';

function getPeriodFromEnv() {
  const de = process.env.REACT_APP_CASHFLOW_DE || undefined;
  const ate = process.env.REACT_APP_CASHFLOW_ATE || undefined;
  if (de && ate) {
    return { de, ate };
  }
  return { de: undefined, ate: undefined };
}

function friendlyError(error) {
  if (!error) {
    return null;
  }
  return error.message || 'Não foi possível carregar o fluxo de caixa.';
}

/**
 * Carrega os blocos do dashboard em paralelo via React Query (cache por key).
 */
export function useCashFlow({ page = 1, perPage = 20 } = {}) {
  const { de, ate } = getPeriodFromEnv();
  const periodKey = { de: de || null, ate: ate || null };

  const results = useQueries({
    queries: [
      {
        queryKey: ['cashflow', 'summary', periodKey],
        queryFn: ({ signal }) => getSummary({ de, ate, signal }),
        select: mapSummary
      },
      {
        queryKey: ['cashflow', 'trends'],
        queryFn: ({ signal }) => getTrends({ signal }),
        select: mapTrends
      },
      {
        queryKey: ['cashflow', 'timeline', periodKey],
        queryFn: ({ signal }) => getTimeline({ de, ate, signal }),
        select: mapTimeline
      },
      {
        queryKey: ['cashflow', 'inflows', { ...periodKey, page, perPage }],
        queryFn: ({ signal }) => getInflows({ de, ate, page, perPage, signal }),
        select: mapInflowsPage
      },
      {
        queryKey: ['cashflow', 'outflows', { ...periodKey, page, perPage }],
        queryFn: ({ signal }) =>
          getOutflows({ de, ate, page, perPage, signal }),
        select: mapOutflowsPage
      },
      {
        queryKey: ['cashflow', 'alerts'],
        queryFn: ({ signal }) => getAlerts({ signal }),
        select: mapAlerts
      },
      {
        queryKey: ['cashflow', 'company'],
        queryFn: ({ signal }) => getCompany({ signal }),
        select: mapCompany
      }
    ]
  });

  const [summaryQ, trendsQ, timelineQ, inflowsQ, outflowsQ, alertsQ, companyQ] =
    results;

  const coreResults = [summaryQ, trendsQ, timelineQ, inflowsQ, outflowsQ];

  const isLoading = coreResults.some((q) => q.isLoading);
  const isFetching = results.some((q) => q.isFetching);
  const isError = coreResults.some((q) => q.isError);
  const firstError = coreResults.find((q) => q.isError)?.error;

  const lineData = timelineQ.data || [];

  return {
    isLoading,
    isFetching,
    isError,
    errorMessage: friendlyError(firstError),
    summary: summaryQ.data,
    trends: trendsQ.data,
    lineData,
    yMax: getTimelineYMax(lineData),
    rowsEntradas: inflowsQ.data?.rows || [],
    rowsSaidas: outflowsQ.data?.rows || [],
    alertas: alertsQ.data || [],
    isAlertsLoading: alertsQ.isLoading,
    company: companyQ.data,
    companyLabel: companyQ.data?.displayLabel ?? null,
    isCompanyLoading: companyQ.isLoading,
    refetchAll: () => Promise.all(results.map((q) => q.refetch()))
  };
}
