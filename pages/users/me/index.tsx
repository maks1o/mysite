import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Header from '../../../components/Headers'

const MePage: NextPage = () => {
  const { data } = useSession()

  return (
    <>
      <Header />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default MePage