import { useQuery } from 'react-query';
import axios from 'axios';

export function useStringData() {
  return useQuery<string>({
    queryKey: ['key1'],
    queryFn: async (): Promise<string> => {
      const { data } = await axios.get('http://localhost:8100/persons/jdbc/2');
      return data.name;
    },
  });
}
