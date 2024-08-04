import { formatCamelCase } from '..'

describe('[Data:Formatters] formatCamelCase', () => {
  it('should format a string with space', () => {
    expect(formatCamelCase('any string')).toBe('anyString')
  })
  it('should format a string with hyphen', () => {
    expect(formatCamelCase('ANY-String')).toBe('anyString')
  })
  it('should format a string with underscore', () => {
    expect(formatCamelCase('ANY__string')).toBe('anyString')
  })
  it('should format a string with multiples special characters', () => {
    expect(formatCamelCase('OTHER__any-string')).toBe('otherAnyString')
  })
  it('should format a string with capital differents', () => {
    expect(formatCamelCase('OTHER_ANY-STRING')).toBe('otherAnyString')
  })
  it('should keep formatted string', () => {
    expect(formatCamelCase('anyString')).toBe('anyString')
  })
})
