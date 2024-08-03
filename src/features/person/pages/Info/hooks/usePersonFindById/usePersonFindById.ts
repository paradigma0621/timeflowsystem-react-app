///import { useParams } from 'react-router-dom'

import { usePersonFindByIdQuery } from 'api/person'

const usePersonFindById = (personId: number) => {
  //const { personId = '' } = useParams()

  const { data } = usePersonFindByIdQuery(
    {
      personId
    },
    {
      throwOnError: false
    }
  )

  return { data }
}

export default usePersonFindById
