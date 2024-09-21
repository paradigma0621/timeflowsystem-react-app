import { fetchClockingCreate } from 'api/clocking/api'
import { MutationConfig } from 'lib'

export type UseClockingCreateMutationOptions = MutationConfig<
  typeof fetchClockingCreate
>
