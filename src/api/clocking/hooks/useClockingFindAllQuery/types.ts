import { fetchClockingFindAll } from 'api/clocking/api'
import { QueryConfig } from 'lib'

export type UseClockingFindAllQueryOptions = QueryConfig<typeof fetchClockingFindAll>
