import { fetchPersonCreate } from 'api/person/api'
import { useMutation } from 'lib'

import { UsePersonCreateMutationOptions } from './types'

const usePersonCreateMutation = (
  config?: UsePersonCreateMutationOptions
) => {
  return useMutation({
    ...config,
    mutationFn: ([bodyParams]) => fetchPersonCreate(bodyParams)
  })
}

export default usePersonCreateMutation
