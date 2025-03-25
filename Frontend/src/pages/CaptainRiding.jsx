import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animation
import Logo from "../components/Logo";
import { RiArrowUpWideFill } from "react-icons/ri";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRide, setFinishRide] = useState(false)
  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden bg-gray-100">
      {/* Header */}
      <div className="absolute top-0 w-full flex items-center justify-between px-3 py-2">
        <Logo />
        <Link to="/captain_home">
          <IoMdArrowBack className="text-3xl bg-gray-100 p-1 rounded-md shadow-md" />
        </Link>
      </div>

      {/* Map / Ride Image */}
      <div className="h-3/4 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/736x/1f/b6/bd/1fb6bd5984bb95d759d1f755efd2e459.jpg"
          alt="Map View"
        />
      </div>

      {/* Details Panel */}
      <div onClick={()=>setFinishRide(true)} className="h-1/4 bg-white shadow-2xl rounded-t-2xl p-5 flex flex-col items-center gap-4 justify-between">
        {/* Bouncing Arrow */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          <RiArrowUpWideFill  className="text-3xl text-gray-600" />
        </motion.div>

        {/* Ride Info */}
        <h4 className="text-xl font-bold text-gray-800">4 KM Away</h4>

        {/* Complete Ride Button */}
        <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
          Complete Ride
        </button>
        <FinishRide finishRide={finishRide} setFinishRide={setFinishRide}  />
      </div>
    </div>
  );
};

export default CaptainRiding;
