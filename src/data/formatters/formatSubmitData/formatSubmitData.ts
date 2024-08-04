import { formatCamelCase } from '..'

export const formatSubmitData = <T>(
  data: Record<string, any>,
  itemKey = 'id',
  ignoreItems: string[] = []
): T => {
  let obj = {}
  Object.entries(data).forEach(item => {
    const [key, value]: [string, any] = item
    const isEmptyValue = ['', null, undefined].includes(value)
    const isIgnoreItem = ignoreItems.find(ignoreItem => ignoreItem === key)

    if (isIgnoreItem || isEmptyValue) return

    if (typeof value === 'object' && isNaN(Date.parse(value))) {
      const internalKey = formatCamelCase(`${[key]}-${itemKey}`)
      const internalValue = value?.[itemKey]
      obj = { ...obj, [internalKey]: internalValue }
      return
    }

    obj = { ...obj, [key]: value }
  })

  return obj as T
}
