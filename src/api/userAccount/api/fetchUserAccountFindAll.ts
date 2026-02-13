import * as opTypes from 'opTypes'

import * as constants from 'constants/api'
import { getMountedSecurityUrl } from 'data/formatters'
import { httpClient } from 'lib'

const fetchUserAccountFindAll = async (
  queryParams?: opTypes.UserAccountFindAllRequestQueryParams,
  authorizationToken?: string // Token opcional
): Promise<opTypes.UserAccountFindAllResponse> => {
  //const headers = authorizationToken ? { Authorization: `${authorizationToken}` } : {}
  //const headers = { Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUaW1lZmxvdyIsInN1YiI6IkpXVCBUb2tlbiIsInVzZXJuYW1lIjoib3N3YWxkbyIsImF1dGhvcml0aWVzIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJpYXQiOjE3MzcxNzYxNTEsImV4cCI6MTczNzIwNjE1MX0.dJhFArISYROCLJ5gOu7R9HbKg8CmDbKxyx45WXuFQ4k'};
  
  // Realiza a requisição com o httpClient configurado
  return httpClient
    .get(getMountedSecurityUrl(constants.USERACCOUNT_PATH_FIND_ALL, { queryParams }))
    .then(data => data.data);
};

export default fetchUserAccountFindAll;