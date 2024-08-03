import * as opTypes from 'opTypes'

import * as constants from 'constants/api'
import { getMountedUrl } from 'data/formatters'
import { httpClient } from 'lib'

const fetchPersonFindAll = async (
  queryParams?: opTypes.PersonFindAllRequestQueryParams
): Promise<opTypes.PersonFindAllResponse> => {
  return httpClient
    .get(getMountedUrl(constants.PERSON_PATH_FIND_ALL, { queryParams }))
    .then(data => data.data)
}

export default fetchPersonFindAll
