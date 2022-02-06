import Head from 'next/head'
import Person from '../Components/Person'
import React from 'react'
//make Description interface
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
    <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-2xl bg-gray-200 shadow-xl sm:max-h-fit sm:max-w-md md:max-h-56 md:max-w-5xl">
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
  return (
    <>
      <Head>
        <title>Techno Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span className="flex justify-center pt-20 text-5xl font-bold">
        Techno Project
      </span>

      <Description
        alt="Techno Logo"
        title="This is Techno Office!"
        src="https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/95768290_112581870445043_2767339023285354496_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=__mZUpIb7Y8AX_8K9HX&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT_QA6q6OO-lBEQ9M0sw81gk-LGevY2ULcD4ofzDQUl8Pw&oe=62202322"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        perferendis odio, cupiditate est cumque eligendi ratione deleniti rerum
        tempore veniam aperiam at optio expedita quas debitis nesciunt explicabo
        modi placeat.
      </Description>
      <div className="flex justify-around">
        <Person name={'Davit Chokoshvili'} job="programisti"></Person>
        <Person name={'Davit Chokoshvili'} job="programisti"></Person>
      </div>
    </>
  )
}
