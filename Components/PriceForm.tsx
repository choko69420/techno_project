import React from 'react'

const PriceForm = () => {
  return (
    <form action="/prices">
      <div className="flex h-full flex-col items-start justify-start p-16">
        <div className="mt-4 flex">
          <label
            htmlFor="name"
            className="px-4 text-lg font-medium text-gray-700"
          >
            Name
          </label>
          {/* select name of phone */}
          <select
            name="name"
            id="name"
            className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
          >
            <option value="">Select name</option>
            <option value="1">Name 1</option>
            <option value="2">Name 2</option>
            <option value="3">Name 3</option>
          </select>
        </div>
        <br />
        {/* submit button */}
        <div className="flex shrink-0 p-3">
          <button type="submit" className="rounded-lg bg-blue-600 py-3  px-4">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default PriceForm
