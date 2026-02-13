import * as opTypes from 'opTypes'

import * as constants from 'constants/api'
import { getMountedUrl } from 'data/formatters'
import { httpClient } from 'lib'

const fetchClockingFindAll = async (
  queryParams?: opTypes.ClockingFindAllRequestQueryParams
): Promise<opTypes.ClockingFindAllResponse> => {
  return httpClient
    .get(getMountedUrl(constants.CLOCKING_PATH_FIND_ALL, { queryParams }))
    .then(data => data.data)
}

export default fetchClockingFindAll
