import React from 'react';
import StringDataComponent from './components/StringDataComponent';
import PersonList from './components/PersonList';

const App: React.FC = () => {
  return (
    <div>
      <StringDataComponent /> 
      <PersonList />
      {/*
      <PersonsTable /> 
        <Formulary />
      
     
    TODO trabalhar nesse cara <PersonsTable /> 
      <FormularySavePerson />*/}
    </div>
  );
};

export default App;

