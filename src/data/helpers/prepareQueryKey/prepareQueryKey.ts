export const prepareQueryKey = <T>(queryKey: T[]): T[] => {
  return queryKey.filter(item => item)
}
