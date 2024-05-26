// src/hooks/useStringData.ts
import { useQuery } from 'react-query';
import axios from 'axios';

export function useStringData() {
  return useQuery<string>({
    queryKey: ['stringData'],
    queryFn: async (): Promise<string> => {
      const { data } = await axios.get('http://localhost:8100/persons/jdbc/2'); // Exemplo de endpoint
      return data; // Supondo que o endpoint retorna um objeto com uma propriedade 'title'
    },
  });
}
