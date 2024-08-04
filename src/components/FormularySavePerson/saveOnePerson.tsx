import axios from 'axios';

export const createPerson = async (newPerson: any) => {
  const response = await axios.post('http://localhost:8100/persons/saveOne', newPerson);
  return response.data;
};