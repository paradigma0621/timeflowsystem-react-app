import React from 'react';
import StringDataComponent from './components/StringDataComponent';
import Formulary from './components/Formulary';
import Learning02 from './components/Learning/Learning02_UseEffect';
import PersonsTable from './components/PersonsTable';
import FormularySavePerson from './components/FormularySavePerson';

const App: React.FC = () => {
  return (
    <div>
      <StringDataComponent />
      <Formulary /> 
      <Learning02 />
      <FormularySavePerson />
      <PersonsTable /> 
  
      
    </div>
  );
};

export default App;

