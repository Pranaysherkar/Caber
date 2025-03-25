import React from "react";
import { RiPinDistanceLine } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { HiCurrencyRupee } from "react-icons/hi2";
import { IoTimerOutline } from "react-icons/io5";

const CaptainDetails = () => {
  return (
    <div className="h-[50%] w-full bg-white p-5 flex flex-col justify-between gap-4 shadow-2xl rounded-t-3xl">
      <h3 className="text-xl font-bold px-1 shadow-md">Captain's Profile</h3>
      {/* Driver Profile & Vehicle Details */}
      <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow-md">
        {/* Profile Image */}
        <img
          className="h-14 w-14 object-cover rounded-full border-2 border-gray-400 shadow-lg"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Captain Profile"
        />

        {/* Driver Info */}
        <div className="flex flex-col flex-grow">
          <h2 className="font-semibold text-base">Pranay</h2>
          <p className="text-xs text-gray-700">MH 46 D 0358</p>
          <p className="text-xs text-gray-500">Toyota Innova Crysta</p>
        </div>

        {/* Vehicle Image */}
        <img
          className="h-14 w-28 object-cover rounded-lg shadow-md"
          src="/Comfort.webp"
          alt="Vehicle"
        />
      </div>

      {/* Ride Info */}
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg shadow-sm">
            <RiPinDistanceLine className="text-lg text-blue-500" />
            <div>
              <h3 className="font-medium text-xs">Total Distance</h3>
              <p className="text-xs text-gray-600">100 KM</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg shadow-sm">
            <IoTimerOutline className="text-lg text-stone-500" />
            <div>
              <h3 className="font-medium text-xs">Riding HRS</h3>
              <p className="text-xs text-gray-600">10.00</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg shadow-sm">
          <GrNotes className="text-lg text-orange-400" />
          <div>
            <h3 className="font-medium text-xs">Ride Note</h3>
            <p className="text-xs text-gray-600">Pickup at XYZ Avenue</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg shadow-sm">
          <HiCurrencyRupee className="text-lg text-green-500" />
          <div>
            <h3 className="font-medium text-xs">Earned</h3>
            <p className="text-xs text-gray-600">
              ₹19,312.00 (Cash, UPI, Netbanking)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
