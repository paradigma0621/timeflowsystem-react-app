import * as opTypes from 'opTypes'

import { getMountedUrl } from 'data/formatters'
import * as constants from 'features/person/constants/api'
import { httpClient }  from 'lib'

const fetchPersonFindById = async (
  pathParams?: opTypes.PersonFindByIdRequestPathParams
): Promise<opTypes.PersonFindByIdResponse> => {
  return httpClient
    .get(getMountedUrl(constants.PERSON_PATH_FIND_BY_ID, { pathParams }))
    .then(data => data)
}

export default fetchPersonFindById
