import React from 'react'
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-full overflow-hidden bg-[url('/bg.jpg')] bg-contain bg-no-repeat">
    <Logo />
    <div className="bg-white px-5 py-5">
      <h2 className="font-bold text-3xl">Get started with Caber</h2>
      <Link
        to={"/login"}
        className="flex items-center justify-center w-full bg-black text-white py-3 mt-4 rounded"
      >
        Continue
      </Link>
    </div>
  </div>  )
}

export default Start