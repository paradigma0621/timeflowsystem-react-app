import { useUserAccountFindAllQuery } from 'api/userAccount'
import 'styles/UserAccountsTable.css';
import { IUserAccount } from 'types/userAccount';

function UserAccountsList() {
  const searchTerm = ''
  const { data, isPending } = useUserAccountFindAllQuery(
    {
      page: 0,
      searchTerm,
      size: 10,
      sort: ['email', 'ASC']
    },
    {
      enabled: true,
      throwOnError: false
    }
  )
  
  const userAccounts = Array.isArray(data) ? data : [];

  if (isPending)
    return <div>Loading...</div>;
    
  return (
    <div>
      <h1>User Accounts Table</h1>
        <table className='user-account-table'>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
            userAccounts?.map((userAccount: IUserAccount) => (
              <tr key={userAccount.email}>
                <td>{userAccount.email}</td>
                <td>{userAccount.pwd}</td>
              </tr>
            ))
            }
          </tbody>
        </table> 
      </div>
  );
};

export default UserAccountsList;