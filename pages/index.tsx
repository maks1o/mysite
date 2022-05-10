import type { NextPage } from 'next'
import Header from '../components/Headers'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className="text-center text-gray-900">Hello Next.JS App</h1>
    </>
  )
}

export default Home
