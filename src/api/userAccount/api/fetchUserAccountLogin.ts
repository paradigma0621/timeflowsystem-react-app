import * as opTypes from 'opTypes'

import * as constants from 'constants/api'
import { getMountedSecurityUrl } from 'data/formatters'
import { httpClient } from 'lib'

const fetchUserAccountLogin = async (
    bodyParams: opTypes.UserAccountRequestBody
  ): Promise<string> => {
    return httpClient
      .post(getMountedSecurityUrl(constants.USER_ACCOUNT_LOGIN), bodyParams, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      withCredentials: true, 
    })
      .then(data => data.data)
  }

export default fetchUserAccountLogin

