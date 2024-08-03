import { usePersonFindById } from 'features/person/pages/Info/hooks';

const StringDataComponent = () => {
  const { data }  = usePersonFindById(3);

console.log('data:' + data?.data);

  return (
    <div>
      <h1>String Data</h1>
      {data?.data?.name}
    </div>
  );
};

export default StringDataComponent;

