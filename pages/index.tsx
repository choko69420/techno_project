import Head from 'next/head'
import Person from '../Components/Person'
export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Techno Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="mb-5 mt-5 text-center text-5xl font-bold">
          Techno Project
        </h1>
        <div className="flex justify-around">
          <Person name={'Davit Chokoshvili'} job="programisti"></Person>
          <Person name={'Davit Chokoshvili'} job="programisti"></Person>
        </div>
      </div>
    </>
  )
}
