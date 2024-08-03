const ABSENCE_SITUATION_BASE_PATH = '/absence-situations'
const AREA_BASE_PATH = '/areas'
const BUSINESS_UNIT_BASE_PATH = '/business-units'
const CITY_BASE_PATH = '/cities'
const COMPANY_BASE_PATH = '/companies'
const PERSON_BASE_PATH = '/persons'
const CLIENT_TYPE_BASE_PATH = '/client-types'
const SERVICE_TYPE_BASE_PATH = '/service-types'
const SCHEDULE_BASE_PATH = '/schedules'
const SCHEDULE_GROUP_BASE_PATH = '/schedule-groups'
const WORKPLACE_PARTICULARITY_CATEGORY_BASE_PATH =
  '/workplace-particularity-categories'
const SHIFT_BASE_PATH = '/shifts'
const REPLACEMENT_REASON_BASE_PATH = '/replacement-reasons'
const REPLACEMENT_RESOURCE_BASE_PATH = '/replacement-resources'
const DOCUMENT_MODEL_BASE_PATH = '/document-model'
const DEVICE_BASE_PATH = '/devices'
const DEVICE_KIOSK_BASE_PATH = '/device-kiosks'
const CLIENT_BASE_PATH = '/clients'
const WORKPLACE_BASE_PATH = '/workplaces'
const USER_BASE_PATH = '/users'
const DEMISSION_REASONS_BASE_PATH = '/demission-reasons'
const COMMENT_BASE_PATH = '/comments'
const DOCUMENT_BASE_PATH = '/documents'
const VISIT_BASE_PATH = '/visits'

export const ABSENCE_SITUATION_PATH_FIND_ALL = ABSENCE_SITUATION_BASE_PATH
export const AREA_PATH_FIND_ALL = AREA_BASE_PATH
export const BUSINESS_UNIT_PATH_FIND_ALL = BUSINESS_UNIT_BASE_PATH
export const CITY_PATH_FIND_ALL = CITY_BASE_PATH
export const CLIENT_PATH_FIND_ALL = CLIENT_BASE_PATH
export const CLIENT_TYPE_PATH_FIND_ALL = CLIENT_TYPE_BASE_PATH
export const COMPANY_PATH_FIND_ALL = COMPANY_BASE_PATH
export const PERSON_PATH_FIND_ALL = PERSON_BASE_PATH
export const SERVICE_TYPE_PATH_FIND_ALL = SERVICE_TYPE_BASE_PATH
export const SCHEDULE_GROUP_PATH_FIND_ALL = SCHEDULE_GROUP_BASE_PATH
export const WORKPLACE_PARTICULARITY_CATEGORY_PATH_FIND_ALL =
  WORKPLACE_PARTICULARITY_CATEGORY_BASE_PATH
export const SHIFT_PATH_FIND_ALL = SHIFT_BASE_PATH
export const REPLACEMENT_REASON_PATH_FIND_ALL = REPLACEMENT_REASON_BASE_PATH
export const REPLACEMENT_RESOURCE_PATH_FIND_ALL = REPLACEMENT_RESOURCE_BASE_PATH
export const DOCUMENT_MODEL_PATH_FIND_ALL = DOCUMENT_MODEL_BASE_PATH
export const DEVICE_PATH_FIND_ALL = DEVICE_BASE_PATH
export const DEVICE_KIOSK_PATH_FIND_ALL = DEVICE_KIOSK_BASE_PATH
export const DEMISSION_REASONS_PATH_FIND_ALL = DEMISSION_REASONS_BASE_PATH

export const SCHEDULE_PATH_FIND_ALL = SCHEDULE_BASE_PATH
export const SCHEDULE_ROTATION_PATH_FIND_ALL = `${SCHEDULE_BASE_PATH}/{scheduleId}/rotations`

export const COMMENT_PATH_FIND_ALL_BY_WORKPLACE_ID = `${COMMENT_BASE_PATH}/workplace/{workplaceId}`
export const COMMENT_PATH_FIND_ALL_BY_PERSON_ID = `${COMMENT_BASE_PATH}/person/{personId}`
export const COMMENT_PATH_CREATE_BY_WORKPLACE_ID = `${COMMENT_BASE_PATH}/workplace/{workplaceId}`
export const COMMENT_PATH_CREATE_BY_PERSON_ID = `${COMMENT_BASE_PATH}/person/{personId}`
export const COMMENT_PATH_REMOVE_BY_WORKPLACE = `${COMMENT_BASE_PATH}/{commentId}/workplace/{workplaceId}`

export const DEVICE_PATH_COLLABORATOR_UPDATE = `${DEVICE_BASE_PATH}/{deviceCode}/collaborators`
export const DEVICE_BIOMETRY_CREATE_LINK = `${DEVICE_BASE_PATH}/biometry/link`
export const DEVICE_BIOMETRY_CREATE = `${DEVICE_BASE_PATH}/biometry`
export const DEVICE_FINGERPRINT_CREATE_LINK = `${DEVICE_BASE_PATH}/{deviceCode}/fingerprint/link`
export const DEVICE_FINGERPRINT_CREATE = `${DEVICE_BASE_PATH}/{deviceCode}/fingerprint`
export const DEVICE_PATH_UPDATE_CODE = `${DEVICE_BASE_PATH}/{deviceCode}/code`
export const DEVICE_CREATE_PASSWORD = `${DEVICE_BASE_PATH}/password`
export const DEVICE_UPDATE = `${DEVICE_BASE_PATH}/{deviceId}`
export const DEVICE_PATH_RESET_UPDATE = `${DEVICE_BASE_PATH}/{deviceCode}/reset`
export const DEVICE_PATH_DATE_UPDATE = `${DEVICE_BASE_PATH}/{deviceCode}/date`
export const DEVICE_PATH_KEEP_IN_TOUCH_FIND_ALL = `${DEVICE_BASE_PATH}/{deviceId}/keep-in-touch`
export const DEVICE_PATH_KEEP_IN_TOUCH_FIND_BY_ID = `${DEVICE_BASE_PATH}/keep-in-touch/{deviceKeepInTouchId}`
export const DEVICE_PATH_KEEP_IN_TOUCH_CREATE = `${DEVICE_BASE_PATH}/{deviceId}/keep-in-touch`
export const DEVICE_PATH_KEEP_IN_TOUCH_REMOVE = `${DEVICE_BASE_PATH}/{deviceCode}/keep-in-touch/{deviceKeepInTouchId}`
export const DEVICE_PATH_FIND_BY_ID = `${DEVICE_BASE_PATH}/{deviceId}`
export const DEVICE_PATH_UPDATE_NAME = `${DEVICE_BASE_PATH}/{deviceId}/name`
export const DEVICE_PATH_CREATE_SNAPSHOT = `${DEVICE_BASE_PATH}/{deviceId}/snapshot`

export const DOCUMENT_PATH_DOWNLOAD_BY_ID = `${DOCUMENT_BASE_PATH}/{documentId}/download`

export const PERSON_ABSENCE_FIND_BY_ID = `${PERSON_BASE_PATH}/{personId}/absences`
export const PERSON_INCONSISTENCIES_COUNTERS = `${PERSON_BASE_PATH}/{personId}/inconsistencies/counters`
export const PERSON_FINGERPRINT_FIND_BY_ID = `${PERSON_BASE_PATH}/{personId}/fingerprint`
export const PERSON_PATH_NOTICE_FIND_ALL = `${PERSON_BASE_PATH}/{personId}/notices`
export const PERSON_PATH_NOTICE_TYPES_FIND_ALL = `${PERSON_BASE_PATH}/{personId}/notice-types`

export const CLIENT_PATH_COUNTERS = `${CLIENT_BASE_PATH}/{clientId}/counters`

export const VISIT_FIND_ALL_BY_PERSON_ID = `${VISIT_BASE_PATH}/persons/{personId}`
export const VISIT_PATH_FIND_ALL_BY_WORKPLACE_ID = `${VISIT_BASE_PATH}/workplace/{workplaceId}`

export const WORKPLACE_PATH_FIND_ALL = WORKPLACE_BASE_PATH
export const WORKPLACE_PATH_FIND_ALL_DESK = `${WORKPLACE_BASE_PATH}/desk`
export const WORKPLACE_PATH_FIND_ALL_DESK_PERSON = `${WORKPLACE_BASE_PATH}/desk/{workplaceId}/persons`
export const WORKPLACE_PATH_FIND_BY_ID_DESK_PERSON = `${WORKPLACE_BASE_PATH}/desk/{workplaceId}/persons/{personId}`
export const WORKPLACE_PATH_COUNTERS = `${WORKPLACE_BASE_PATH}/{workplaceId}/counters`
export const WORKPLACE_PATH_DEVICES_COUNTERS = `${WORKPLACE_BASE_PATH}/{workplaceId}/devices/counters`
export const WORKPLACE_PATH_PARTICULARITY_STATUS = `${WORKPLACE_BASE_PATH}/{workplaceId}/particularities/status`
export const WORKPLACE_PATH_SCHEDULES = `${WORKPLACE_BASE_PATH}/{workplaceId}/schedules`
export const WORKPLACE_PATH_STATUS = `${WORKPLACE_BASE_PATH}/{workplaceId}/status`
export const WORKPLACE_PATH_MARKS_DESK_PERSON = `${WORKPLACE_BASE_PATH}/desk/{workplaceId}/persons/{personId}/marks`

export const USER_PATH_ME = `${USER_BASE_PATH}/me`
