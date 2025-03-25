import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import { HiCurrencyRupee } from "react-icons/hi2";
import { Link } from "react-router-dom";

const FinishRide = ({finishRide,setFinishRide}) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: finishRide ? "0%" : "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full fixed z-20 bottom-0 py-6 px-4 bg-white shadow-2xl rounded-t-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Finish the Ride </h3>
      </div>

      <div className="flex flex-col items-center gap-5 mt-4">
        {/* user Info */}
        <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow-md w-full">
          {/* Profile Image */}
          <img
            className="h-14 w-14 object-cover rounded-full border-2 border-gray-400 shadow-lg"
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Driver Profile"
          />

          {/* User Details */}
          <div className="flex flex-col flex-grow">
            <h2 className="font-semibold text-lg">Pranay Sherkar</h2>
          </div>

          {/* Distance */}
          <span className="text-sm font-medium bg-blue-100 px-3 py-1 rounded-md text-blue-700">
            102 KM
          </span>
        </div>

        {/* Ride Details */}
        <div className="w-full px-1">
          {/* Pickup Location */}
          <div className="flex items-center gap-4 my-3 bg-gray-100 p-3 rounded-lg shadow-sm">
            <FaLocationDot className="text-2xl text-blue-500" />
            <div>
              <h3 className="font-bold text-lg">Pickup Location</h3>
              <p className="text-sm text-gray-600">56/11-A, Example Street</p>
            </div>
          </div>

          {/* Drop-off Location */}
          <div className="flex items-center gap-4 my-3 bg-gray-100 p-3 rounded-lg shadow-sm">
            <RiUserLocationFill className="text-2xl text-blue-400" />
            <div>
              <h3 className="font-bold text-lg">Drop Location</h3>
              <p className="text-sm text-gray-600">XYZ Avenue, Destination</p>
            </div>
          </div>

          {/* Price & Payment */}
          <div className="flex items-center gap-4 my-3 bg-gray-100 p-3 rounded-lg shadow-sm">
            <HiCurrencyRupee className="text-2xl text-green-500" />
            <div>
              <h3 className="font-bold text-lg">₹450.00</h3>
              <p className="text-sm text-gray-600">Cash, UPI, Netbanking</p>
            </div>
          </div>
        </div>

        {/* Accept & Reject Buttons */}
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <Link to="/captain_home"
            className="w-1/2 bg-green-500 flex items-center justify-center text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          >
            Finish this Ride
          </Link>
          <p className="text-xs text-gray-600 text-center">Click on the 'Finish this Ride' button after receiving payment. </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FinishRide;
