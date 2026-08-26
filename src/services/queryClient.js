import { QueryClient } from '@tanstack/react-query';

function shouldRetryQuery(failureCount, error) {
  const status = error?.status;
  if (status === 503 && failureCount < 3) {
    return true;
  }
  if (failureCount < 1) {
    return true;
  }
  return false;
}

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
        gcTime: 5 * 60_000,
        retry: shouldRetryQuery,
        retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 5000),
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
      }
    }
  });
}
