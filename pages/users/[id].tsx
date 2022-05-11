import Header from '../../components/Headers'
import { GetServerSideProps, NextPage } from 'next'
import type { User } from '@prisma/client'

interface Props {
  user: User
}

const UserPage: NextPage<Props> = ({ user }) => {
  return (
    <>
      <Header />
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/user/${context.params?.id}`,
    {
      method: 'GET',
    }
  )
  const user = await res.json()

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user,
    },
  }
}

export default UserPage
