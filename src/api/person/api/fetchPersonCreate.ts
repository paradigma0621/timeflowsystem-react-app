import * as opTypes from 'opTypes'

import * as constants from 'constants/api'
import { getMountedUrl } from 'data/formatters'
import { httpClient } from 'lib'

const fetchPersonCreate = async (
    bodyParams: opTypes.PersonCreateRequestBody
  ): Promise<opTypes.PersonCreateResponse> => {
    return httpClient
      .post(getMountedUrl(constants.PERSON_PATH_CREATE), bodyParams)
      .then(data => data.data)
  }
  
export default fetchPersonCreate

