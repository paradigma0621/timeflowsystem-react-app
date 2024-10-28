import * as opTypes from 'opTypes'

import * as constants from 'constants/api'
import { getMountedSecurityUrl } from 'data/formatters'
import { httpClient } from 'lib'

const fetchUserAccountFindAll = async (
  queryParams?: opTypes.UserAccountFindAllRequestQueryParams
): Promise<opTypes.UserAccountFindAllResponse> => {
  return httpClient
    .get(getMountedSecurityUrl(constants.USERACCOUNT_PATH_FIND_ALL, { queryParams }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      withCredentials: true, 
    })
    .then(data => data.data)
}

export default fetchUserAccountFindAll
