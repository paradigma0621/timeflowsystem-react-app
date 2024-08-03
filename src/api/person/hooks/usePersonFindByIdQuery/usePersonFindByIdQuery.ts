import { fetchPersonFindById } from 'api/person/api'
import { prepareQueryKey } from 'data/helpers'
import * as constants from 'features/person/constants/api'
import { useQuery } from 'lib'
import * as opTypes from 'opTypes'

import { UsePersonFindByIdQueryOptions } from './types'

export const PERSON_FIND_BY_ID_QUERY_KEY = constants.PERSON_PATH_FIND_BY_ID

const usePersonFindByIdQuery = (
  pathParams?: opTypes.PersonFindByIdRequestPathParams,
  config?: UsePersonFindByIdQueryOptions
) => {
  return useQuery({
    queryKey: prepareQueryKey([PERSON_FIND_BY_ID_QUERY_KEY, pathParams]),
    ...config,
    queryFn: () => fetchPersonFindById(pathParams)
  })
}

export default usePersonFindByIdQuery
