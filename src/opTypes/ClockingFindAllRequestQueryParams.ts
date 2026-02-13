import { PaginationResponse } from 'shared/models'
import { IClocking } from 'types/clocking';

export type ClockingFindAllRequestQueryParams = {
  page?: number
  searchTerm: string
  size?: number
  sort?: string[]
}

export type ClockingFindAllResponse = PaginationResponse<IClocking>;