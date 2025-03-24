import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import { HiCurrencyRupee } from "react-icons/hi2";

const WaitingForDriver = ({ waitingForDriver}) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: waitingForDriver ? "0%" : "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full fixed z-20 bottom-0 py-6 px-4 bg-white shadow-2xl rounded-t-2xl"
    >
      {/* Header */}
      <h3 className="text-xl font-bold mb-4 bg-white/80 px-4 py-3 rounded-lg shadow-md flex items-center">
        Waiting For Driver
      </h3>

      <div className="flex flex-col items-center gap-6">
        {/* Driver & Vehicle Details */}
        <div className="flex items-center gap-6 bg-gray-100 p-4 rounded-lg shadow-md w-full">
          {/* Vehicle Image */}
          <img
            className="h-20 w-20 object-cover rounded-lg shadow-md"
            src="/Comfort.webp"
            alt="Vehicle"
          />
          {/* Driver Details */}
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">Pranay</h2>
            <h4 className="text-gray-700">MH 46 D 0358</h4>
            <p className="text-sm text-gray-600">Toyota Innova Crysta</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="w-full">
          {/* Pickup Location */}
          <div className="flex items-center gap-4 my-3 bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition">
            <FaLocationDot className="text-2xl text-blue-500" />
            <div>
              <h3 className="font-bold text-lg">Pickup Location</h3>
              <p className="text-sm text-gray-600">56/11-A, Example Street</p>
            </div>
          </div>

          {/* Drop-off Location */}
          <div className="flex items-center gap-4 my-3 bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition">
            <RiUserLocationFill className="text-2xl text-blue-400" />
            <div>
              <h3 className="font-bold text-lg">Drop Location</h3>
              <p className="text-sm text-gray-600">XYZ Avenue, Destination</p>
            </div>
          </div>

          {/* Price & Payment */}
          <div className="flex items-center gap-4 my-3 bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition">
            <HiCurrencyRupee className="text-2xl text-green-500" />
            <div>
              <h3 className="font-bold text-lg">₹193.00</h3>
              <p className="text-sm text-gray-600">Cash, UPI, Netbanking</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WaitingForDriver;
