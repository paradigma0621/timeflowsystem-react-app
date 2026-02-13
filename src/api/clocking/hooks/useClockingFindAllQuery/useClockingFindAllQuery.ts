import * as opTypes from 'opTypes'

import { fetchClockingFindAll } from 'api/clocking/api'
import * as constants from 'constants/api'
import { prepareQueryKey } from 'data/helpers'
import { useQuery } from 'lib'

import { UseClockingFindAllQueryOptions } from './types'

const CLOCKING_FIND_ALL_QUERY_KEY = constants.CLOCKING_PATH_FIND_ALL

const useClockingFindAllQuery = (
  queryParams?: opTypes.ClockingFindAllRequestQueryParams,
  config?: UseClockingFindAllQueryOptions
) => {
  return useQuery({
    queryKey: prepareQueryKey([CLOCKING_FIND_ALL_QUERY_KEY, queryParams]),
    ...config,
    queryFn: () => fetchClockingFindAll(queryParams)
  })
}

export default useClockingFindAllQuery
