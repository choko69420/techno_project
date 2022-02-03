import React, { Children } from 'react'
// make a Person interface
interface Person {
  name: string
  job?: string
  children?: React.ReactNode
}
const Person: React.FC<Person> = ({ name, job }: Person) => {
  return (
    <>
      <div className="rounded-lg text-center">
        {/* Icon */}
        {/* Person Name */}
        {/* Person Job */}
        {/* Person Description */}
        {/* Person Social Media */}

        <div className="rounded-2xl bg-sky-700">
          <div className="container my-32 mx-auto p-1">
            <div className="my-50 duration-400 relative max-h-60 overflow-hidden rounded-2xl bg-sky-500 p-8 align-middle shadow-xl transition ease-in hover:max-h-fit hover:overflow-visible hover:bg-blue-400">
              <div className="flex space-x-4">
                <svg className="svg-icon h-12 w-12" viewBox="0 0 20 20">
                  <path d="M17.896,12.706v-0.005v-0.003L15.855,2.507c-0.046-0.24-0.255-0.413-0.5-0.413H4.899c-0.24,0-0.447,0.166-0.498,0.4L2.106,12.696c-0.008,0.035-0.013,0.071-0.013,0.107v4.593c0,0.28,0.229,0.51,0.51,0.51h14.792c0.28,0,0.51-0.229,0.51-0.51v-4.593C17.906,12.77,17.904,12.737,17.896,12.706 M5.31,3.114h9.625l1.842,9.179h-4.481c-0.28,0-0.51,0.229-0.51,0.511c0,0.703-1.081,1.546-1.785,1.546c-0.704,0-1.785-0.843-1.785-1.546c0-0.281-0.229-0.511-0.51-0.511H3.239L5.31,3.114zM16.886,16.886H3.114v-3.572H7.25c0.235,1.021,1.658,2.032,2.75,2.032c1.092,0,2.515-1.012,2.749-2.032h4.137V16.886z"></path>
                </svg>
                {/* make photo logo here */}
                <h1 className="text-3xl font-bold text-indigo-800">{name}</h1>
              </div>
              <h2 className="text-left text-3xl text-slate-700">{job}</h2>

              <div className="max-w-md overflow-auto break-words text-left">
                <p className=" ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at ipsum mauris. Duis porttitor dui nec nulla porta,
                  id consequat lorem ultricies. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Quisque enim magna, fermentum eget quam sit amet,
                  ornare feugiat erat. Praesent at orci lobortis, aliquam leo
                  id, iaculis nibh. Curabitur ut pretium purus. Phasellus ut mi
                  id arcu fermentum porta. Maecenas pharetra, tortor sit amet
                  malesuada mattis, nisl erat facilisis augue, ac convallis arcu
                  orci et neque. Pellentesque dapibus luctus arcu nec dignissim.
                  Etiam a iaculis mauris. Maecenas tincidunt est justo, sed
                  congue orci posuere suscipit. In in sem nisi. Fusce id
                  volutpat est, eu venenatis mauris. In hac habitasse platea
                  dictumst. Proin ut leo eu dui tempus dignissim tempus quis
                  quam. Nulla tempor mollis metus in rutrum. Mauris vitae est ut
                  sem accumsan tempus non ac tellus. Ut pretium tristique eros
                  sit amet laoreet. Aenean eget pharetra est. Aliquam ut sem sed
                  velit laoreet volutpat ut
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Person
