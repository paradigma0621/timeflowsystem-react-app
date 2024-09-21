export const URL_BASE = 'http://localhost:8100'

const PERSON_BASE_PATH = '/persons'
const CLOCKING_BASE_PATH = '/clockings'
const SCHEDULE_BASE_PATH = '/schedules'

export const PERSON_PATH_FIND_ALL = `${PERSON_BASE_PATH}/all`
export const PERSON_PATH_CREATE = `${PERSON_BASE_PATH}/saveOne`
export const CLOCKING_PATH_CREATE = `${CLOCKING_BASE_PATH}/saveOne`
export const SCHEDULE_ROTATION_PATH_FIND_ALL = `${SCHEDULE_BASE_PATH}/{scheduleId}/rotations`