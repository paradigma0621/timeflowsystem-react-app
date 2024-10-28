import * as opTypes from 'opTypes'

import { fetchUserAccountFindAll } from 'api/userAccount/api'
import * as constants from 'constants/api'
import { prepareQueryKey } from 'data/helpers'
import { useQuery } from 'lib'

import { UseUserAccountFindAllQueryOptions } from './types'

const USER_ACCOUNT_FIND_ALL_QUERY_KEY = constants.USERACCOUNT_PATH_FIND_ALL

const useUserAccountFindAllQuery = (
  queryParams?: opTypes.UserAccountFindAllRequestQueryParams,
  config?: UseUserAccountFindAllQueryOptions
) => {
  return useQuery({
    queryKey: prepareQueryKey([USER_ACCOUNT_FIND_ALL_QUERY_KEY, queryParams]),
    ...config,
    queryFn: () => fetchUserAccountFindAll(queryParams)
  })
}

export default useUserAccountFindAllQuery
