import { usePersonFindAllQuery } from 'api/person'
import 'styles/PersonsTable.css';
import { IPerson } from 'types/person';

function PersonList() {
  const searchTerm = ''
  const { data } = usePersonFindAllQuery(
    {
      page: 0,
      searchTerm,
      size: 10,
      sort: ['id', 'ASC']
    },
    {
      enabled: true, //isBelongsCustomer && !!searchTerm?.length,
      throwOnError: false
    }
  )
 var persons = data?.content || [];

  return (
    <div>
      <h1>Persons Table</h1>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Register Date</th>
            <th>Removed</th>
            <th>CustomerId</th>
            <th>ProfileId</th>
            <th>Enrollment</th>
          </tr>
        </thead>
        <tbody>
          {
          persons?.map((person: IPerson) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.registerDate}</td>
              <td>{person.removed ? 'Yes' : 'No'}</td>
              <td>{person.customerId}</td>
              <td>{person.profileId}</td>
              <td>{person.enrollment}</td>
            </tr>
          ))
        }
        </tbody>
          </table> 
      </div>
  );
};

export default PersonList;