import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import { HiCurrencyRupee } from "react-icons/hi2";
import Logo from "../components/Logo";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden">
      <div className="absolute w-full flex items-center justify-between">
        <Logo />
        <Link to="/home">
          <IoMdArrowBack className="text-3xl bg-white p-1 rounded-md shadow-md mr-4" />
        </Link>
      </div>
      {/* Map / Ride Image */}
      <div className="h-1/2 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/736x/1f/b6/bd/1fb6bd5984bb95d759d1f755efd2e459.jpg"
          alt="Ride in progress"
        />
      </div>

      {/* Ride Details Section */}
      <div className="h-1/2 w-full bg-white p-4 flex flex-col justify-between shadow-2xl rounded-t-2xl">
        {/* Driver & Vehicle Details */}
        <div className="flex items-center gap-16 bg-gray-100 p-3 rounded-lg shadow-md">
          <img
            className="h-14 w-28 object-cover rounded-lg shadow-md"
            src="/Comfort.webp"
            alt="Vehicle"
          />
          <div>
            <h2 className="font-semibold text-base">Pranay</h2>
            <h4 className="text-gray-700 text-sm font-medium">MH 46 D 0358</h4>
            <p className="text-xs text-gray-600">Toyota Innova Crysta</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg shadow-sm">
            <FaLocationDot className="text-lg text-blue-500" />
            <div>
              <h3 className="font-semibold text-sm">Pickup Location</h3>
              <p className="text-xs text-gray-600">56/11-A, Example Street</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg shadow-sm">
            <RiUserLocationFill className="text-lg text-blue-400" />
            <div>
              <h3 className="font-semibold text-sm">Drop Location</h3>
              <p className="text-xs text-gray-600">XYZ Avenue, Destination</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg shadow-sm">
            <HiCurrencyRupee className="text-lg text-green-500" />
            <div>
              <h3 className="font-semibold text-sm">₹193.00</h3>
              <p className="text-xs text-gray-600">Cash, UPI, Netbanking</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
