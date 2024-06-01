import { useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';
import { IPerson } from '../types/person';

function fetchPersons(): Promise<IPerson[]> {
  const data = axios.get(`http://localhost:8100/persons/all`).then(response => response.data);
  return data;
}

export function usePersons(): UseQueryResult<IPerson[]> {
  return useQuery(['key'], () => fetchPersons());
}
