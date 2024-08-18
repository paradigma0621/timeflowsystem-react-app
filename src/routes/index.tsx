import StringDataComponent from '../components/StringDataComponent';
import PersonsList from '../components/PersonsList';
import AddPerson from 'components/AddPerson';
import Menu from 'components/Menu';
import DefaultPage from 'components/DefaultPage';
import Inicio from 'components/Inicio';
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
              <Route path='/' element={<DefaultPage />} >
                <Route index element={<Inicio />} />
                <Route path='addperson' element={<AddPerson />} />
                <Route path='about' element={<About />} />
                <Route path='personsList' element={<PersonsList />} />
                <Route path='stringData' element={<StringDataComponent />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }

export default AppRoutes
