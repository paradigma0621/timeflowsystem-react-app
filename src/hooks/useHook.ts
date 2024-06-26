import { useQuery } from 'react-query';
import axios from 'axios';

async function fetchPersonById(countMax: number): Promise<string> {
  const { data } = await axios.get(`http://localhost:8100/persons/count/${countMax}`);
  return data;
}

export function runInAsync(countMax: number | null, shouldFetch: boolean) {
  return useQuery<string>({
    queryKey: ['key', countMax],
    queryFn: async (): Promise<string> => {
      if (!countMax) {
        return Promise.reject(new Error('No count value provided'));
      }
      return fetchPersonById(countMax);
    },
    enabled: shouldFetch && !!countMax, 
  });
}
