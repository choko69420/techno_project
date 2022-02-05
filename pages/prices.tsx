import Head from 'next/head'
//import PriceForm
import PriceForm from '../Components/PriceForm'
interface Description {
  src: string
  alt: string
  children?: React.ReactNode
  title: string
}
export const Description: React.FC<Description> = ({
  title,
  src,
  alt,
  children,
}) => {
  return (
    <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-2xl bg-gray-200 shadow-xl md:max-h-56 md:max-w-5xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-64 w-full object-cover md:h-full md:w-48"
            src={src}
            alt="Techno Office logo"
          />
        </div>
        <div className="p-8">
          <a
            href="#"
            className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-slate-500">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function Home(): JSX.Element {
  const price = 199.99
  return (
    <>
      <Head>
        <title>Techno Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span className="flex justify-center stroke-red-700 pt-4 text-5xl font-bold">
        Prices
      </span>
      <div className="flex h-fit p-4">
        <PriceForm />
        <div className="my-auto flex text-3xl font-bold">
          Your Total is: {price}
        </div>
      </div>
    </>
  )
}
