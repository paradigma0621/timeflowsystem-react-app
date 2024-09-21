import React, { useState } from 'react';
import { useClockingCreateMutation } from 'api/clocking'
//import { UsePersonCreateMutationProps } from './types'
import { useNavigate } from 'react-router-dom'
import { formatSubmitData } from 'data/formatters'
import { URL_BASE, CLOCKING_PATH_CREATE} from 'constants/api';
import 'styles/Clocking.css';
import { IClocking } from 'types/clocking';

const AddClocking = () => {
  
  const { mutate, isPending } = useClockingCreateMutation()
    
  const navigate = useNavigate()
  
  /*escreva a exemplo da linha abaixo os useState para os campos: do IClocking*/
  const [secondsDuration, setSecondsDuration] = useState('')
  const [grade, setGrade] = useState('')
  const [description, setDescription] = useState('')
  const [subject, setSubject] = useState('')
  const [startDate, setStartDate] = useState('')
  const [finishDate, setFinishDate] = useState('')
  const [localization, setLocalization] = useState('')
  const [personId, setPersonId] = useState('')
  const [removed, setRemoved] = useState(false)
  
  const mutation = (data: IClocking) => {
    const payload = {
      ...data
    }

    mutate(
      [formatSubmitData<IClocking>(payload)],
      {
        onError: err => console.log(err?.message),
        onSuccess: data => {
          navigate(
            URL_BASE + CLOCKING_PATH_CREATE,
            { state: data }
          )
        }
      }
    )
  }

  const onSubmit = () => {
    const newClocking: IClocking = {
      id: 0,
      secondsDuration : Number(secondsDuration),
      grade: Number(grade),
      description,
      subject,
      startDate,
      finishDate,
      localization,
      personId: Number(personId),
      removed
    };
    mutation(newClocking)
  }
  
  return (
    <div className='save-clocking-style'>
      <h2>Add New Clocking</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}>
        <div>
          <label>Seconds Duration
          {' '}
          <input
            type="text"
            value={secondsDuration}
            onChange={(e) => setSecondsDuration(e.target.value)}
          />
          </label>
        </div>
        <div>
          <label>Grade
          {' '}
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
          </label>
        </div>
        <div>
          <label>Description
          {' '}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          </label>
        </div>
        <div>
          <label>Subject
          {' '}
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          </label>
        </div>
        <div>
          <label>Start Date
          {' '}
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          </label>  
        </div>
        <div>
          <label>Finish Date
          {' '}
          <input
            type="datetime-local"
            value={finishDate}
            onChange={(e) => setFinishDate(e.target.value)}
          />
          </label>
        </div>
        <div>
          <label>Localization
          {' '}
          <input
            type="text"
            value={localization}
            onChange={(e) => setLocalization(e.target.value)}
          />
          </label>
        </div>
        <div>
          <label>Person Id
          {' '}
          <input
            type="text"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
          />
          </label>
        </div>
        <div>
          <label>Removed
          {' '}
          <input
            type="checkbox"
            checked={removed}
            onChange={(e) => setRemoved(e.target.checked)}
          />
          </label>
        </div>

        {/* <button type="submit" disabled={mutation.isLoading}>*/}
        <button type="submit" disabled = {isPending}>
          Add Clocking
        </button>
      </form>
      {/*mutation.isLoading && <p>Loading...</p>}
      {mutation.isError && <p>Error: {(mutation.error as Error).message}</p>}
    {mutation.isSuccess && <p>Person Added Successfully!</p>*/}
    </div>
  );
};

export default AddClocking;