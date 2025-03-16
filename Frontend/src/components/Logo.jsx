import React from 'react'

const Logo = () => {
  return (
    <div className="h-8 w-24 mx-4 my-2 cursor-none">
      <div className="relative">
        <div className="absolute top-1.5 left-1.5 w-full h-full bg-black rounded-sm"></div>
        <div className="relative px-4 py-1 bg-white border-2 border-black shadow-lg rounded-sm">
          <h1 className="text-2xl font-bold text-black">Caber.</h1>
        </div>
      </div>
    </div>
  )
}

export default Logo

