import OnePerson from '../components/Person/FindById/OnePerson';
import PersonsList from '../components/Person/FindAll/PersonsList';
import AddPerson from 'components/Person/Save/AddPerson';
import AddClocking from 'components/Clocking/Save/AddClocking';
import Menu from 'components/Menu';
import Header from 'components/Header';
import Login from 'components/Login';
import Logout from 'components/Logout';
import About from 'components/About';
import NotFound from 'components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserAccountsList from 'components/UserAccount/FindAll/UserAccountsList';

  const AppRoutes = () => {
    return (
      <Router>
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ width: '250px', backgroundColor: '#f0f0f0', border: '2px solid black' }}> 
            <Menu /> 
          </div>
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}> 
            <Routes>
              <Route path='/' element={<Header />} >
              <Route index element={<About />} />
              <Route path="/start" element={<Login />} />
              <Route path='addperson' element={<AddPerson />} />
              <Route path='addclocking' element={<AddClocking />} />                
              <Route path='onePerson' element={<OnePerson />} />
              <Route path='personsList' element={<PersonsList />} />
              <Route path='userAccountsList' element={<UserAccountsList />} />
              <Route path='logoutAccount' element={<Logout />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

export default AppRoutes
