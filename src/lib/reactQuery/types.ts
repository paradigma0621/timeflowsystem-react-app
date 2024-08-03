import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  QueryKey,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
  UseSuspenseInfiniteQueryOptions,
  UseSuspenseQueryOptions
} from '@tanstack/react-query'
import { AxiosError } from 'axios'

type PromiseValue<PromiseType> = PromiseType extends PromiseLike<infer Value>
  ? PromiseValue<Value>
  : PromiseType

export type QueryConfig<FetcherFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<PromiseValue<ReturnType<FetcherFnType>>, AxiosError>,
  'queryKey' | 'queryFn' | 'initialData'
>

export type SuspenseQueryConfig<FetcherFnType extends (...args: any) => any> =
  Omit<
    UseSuspenseQueryOptions<
      PromiseValue<ReturnType<FetcherFnType>>,
      AxiosError
    >,
    'queryKey' | 'queryFn' | 'initialData'
  >

export type InfiniteQueryConfig<FetcherFnType extends (...args: any) => any> =
  Omit<
    UseInfiniteQueryOptions<
      PromiseValue<ReturnType<FetcherFnType>>,
      AxiosError
    >,
    'queryKey' | 'queryFn' | 'getNextPageParam' | 'initialPageParam'
  >

export type SuspenseInfiniteQueryConfig<
  FetcherFnType extends (...args: any) => any
> = Omit<
  UseSuspenseInfiniteQueryOptions<
    PromiseValue<ReturnType<FetcherFnType>>,
    AxiosError
  >,
  'queryKey' | 'initialPageParam' | 'queryFn'
>

export type MutationConfig<FetcherFnType extends (...args: any) => any> =
  UseMutationOptions<
    PromiseValue<ReturnType<FetcherFnType>>,
    AxiosError,
    Parameters<FetcherFnType>
  >

export type { FetchNextPageOptions, InfiniteQueryObserverResult, QueryKey }
