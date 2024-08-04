import { Suspense } from 'react'

import {
  queryClient,
  QueryClientProvider,
  ReactQueryDevtools,
} from 'lib'

import { MainProviderProps } from './types'

const MainProvider = ({ children }: MainProviderProps) => (
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
)

export default MainProvider
