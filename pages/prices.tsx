import Head from 'next/head'
//import PriceForm
import PriceForm from '../Components/PriceForm'
interface Description {
  src: string
  alt: string
  children?: React.ReactNode
  title: string
}
export const Phone: React.FC<Description> = ({ title, src, alt, children }) => {
  return (
    <div className="mx-auto mt-12  max-w-md overflow-hidden rounded-2xl bg-gray-200 shadow-xl md:max-h-56 md:max-w-xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-full w-full object-cover md:h-full md:w-48"
            src={src}
            alt={alt}
          />
        </div>
        <div className="p-8">
          <a
            href={src}
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

      <div className="flex h-fit p-4">
        <PriceForm />
        <div className="my-auto flex text-3xl font-bold">
          Your Total is: {price}
        </div>
      </div>
      <Phone
        title="This Iphone"
        alt="phone"
        src="https://i.insider.com/60117b551d2df20018b71117?width=1136&format=jpeg"
      ></Phone>
    </>
  )
}
