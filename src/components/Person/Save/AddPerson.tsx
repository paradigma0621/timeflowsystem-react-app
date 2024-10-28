import { useState } from 'react';
import { usePersonCreateMutation } from 'api/person'
import { useNavigate } from 'react-router-dom'
import { formatSubmitData } from 'data/formatters'
import { IPerson } from 'types/person';
import { URL_BASE, PERSON_PATH_CREATE} from 'constants/api';
import 'styles/SavePerson.css';

const AddPerson = () => {
  
  const { mutate, isPending } = usePersonCreateMutation()
    
  const navigate = useNavigate()
  
  const [name, setName] = useState('')
  const [enrollment, setEnrollment] = useState('')
  const [registerDate, setRegisterDate] = useState('')
  const [removed, setRemoved] = useState(false)
  const [customerId, setCustomerId] = useState('')
  const [profileId, setProfileId] = useState('')
  
  const mutation = (data: IPerson) => {
    const payload = {
      ...data
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

  const onSubmit = () => {
    const newPerson: IPerson = {
      id: 0,
      name,
      enrollment,
      registerDate,
      removed,
      customerId: Number(customerId),
      profileId: Number(profileId)
    };
    mutation(newPerson)
  }
  
  return (
    <div className='save-person-style'>
      <h2>Add New Person</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
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
        <button type="submit" disabled = {isPending}>
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