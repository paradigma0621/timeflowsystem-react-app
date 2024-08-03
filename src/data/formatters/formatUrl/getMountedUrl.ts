import { GetMountedUrlProps } from './types'
import { URL_BASE } from 'features/person/constants/api'

export const getMountedUrl = (
  urlBase: string,
  params?: GetMountedUrlProps
): string => {
  let url = urlBase
  const urlSearchParams = new URLSearchParams()

  Object.entries(params?.pathParams || {}).forEach(([key, value]) => {
    url = url.replace(`{${key}}`, value.toString())
  })

  Object.entries(params?.queryParams || {}).forEach(([key, value]) => {
    const isValidValue = !Array.isArray(value) || value.length
    if (value && value !== null && value !== undefined && isValidValue) {
      urlSearchParams.append(key, value.toString())
    }
  })

  return URL_BASE + url + (urlSearchParams.toString() ? `?${urlSearchParams}` : '')
}
