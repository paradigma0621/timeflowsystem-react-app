import { USER_ACCOUNT_LOGOUT, FRONTEND_URL_BASE } from 'constants/api';
const Logout = () => {

  window.location.href = USER_ACCOUNT_LOGOUT;
  window.location.href = FRONTEND_URL_BASE;
  return (
    <div>
      <h1>Logout Data</h1>
    </div>
  );
};

export default Logout;
