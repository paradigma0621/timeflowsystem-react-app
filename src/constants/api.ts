export const URL_BASE = 'http://localhost:8100'
export const SECURITY_URL_BASE = 'http://localhost:8091'
export const FRONTEND_URL_BASE = 'http://localhost:3000/'
const PERSON_BASE_PATH = '/persons'
const CLOCKING_BASE_PATH = '/clockings'
const SCHEDULE_BASE_PATH = '/schedules'
const USERACCOUNT_BASE_PATH = '/user-accounts'

export const PERSON_PATH_FIND_ALL = `${PERSON_BASE_PATH}/all`
export const PERSON_PATH_CREATE = `${PERSON_BASE_PATH}/saveOne`
export const CLOCKING_PATH_FIND_ALL = `${CLOCKING_BASE_PATH}/all`
export const CLOCKING_PATH_CREATE = `${CLOCKING_BASE_PATH}/saveOne`
export const SCHEDULE_ROTATION_PATH_FIND_ALL = `${SCHEDULE_BASE_PATH}/{scheduleId}/rotations`
export const USER_ACCOUNT_LOGIN = '/backendLoginEndpoint'
export const USER_ACCOUNT_LOGOUT = `${SECURITY_URL_BASE}/logout`
export const USERACCOUNT_PATH_FIND_ALL = `${USERACCOUNT_BASE_PATH}/all`