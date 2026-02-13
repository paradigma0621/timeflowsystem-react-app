import { cleanUrl } from '..'

export const getUrlWithCustomer = (baseUrl: string): string => {
  const { url: hostname } = cleanUrl(window.location.hostname)

  const { url, protocol } = cleanUrl(baseUrl)

  const hostnameParts = hostname.split(/[.:]/)
  const baseUrlParts = url.split(/[.:]/)

  if (hostnameParts[0] !== baseUrlParts[0]) {
    return `${protocol}${hostnameParts[0]}.${url}`
  }

  return `${protocol}${url}`
}
