import { fetchPersonFindAll } from 'api/person/api'
import { QueryConfig } from 'lib'

export type UsePersonFindAllQueryOptions = QueryConfig<
  typeof fetchPersonFindAll
>
