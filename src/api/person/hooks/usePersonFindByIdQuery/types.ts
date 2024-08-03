import { fetchPersonFindById } from 'api/person/api'
import { QueryConfig } from 'lib'

export type UsePersonFindByIdQueryOptions = QueryConfig<
  typeof fetchPersonFindById
>
