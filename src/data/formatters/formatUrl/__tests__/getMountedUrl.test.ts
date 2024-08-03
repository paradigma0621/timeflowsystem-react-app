import { getMountedUrl } from '..'

describe('[Data:Formatters] getMountedUrl', () => {
  it('should mount url with path params', () => {
    const url = getMountedUrl('/api/users/{id}', {
      pathParams: {
        id: 1
      }
    })
    expect(url).toBe('/api/users/1')
  })

  it('should mount url with empty query params', () => {
    const url = getMountedUrl('/api/users', {
      queryParams: {}
    })
    expect(url).toBe('/api/users')
  })

  it('should mount url with query params', () => {
    const url = getMountedUrl('/api/users', {
      queryParams: {
        id: 1
      }
    })
    expect(url).toBe('/api/users?id=1')
  })

  it('should mount url with a path and query params', () => {
    const url = getMountedUrl('/api/users/{id}', {
      pathParams: {
        id: 1
      },
      queryParams: {
        name: 'John'
      }
    })
    expect(url).toBe('/api/users/1?name=John')
  })

  it('should mount url with path and query params with special characters', () => {
    const url = getMountedUrl('/api/users/{id}', {
      pathParams: {
        id: 1
      },
      queryParams: {
        name: 'John Doe'
      }
    })
    expect(url).toBe('/api/users/1?name=John+Doe')
  })

  it('should mount url with path and query params with array', () => {
    const url = getMountedUrl('/api/users/{id}', {
      pathParams: {
        id: 1
      },
      queryParams: {
        name: ['John', 'Jane']
      }
    })
    expect(url).toBe('/api/users/1?name=John%2CJane')
  })

  it('should mount url with path and query params without array if array is empty', () => {
    const url = getMountedUrl('/api/users/{id}', {
      pathParams: {
        id: 1
      },
      queryParams: {
        name: []
      }
    })
    expect(url).toBe('/api/users/1')
  })
})
