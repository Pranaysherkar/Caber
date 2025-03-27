import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import { HiCurrencyRupee } from "react-icons/hi2";
const LookingForDriver = ({
  vehicleFound,
  fare,
  pickup,
  destination,
  vehicleType,
}) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: vehicleFound ? "0%" : "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="vehiclepanel w-full fixed z-20 bottom-0 py-6 px-4 bg-white shadow-2xl rounded-t-2xl"
    >
      {/* Header */}
      <h3 className="text-xl font-bold mb-4 bg-white/80 px-4 py-3 rounded-lg shadow-md flex items-center">
        Looking For Driver
      </h3>

      <div className="flex flex-col items-center gap-5">
        {/* Vehicle Image */}
        <img
          className="h-32 object-contain rounded-lg shadow-md"
          src={
            vehicleType === "car"
              ? "/Comfort.webp"
              : vehicleType === "auto"
              ? "/TukTuk.webp"
              : "/Moto.webp"
          }
          alt="Vehicle"
        />

        {/* Ride Details */}
        <div className="w-full px-3">
          {/* Pickup Location */}
          <div className="flex items-center gap-4 my-3 bg-gray-100 p-3 rounded-lg shadow-sm">
            <FaLocationDot className="text-2xl text-blue-500" />
            <div>
              <h3 className="font-bold text-lg">Pickup Location</h3>
              <p className="text-sm text-gray-600 capitalize">
                {" "}
                {pickup.length > 30 ? pickup.substring(0, 30) + "..." : pickup}
              </p>
            </div>
          </div>

          {/* Drop-off Location */}
          <div className="flex items-center gap-4 my-3 bg-gray-100 p-3 rounded-lg shadow-sm">
            <RiUserLocationFill className="text-2xl text-blue-400" />
            <div>
              <h3 className="font-bold text-lg">Drop Location</h3>
              <p className="text-sm text-gray-600 capitalize">
                {destination.length > 30
                  ? destination.substring(0, 30) + "..."
                  : destination}{" "}
              </p>{" "}
            </div>
          </div>

          {/* Price & Payment */}
          <div className="flex items-center gap-4 my-3 bg-gray-100 p-3 rounded-lg shadow-sm">
            <HiCurrencyRupee className="text-2xl text-green-500" />
            <div>
              <h3 className="font-bold text-lg">
                {" "}
                ₹{fare?.[vehicleType] ? fare[vehicleType].toFixed(2) : "N/A"}
              </h3>
              <p className="text-sm text-gray-600">Cash, UPI, Netbanking</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LookingForDriver;
