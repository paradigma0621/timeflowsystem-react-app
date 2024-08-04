import React from 'react';
import StringDataComponent from './components/StringDataComponent';
import PersonList from './components/PersonList';
import FormularySavePerson from './components/FormularySavePerson';

const App: React.FC = () => {
  return (
    <div>
      <StringDataComponent /> 
      <PersonList />
      <FormularySavePerson />
      {/*
      <PersonsTable /> 
        <Formulary />
      
     
    TODO trabalhar nesse cara <PersonsTable /> 
      <FormularySavePerson />*/}
    </div>
  );
};

export default App;

