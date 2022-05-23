import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import type { NextPage } from 'next'


const Home:NextPage = () => {
 return( 
<div
className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'
}`}
>
      <Head>
        <title>
         Manga
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
        <Banner />

        <section className="md:space-y-24">

          <Row  />
          <Row  />
          <Row />
          <Row />
        </section>
      </main>
     
    </div>
  )
}

export default Home

