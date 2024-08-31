import { fetchPersonCreate } from 'api/person/api'
import { MutationConfig } from 'lib'

export type UsePersonCreateMutationOptions = MutationConfig<
  typeof fetchPersonCreate
>
