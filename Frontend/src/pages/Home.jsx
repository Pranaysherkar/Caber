import React, { useState } from "react";
import Logo from "../components/Logo";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false);
  const [vehiclePannel, setVehiclePannel] = useState(false);
  const [confirmRidePannel, setConfirmRidePannel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setwaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex flex-col justify-between h-screen w-full bg-[url('https://i.pinimg.com/736x/1f/b6/bd/1fb6bd5984bb95d759d1f755efd2e459.jpg')] bg-auto bg-center bg-no-repeat">
      <Logo />

      {/* Search Panel */}
      <motion.div
        initial={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(0px)",
        }}
        animate={{
          backgroundColor: pannel
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: pannel ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="searchpannel px-4 py-4 w-full h-screen absolute top-0 z-10 flex flex-col justify-end"
      >
        <div className="flex justify-between">
          <h4 className="text-xl font-bold mb-3 bg-white/80 px-5 py-2 ml-2 rounded-lg shadow-md">
            Find a trip
          </h4>
          <IoIosArrowDown
            onClick={() => setPannel(false)}
            className={`text-3xl cursor-pointer transition-opacity duration-300 ease-in-out ${
              pannel ? "opacity-100" : "hidden"
            }`}
          />
        </div>

        <form
          onSubmit={submitHandler}
          className="transition-opacity duration-500 ease-in-out px-2"
        >
          <div className="line absolute h-[72px] bg-gray-600 w-1 rounded mx-2 my-3"></div>

          <input
            type="text"
            placeholder="Add a pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            onClick={() => setPannel(true)}
            className="w-full text-base bg-gray-100 rounded px-6 py-2 border placeholder:text-base mb-2"
          />
          <input
            type="text"
            placeholder="Enter your destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onClick={() => setPannel(true)}
            className="w-full text-base bg-gray-100 rounded px-6 py-2 border placeholder:text-base"
          />
        </form>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: pannel ? 1 : 0, height: pannel ? "75%" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="SuggestionPannel mt-7 rounded overflow-hidden"
        >
          <LocationSearchPanel
            // vehiclePannel={vehiclePannel}
            setVehiclePannel={setVehiclePannel}
            // pannel={pannel}
            setPannel={setPannel}
          />
        </motion.div>
      </motion.div>

      {/* Vehicle Selection Panel */}
      <VehiclePanel
        vehiclePannel={vehiclePannel}
        setVehiclePannel={setVehiclePannel}
        setConfirmRidePannel={setConfirmRidePannel}
      />
      <ConfirmedRide
        confirmRidePannel={confirmRidePannel}
        setConfirmRidePannel={setConfirmRidePannel}
        setVehicleFound={setVehicleFound}
      />
      <LookingForDriver
        vehicleFound={vehicleFound}
      />
      <WaitingForDriver waitingForDriver={waitingForDriver} />
    </div>
  );
};

export default Home;
