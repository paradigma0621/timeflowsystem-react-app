import { PaginationResponse } from 'shared/models'
import { IPerson } from 'types/person';

export type PersonFindAllRequestQueryParams = {
  page?: number
  searchTerm: string
  size?: number
  sort?: string[]
}

export type PersonFindAllResponse = PaginationResponse<IPerson>;