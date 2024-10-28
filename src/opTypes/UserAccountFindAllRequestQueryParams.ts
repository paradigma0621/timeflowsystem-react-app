import { PaginationResponse } from 'shared/models'
import { IUserAccount } from 'types/userAccount';

export type UserAccountFindAllRequestQueryParams = {
  page?: number
  searchTerm: string
  size?: number
  sort?: string[]
}

export type UserAccountFindAllResponse = PaginationResponse<IUserAccount>;