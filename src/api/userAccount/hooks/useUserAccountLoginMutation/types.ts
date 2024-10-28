import { fetchUserAccountLogin } from 'api/userAccount/api'
import { MutationConfig } from 'lib'

export type UseUserAccountLoginMutationOptions = MutationConfig<typeof fetchUserAccountLogin>
