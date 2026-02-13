import { getUrlWithCustomer } from '../getUrlWithCustomer'

let windowSpy: jest.SpyInstance

beforeEach(() => {
  windowSpy = jest.spyOn(globalThis, 'window', 'get')
})

afterEach(() => {
  windowSpy.mockRestore()
})

describe('[Data:Helpers] getUrlWithCustomer', () => {
  it('should return URL with customer prefix if hostname has prefix', () => {
    windowSpy.mockImplementation(() => ({
      location: { hostname: 'customer.app.com' }
    }))
    const result = getUrlWithCustomer('https://app.com')
    expect(result).toBe('https://customer.app.com')
  })

  it('should return base URL if hostname does not have customer prefix', () => {
    windowSpy.mockImplementation(() => ({
      location: { hostname: 'app.com' }
    }))
    const baseUrl = 'https://app.com'
    const result = getUrlWithCustomer(baseUrl)
    expect(result).toBe('https://app.com')
  })

  it('should handle URLs with www prefix and retain protocol', () => {
    windowSpy.mockImplementation(() => ({
      location: { hostname: 'www.customer.app.com' }
    }))
    const baseUrl = 'https://app.com'
    const result = getUrlWithCustomer(baseUrl)
    expect(result).toBe('https://customer.app.com')
  })

  it('should handle URLs with http and https protocol and retain it', () => {
    windowSpy.mockImplementation(() => ({
      location: { hostname: 'customer.app.com' }
    }))
    const baseUrl = 'http://app.com'
    const result = getUrlWithCustomer(baseUrl)
    expect(result).toBe('http://customer.app.com')
  })
})
