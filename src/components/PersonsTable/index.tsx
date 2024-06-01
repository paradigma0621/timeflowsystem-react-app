import React, { useState, useEffect } from 'react';
import { usePersons } from '../../hooks/usePersons';
import { IPerson } from '../../types/person';
import './PersonsTable.css';

function PersonList() {
  const { data, error, isLoading } = usePersons();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Register Date</th>
            <th>Removed</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((person: IPerson) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.registerDate}</td>
              <td>{person.removed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {(data as IPerson[] | undefined)?.map(person => (
          <div key={person.id}>
            <h2>{person.name}</h2>
            <p>Register Date: {person.registerDate}</p>
            <p>Removed: {person.removed ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonList;