import { usePersonFindByIdQuery } from 'api/person'

const usePersonFindById = (personId: number) => {

  const { data, isPending } = usePersonFindByIdQuery(
    {
      personId
    },
    {
      throwOnError: false
    }
  )

  return { data, isPending }
}

export default usePersonFindById
