import { useMutation } from 'lib'

import { fetchPersonCreate } from '../../api'
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
