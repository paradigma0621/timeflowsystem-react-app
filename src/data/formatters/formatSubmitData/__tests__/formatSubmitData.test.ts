import { formatSubmitData } from '..'

describe('[Data:Formatters] formatSubmitData', () => {
  it('should format object attributes with default key', () => {
    const data = { anyObj: { id: '1', name: 'any_name' } }
    const expectedData = { anyObjId: '1' }
    expect(formatSubmitData(data)).toEqual(expectedData)
  })

  it('should format object attributes with key id', () => {
    const data = { data: { id: '1', name: 'any_name' } }
    const expectedData = { dataName: 'any_name' }
    expect(formatSubmitData(data, 'name')).toEqual(expectedData)
  })

  it('should keep non-object attributes equal to initial data', () => {
    const data = {
      description: 'any_string'
    }
    const expectedData = { description: 'any_string' }
    expect(formatSubmitData(data, 'name')).toEqual(expectedData)
  })

  it('should format object attributes ignoring attributes passed by parameter', () => {
    const data = {
      data: { id: '1', name: 'any_name' },
      ignoredData: { id: 1, name: 'any_name_ignored' }
    }
    const expectedData = { dataName: 'any_name' }
    expect(formatSubmitData(data, 'name', ['ignoredData'])).toEqual(
      expectedData
    )
  })
})
