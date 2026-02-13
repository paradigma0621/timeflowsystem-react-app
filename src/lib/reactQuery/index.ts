import {
  DefaultOptions,
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
  queryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseInfiniteQuery,
  useSuspenseQuery
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const millisecondsPerSecond = 1000
const secondsPerMinute = 5

const queryConfig: DefaultOptions = {
  queries: {
    gcTime: millisecondsPerSecond * secondsPerMinute,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5000,
    throwOnError: true
  }
}

const queryClient = new QueryClient({ defaultOptions: queryConfig })

export {
  keepPreviousData,
  queryClient,
  QueryClientProvider,
  queryOptions,
  ReactQueryDevtools,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseInfiniteQuery,
  useSuspenseQuery
}
