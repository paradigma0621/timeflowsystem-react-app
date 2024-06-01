import React, { useState, useEffect } from 'react';
import { runInAsync } from '../../hooks/useHook';

function Learning02() {
  const [countMax, setCountMax] = useState<number>(0);
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data, error, isLoading, refetch } = runInAsync(countMax, shouldFetch);

  const handleClick = () => {
    setShouldFetch(true);
  };

  useEffect(() => {
    if (shouldFetch && countMax) {
      refetch();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  
  return (
    <div>
      <h1>Async measurement</h1>
      <input
        type="text"
        placeholder="Enter person ID"
        onChange={(e) => setCountMax(Number(e.target.value))}
        ></input>
      <button onClick={handleClick}>Count Until</button>
    </div>
  )
}

export default Learning02;
