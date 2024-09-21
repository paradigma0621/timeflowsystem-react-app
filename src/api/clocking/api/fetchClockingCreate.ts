import * as opTypes from 'opTypes'

import * as constants from 'constants/api'
import { getMountedUrl } from 'data/formatters'
import { httpClient } from 'lib'

const fetchClockingCreate = async (
    bodyParams: opTypes.ClockingCreateRequestBody
  ): Promise<opTypes.ClockingCreateResponse> => {
    return httpClient
      .post(getMountedUrl(constants.CLOCKING_PATH_CREATE), bodyParams)
      .then(data => data.data)
  }
  
export default fetchClockingCreate

