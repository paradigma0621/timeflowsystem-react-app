import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createPerson } from './saveOnePerson';

const AddPerson = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createPerson, {
    onSuccess: () => {
      queryClient.invalidateQueries('persons');
    },
  });

  const [name, setName] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [registerDate, setRegisterDate] = useState('');
  const [removed, setRemoved] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [profileId, setProfileId] = useState('');
  
  const handleAddPerson = () => {
    mutation.mutate({
      name,
      enrollment,
      registerDate,
      removed,
      customerId,
      profileId
      });
  };

  return (
    <div>
      <h2>Add New Person</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleAddPerson();
      }}>
        <div>
          <label>Name
          {' '}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </label>
        </div>
        <div>
          <label>Enrollment
          {' '}
          <input
            type="text"
            value={enrollment}
            onChange={(e) => setEnrollment(e.target.value)}
          />
          </label>
        </div>
        <div>
          <label>RegisterDate
          {' '}
          <input
          type="datetime-local"
          value={registerDate}
          required={true}
          onChange={(e) => setRegisterDate(e.target.value)}
          />
          </label>
        </div>  
        <div>
          <label>Removed
          {' '}
          <input
            type="checkbox"
            checked={removed}
            onChange={(e) => setRemoved(e.target.checked)}>
          </input>
          </label>
        </div>
        <div>
          <label>CustomerId
          {' '}
          <input
            type="number"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
          </label>
        </div>
        <div>
          <label>ProfileId
          {' '}
          <input
            type="number"
            value={profileId}
            onChange={(e) => setProfileId(e.target.value)}
          />
          </label>
        </div>
        <button type="submit" disabled={mutation.isLoading}>
          Add Person
        </button>
      </form>
      {mutation.isLoading && <p>Loading...</p>}
      {mutation.isError && <p>Error: {(mutation.error as Error).message}</p>}
      {mutation.isSuccess && <p>Person Added Successfully!</p>}
    </div>
  );
};

export default AddPerson;
