import React, { useState } from "react";
import Logo from "../components/Logo";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import LocationSearchPanel from "../components/LocationSearchPanel";
import { FaUser } from "react-icons/fa6";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex flex-col justify-between h-screen w-full bg-[url('https://i.pinimg.com/736x/1f/b6/bd/1fb6bd5984bb95d759d1f755efd2e459.jpg')] bg-auto bg-center bg-no-repeat">
      <Logo />
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
          <h4 className="text-xl font-bold mb-3 bg-white/80 px-4 py-2 rounded-lg shadow-md">
            Find a trip
          </h4>
          <IoIosArrowDown
            onClick={() => setPannel(false)}
            className={`text-3xl cursor-pointer transition-opacity duration-300 ease-in-out ${
              pannel ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <form
          onSubmit={submitHandler}
          className="transition-opacity duration-500 ease-in-out"
        >
          <div className="line absolute h-[72px] bg-gray-600 w-1 rounded mx-2 my-3"></div>

          <input
            type="text"
            placeholder="Add a pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            onClick={() => setPannel(true)}
            className="w-full text-base bg-gray-200 rounded px-6 py-2 border placeholder:text-base mb-2"
          />
          <input
            type="text"
            placeholder="Enter your destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onClick={() => setPannel(true)}
            className="w-full text-base bg-gray-200 rounded px-6 py-2 border placeholder:text-base"
          />
        </form>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: pannel ? 1 : 0, height: pannel ? "75%" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="SuggestionPannel mt-7 rounded overflow-hidden"
        >
          <LocationSearchPanel />
        </motion.div>
      </motion.div>
      <div className="vehiclepanel w-full fixed z-10 bottom-0 py-3 px-2 bg-white">
        <div className="w-full active:bg-gray-300 flex items-center justify-between px-2 bg-gray-200 rounded-lg my-2">
          <img
            className="h-24 w-24 object-contain mix-blend-multiply "
            src="/Comfort.webp"
            alt="car"
          />

          <div className="w-1/2 flex flex-col items-start">
            <h4 className="flex items-center gap-4 font-bold text-lg ">
              CaberGO
              <span className="flex items-center gap-1">
                <FaUser className="text-sm" />
                <span className="font-semibold text-base">4</span>
              </span>
            </h4>
            <h5 className="font-medium text-base">2 mins away</h5>
            <p className="font-normal text-sm text-gray-600">
              Affordable, compact rides
            </p>
          </div>

          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>
        <div className="w-full active:bg-gray-300 flex items-center justify-between px-2 bg-gray-200 rounded-lg my-2">
          <img
            className="h-24 w-24 object-contain mix-blend-multiply"
            src="/TukTuk.webp"
            alt="auto"
          />

          <div className="w-1/2 flex flex-col items-start">
            <h4 className="flex items-center gap-4 font-bold text-lg ">
              Rickshaw
              <span className="flex items-center gap-1">
                <FaUser className="text-sm" />
                <span className="font-semibold text-base">3</span>
              </span>
            </h4>
            <h5 className="font-medium text-base">5 mins away</h5>
            <p className="font-normal text-sm text-gray-600">
              Affordable, compact rides
            </p>
          </div>

          <h2 className="text-lg font-semibold">₹145.00</h2>
        </div>
        <div className="w-full active:bg-gray-300 flex items-center justify-between px-2 bg-gray-200 rounded-lg my-2">
          <img
            className="h-24 w-24 object-contain "
            src="/Moto.webp"
            alt="car"
          />

          <div className="w-1/2 flex flex-col items-start">
            <h4 className="flex items-center gap-4 font-bold text-lg ">
              MotoGO
              <span className="flex items-center gap-1">
                <FaUser className="text-sm" />
                <span className="font-semibold text-base">1</span>
              </span>
            </h4>
            <h5 className="font-medium text-base">3 mins away</h5>
            <p className="font-normal text-sm text-gray-600">
              Affordable, compact rides
            </p>
          </div>

          <h2 className="text-lg font-semibold">₹65.00</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
