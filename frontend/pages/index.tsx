import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, useSession } from 'next-auth/react';

const Home: NextPage = () => {

  const { data } = useSession()
  console.log("data is = ", data);

  return (
    <div className="">
      <Head>
        <title>Next Messenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <h2> Next ChapApp </h2>


        {data?.user ? (
          <button>logout</button>
        ) : (
          <button
            type="submit"
            className='border-2 border-gray-400 h-10 w-60 rounded-md px-2 m-2'
            onClick={() => signIn()}
          >
            Login
          </button>
        )}



      </main>



    </div>
  )
}

export default Home
