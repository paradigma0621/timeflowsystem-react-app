import { useState, useEffect } from 'react';

function Learning01_UseEffectSimple() {
  const [personId, setPersonId] = useState<string>('');
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    console.log('clicked with input: ' + personId);
  }, [shouldFetch]);
  
  const method = () => {
    setShouldFetch(!shouldFetch);
  }

  return (
    <div>
      <h1>UseEffect Simple</h1>
      <input
        type="text"
        placeholder="Enter person ID"
        onChange={(e) => setPersonId(e.target.value)}
        ></input>
      <button  onClick={method}>show msg in console</button>
    </div>
  )
}

export default Learning01_UseEffectSimple;
