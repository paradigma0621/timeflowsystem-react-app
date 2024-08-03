export type PaginationRequest = {
  number?: number
  numberOfElements?: number
}

export type PaginationResponse<T> = {
  content: T[]
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  size: number
  totalElements: number
  totalPages: number
}
