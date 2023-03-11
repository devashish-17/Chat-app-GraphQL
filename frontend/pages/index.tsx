import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, useSession } from 'next-auth/react';

const Home: NextPage = () => {

  const { data } = useSession()
  console.log("data is = ", data);

  return (
    <div className="bg-gray-400 h-screen">
      <Head>
        <title>Next Messenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <h2> Next ChapApp </h2>
      </main>
    </div>
  )
}

export default Home
