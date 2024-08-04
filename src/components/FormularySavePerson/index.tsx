import React, { useState } from 'react';
import { createPerson } from './saveOnePerson';
import { usePersonCreateMutation } from 'api/person'
//import { UsePersonCreateMutationProps } from './types'
import { useNavigate, useParams } from 'react-router-dom'
import { formatSubmitData } from 'data/formatters'
import { IPerson } from 'types/person';
import { URL_BASE, PERSON_PATH_CREATE} from 'constants/api';

const AddPerson = () => {
  //const queryClient = useQueryClient();

  const { mutate, isPending } = usePersonCreateMutation()
  
  //useNavigate() may be used only in the context of a <Router> component.
  const navigate = useNavigate()
  
  const [name, setName] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [registerDate, setRegisterDate] = useState('');
  const [removed, setRemoved] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [profileId, setProfileId] = useState('');
  
var person = {
  name: 'string',
  enrollment: 'string',
  registerDate: '2021-07-28T19:20:30.45Z',
  removed: true,
  customerId: 0,
  profileId: 0
};

  const mutation = (data: IPerson) => {
    const payload = {
      ...data,
      person
    }

    mutate(
      [formatSubmitData<IPerson>(payload)],
      {
        onError: err => console.log(err?.message),
        onSuccess: data => {
          navigate(
            URL_BASE + PERSON_PATH_CREATE,
            { state: data }
          )
        }
      }
    )
  }


  const handleAddPerson = () => {
    const newPerson: IPerson = {
      id: '', // You need to provide the id here
      name,
      enrollment,
      registerDate,
      removed,
      customerId: Number(customerId),
      profileId: Number(profileId),
    };
  };
 /*
  const onSubmit = (data: WorkplaceDeviceCreatePasswordSchemaProps) =>
  mutation(data)
  */
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
        {/* <button type="submit" disabled={mutation.isLoading}>*/}
        <button type="submit">
          Add Person
        </button>
      </form>
      {/*mutation.isLoading && <p>Loading...</p>}
      {mutation.isError && <p>Error: {(mutation.error as Error).message}</p>}
    {mutation.isSuccess && <p>Person Added Successfully!</p>*/}
    </div>
  );
};

export default AddPerson;
