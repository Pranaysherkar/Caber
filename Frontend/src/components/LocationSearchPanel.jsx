import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
const LocationSearchPanel = () => {
  return (
    <div className="flex flex-col">
    <div className='h-15 flex items-center gap-5 bg-gray-200 rounded my-2 px-2'>
      <FaLocationDot className='text-2xl'/>
      <h4 className='font-medium leading-5'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, molestiae!</h4>
    </div>

    </div>
  )
}

export default LocationSearchPanel