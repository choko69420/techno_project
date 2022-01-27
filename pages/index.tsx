import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Techno Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center">
        <h1 className="mb-5 mt-5 text-5xl font-bold">Techno Project</h1>
      </div>
      <main className="max max-h-fill mt-50 mb-50 h-64 w-screen bg-blue-600">
        <div className="m- w-20 rounded-md bg-yellow-400 text-center">
          <div className="p-4">
            <h2 className="text-2xl font-bold">hi</h2>
          </div>
        </div>
      </main>
    </>
  )
}
