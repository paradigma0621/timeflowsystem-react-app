import { usePersonFindById } from 'features/person/pages/Info/hooks'
import 'styles/OnePerson.css'

const OnePerson = () => {
  const { data }  = usePersonFindById(3);

console.log('data:' + data?.data);

  return (
    <div>
      <h1>String Data</h1>
      <div className='one-person-style'>
        {data?.data?.name}
      </div>
    </div>
  );
};

export default OnePerson;

