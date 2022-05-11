import { ReactElement } from 'react'
import type { User } from '@prisma/client'
import Layout from 'components/Layout'

const Home = () => {
  return (
    <Layout>
      <p>Its home page</p>
    </Layout>
  )
}

export default Home
