import { IPerson } from 'types/person';

export interface PersonFindByIdResponse {
  data: IPerson;
  status: number;
  statusText: string;
}

