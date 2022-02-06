import React from 'react'
const NavBar = () => {
  // return a responsive navbar
  return (
    <nav className=" fixed top-0 flex  w-full items-center justify-between bg-indigo-700 px-4 py-4">
      <div className="flex items-center">
        <a href="/" className="text-lg font-medium text-black hover:underline">
          Techno Project
        </a>
      </div>

      <div className="flex items-center">
        <a
          href="/prices"
          className="text-lg font-medium text-black hover:underline"
        >
          Prices
        </a>
      </div>
    </nav>
  )
}

export default NavBar
