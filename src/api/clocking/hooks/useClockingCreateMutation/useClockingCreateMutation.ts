import { useMutation } from 'lib'

import { fetchClockingCreate } from '../../api'
import { UseClockingCreateMutationOptions } from './types'

const useClockingCreateMutation = (
  config?: UseClockingCreateMutationOptions
) => {
  return useMutation({
    ...config,
    mutationFn: ([bodyParams]) => fetchClockingCreate(bodyParams)
  })
}

export default useClockingCreateMutation
