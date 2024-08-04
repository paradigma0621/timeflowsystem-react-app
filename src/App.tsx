import React from 'react';
import StringDataComponent from './components/StringDataComponent';
import PersonList from './components/PersonList';
import FormularySavePerson from './components/FormularySavePerson';

import { HashRouter } from 'react-router-dom'

import MainProvider from 'providers/main'
import AppRoutes from 'routes'

const App = () => {
  return (
    <MainProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </MainProvider>
  )
}

export default App
