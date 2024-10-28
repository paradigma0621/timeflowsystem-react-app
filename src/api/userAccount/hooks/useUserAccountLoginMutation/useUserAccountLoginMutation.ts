import { useMutation } from 'lib'

import { fetchUserAccountLogin } from '../../api'
import { UseUserAccountLoginMutationOptions } from './types'

const useUserAccountLoginMutation = (
  config?: UseUserAccountLoginMutationOptions
) => {
  return useMutation({
    ...config,
    mutationFn: ([bodyParams]) => fetchUserAccountLogin(bodyParams)
  })
}

export default useUserAccountLoginMutation
