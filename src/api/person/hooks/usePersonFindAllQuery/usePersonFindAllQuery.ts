import * as opTypes from 'opTypes'

import { fetchPersonFindAll } from 'api/person/api'
import * as constants from 'constants/api'
import { prepareQueryKey } from 'data/helpers'
import { useQuery } from 'lib'

import { UsePersonFindAllQueryOptions } from './types'

const PERSON_FIND_ALL_QUERY_KEY = constants.PERSON_PATH_FIND_ALL

const usePersonFindAllQuery = (
  queryParams?: opTypes.PersonFindAllRequestQueryParams,
  config?: UsePersonFindAllQueryOptions
) => {
  return useQuery({
    queryKey: prepareQueryKey([PERSON_FIND_ALL_QUERY_KEY, queryParams]),
    ...config,
    queryFn: () => fetchPersonFindAll(queryParams)
  })
}

export default usePersonFindAllQuery
