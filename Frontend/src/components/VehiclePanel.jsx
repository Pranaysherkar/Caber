import React from 'react';
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const VehiclePanel = ({ vehiclePannel, setVehiclePannel, setConfirmRidePannel }) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: vehiclePannel ? "0%" : "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full fixed z-20 bottom-0 py-4 px-3 bg-white shadow-2xl rounded-t-2xl"
    >
      {/* Header */}
      <h3 className="text-xl font-bold mb-4 bg-white/80 px-4 py-3 rounded-lg shadow-md flex items-center justify-between">
        Choose a Vehicle
        <IoIosArrowDown
          onClick={() => setVehiclePannel(false)}
          className="cursor-pointer text-2xl transition-opacity duration-300 ease-in-out hover:opacity-75"
        />
      </h3>

      {/* Vehicle Options */}
      {[
        { name: "CaberGO", capacity: 4, time: "2 mins", price: 193.2, img: "/Comfort.webp" },
        { name: "Rickshaw", capacity: 3, time: "5 mins", price: 145, img: "/TukTuk.webp" },
        { name: "MotoGO", capacity: 1, time: "3 mins", price: 65, img: "/Moto.webp" },
      ].map((vehicle, index) => (
        <div
          key={index}
          onClick={() => setConfirmRidePannel(true)}
          className="w-full flex items-center justify-between px-3 py-3 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-lg shadow-sm transition-all duration-300 cursor-pointer mb-3"
        >
          {/* Vehicle Image */}
          <img className="h-24 w-24 object-contain rounded-md mix-blend-multiply" src={vehicle.img} alt={vehicle.name} />

          {/* Vehicle Info */}
          <div className="flex flex-col w-1/2">
            <h4 className="flex items-center gap-4 font-bold text-lg">
              {vehicle.name}
              <span className="flex items-center gap-1 text-gray-600">
                <FaUser className="text-sm" />
                <span className="font-semibold text-base">{vehicle.capacity}</span>
              </span>
            </h4>
            <h5 className="font-medium text-base text-gray-700">{vehicle.time} away</h5>
            <p className="font-normal text-sm text-gray-500">Affordable, compact rides</p>
          </div>

          {/* Price */}
          <h2 className="text-lg font-semibold text-green-600">₹{vehicle.price.toFixed(2)}</h2>
        </div>
      ))}
    </motion.div>
  );
};

export default VehiclePanel;
