import { useSession } from 'next-auth/react'
import Header from '../../components/Headers'

export default function MePage() {
  const { data } = useSession()

  return (
    <>
      <Header />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
