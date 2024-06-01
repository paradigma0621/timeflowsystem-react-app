import React, { useState, useEffect } from 'react';
import { usePerson } from '../../hooks/usePerson';

const PersonComponent = () => {
  const [personId, setPersonId] = useState<string>('');
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data, error, isLoading, refetch } = usePerson(personId, shouldFetch);

  const handleClick = () => {
    setShouldFetch(true);
  };

  useEffect(() => {
    if (shouldFetch && personId) {
      refetch();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <div>
      <h1>Person Details</h1>
      <input
        type="text"
        placeholder="Enter person ID"
        onChange={(e) => setPersonId(e.target.value)}
      />
      <button onClick={handleClick} disabled={!personId}>
        Fetch Person
      </button>
      {isLoading && <div>Loading...</div>}
      {error as Error && <div>Error: {(error as Error).message}</div>}
      {data && (
        <div>
          <p>Name: {data}</p>
          {/* Others informations */}
        </div>
      )}
    </div>
  );
};

export default PersonComponent;
