// src/App.tsx
import React from 'react';
import StringDataComponent from './components/StringDataComponent';
import Formulary from './components/Formulary';

const App: React.FC = () => {
  return (
    <div>
      <StringDataComponent />
      <Formulary />
    </div>
  );
};

export default App;

