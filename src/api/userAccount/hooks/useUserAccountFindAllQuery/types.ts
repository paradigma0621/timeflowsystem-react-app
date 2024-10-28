import { fetchUserAccountFindAll } from 'api/userAccount/api'
import { QueryConfig } from 'lib'

export type UseUserAccountFindAllQueryOptions = QueryConfig<typeof fetchUserAccountFindAll>
