import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import { HiCurrencyRupee } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const ConfirmRidePopUp = ({ confirmRidePopUp, setConfirmRidePopUp }) => {
  const [otp, setOtp] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();    
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: confirmRidePopUp ? "0%" : "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full h-screen fixed z-20 bottom-0 py-6 px-4 bg-white shadow-2xl rounded-t-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Confirm Ride</h3>
      </div>

      <div className="flex flex-col items-center gap-5 mt-4">
        {/* Profile Section - Image and Name Side by Side */}
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
        <div className="w-full space-y-3">
          {/* Pickup */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-lg ">
              <FaLocationDot className="inline text-blue-500" /> Pickup
            </h3>
            <p className="text-sm text-gray-600">56/11-A, Example Street</p>
          </div>

          {/* Drop */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-lg ">
              <RiUserLocationFill className="inline text-blue-400" /> Drop
            </h3>
            <p className="text-sm text-gray-600">XYZ Avenue, Destination</p>
          </div>

          {/* Price */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-lg">
              <HiCurrencyRupee className="inline text-green-500" /> 450.00
            </h3>
            <p className="text-sm text-gray-600">Cash, UPI, Netbanking</p>
          </div>
        </div>

        {/* OTP Input Field */}
        <form onSubmit={(e)=>submitHandler(e)} className="w-full flex flex-col items-center">
          <label htmlFor="otp" className="text-gray-700 font-medium mb-1">
            Enter OTP
          </label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            className="w-full py-2 px-4 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        {/* Confirm & Cancel Buttons */}
        <div className="flex w-full gap-4">
          <Link
            to="/captain_riding"
            className={`w-1/2 text-white font-medium py-3 rounded-lg shadow-md flex items-center justify-center ${
              otp.length === 6 ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Confirm
          </Link>
          <button
            onClick={() => setConfirmRidePopUp(false)}
            className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg shadow-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );
};
