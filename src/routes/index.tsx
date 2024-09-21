import OnePerson from '../components/Person/FindById/OnePerson';
import PersonsList from '../components/Person/FindAll/PersonsList';
import AddPerson from 'components/Person/Save/AddPerson';
import Menu from 'components/Menu';
import Header from 'components/Header';
import Start from 'components/Start';
import About from 'components/About';
import NotFound from 'components/NotFound';
import { HashRouter, Routes, Route } from 'react-router-dom';

  const AppRoutes = () => {
    return (
      <HashRouter>
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ width: '250px', backgroundColor: '#f0f0f0', border: '2px solid black' }}> 
            <Menu /> 
          </div>
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}> 
            <Routes>
              <Route path='/' element={<Header />} >
                <Route index element={<Start />} />
                <Route path='addperson' element={<AddPerson />} />
                <Route path='onePerson' element={<OnePerson />} />
                <Route path='about' element={<About />} />
                <Route path='personsList' element={<PersonsList />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }

export default AppRoutes
