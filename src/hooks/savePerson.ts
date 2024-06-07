import { useQuery } from 'react-query';
import axios from 'axios';

async function fetchPersonById(id: string): Promise<string> {
  const { data } = await axios.get(`http://localhost:8100/persons/jdbc/${id}`);
  return data;
}

export function savePerson(id: string | null, shouldFetch: boolean) {
  return useQuery<string>({
    queryKey: ['person', id],
    queryFn: async (): Promise<string> => {
      if (!id) {
        return Promise.reject(new Error('No ID provided'));
      }
      return fetchPersonById(id);
    },
    enabled: shouldFetch && !!id, 
  });
}
