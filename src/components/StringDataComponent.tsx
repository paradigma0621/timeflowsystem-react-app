import React from 'react';
import { useStringData } from '../hooks/useStringData';

const StringDataComponent: React.FC = () => {
  const { data, error, isLoading } = useStringData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <div>
      <h1>String Data</h1>
      <p>{data}</p>
    </div>
  );
};

export default StringDataComponent;

