import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import { SocketContext } from "../context/SocketContext";
import { UserDataContext } from "../context/UserContext";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false);
  const [vehiclePannel, setVehiclePannel] = useState(false);
  const [confirmRidePannel, setConfirmRidePannel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setwaitingForDriver] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(""); // Tracks which field is active
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);
  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);

  useEffect(() => {
    console.log(user.user._id);
    console.log(user);
        socket.emit("join", {userType:"user",userId:user.user._id});

  }, [user]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: query }, // Pass query as a parameter
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        }
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (value, field) => {
    if (field === "pickup") {
      setPickup(value);
    } else if (field === "destination") {
      setDestination(value);
    }
    setActiveField(field);
    fetchSuggestions(value);
  };

  const handleSuggestionSelect = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    setSuggestions([]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const getDirections = async () => {
    if (!pickup || !destination) {
      console.warn("Please fill both fields!");
      setVehiclePannel(false);
    } else {
      setVehiclePannel(true);
      setPannel(false);
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
        {
          params: { origin: pickup, destination: destination },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        }
      );

      console.log(response.data);
      setFare(response.data.fares); // Save fares for all vehicle types
    } catch (error) {
      console.error("Error fetching fare:", error);
    }
  };

  const createRide = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/create`,
        {
          origin: pickup, // Make sure the backend expects 'origin' key
          destination: destination,
          vehicleType: vehicleType,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Ride created:", response.data);
    } catch (error) {
      console.error("Error creating ride:", error.response?.data || error);
    }
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
            onChange={(e) => handleInputChange(e.target.value, "pickup")}
            onClick={() => setPannel(true)}
            className="w-full text-base bg-gray-100 rounded px-6 py-2 border placeholder:text-base mb-2"
          />
          <input
            type="text"
            placeholder="Enter your destination"
            value={destination}
            onChange={(e) => handleInputChange(e.target.value, "destination")}
            onClick={() => setPannel(true)}
            className="w-full text-base bg-gray-100 rounded px-6 py-2 border placeholder:text-base"
          />
          <motion.button
            onClick={getDirections}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: pannel ? 1 : 0, y: pannel ? 0 : 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`w-full mt-4 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300
    ${
      pickup && destination
        ? "bg-sky-600 hover:bg-sky-700 active:bg-sky-800"
        : "bg-gray-400 cursor-not-allowed"
    }`}
            style={{ display: pannel ? "block" : "none" }}
            disabled={!pickup || !destination} // Disable button if fields are empty
          >
            Get Directions
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: pannel ? 1 : 0, height: pannel ? "75%" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="SuggestionPannel mt-7 rounded overflow-hidden"
        >
          <LocationSearchPanel
            suggestions={suggestions}
            onSelectSuggestion={handleSuggestionSelect}
          />
        </motion.div>
      </motion.div>

      {/* Vehicle Selection Panel */}
      <VehiclePanel
        fare={fare}
        setVehicleType={setVehicleType}
        vehiclePannel={vehiclePannel}
        setVehiclePannel={setVehiclePannel}
        setConfirmRidePannel={setConfirmRidePannel}
      />
      <ConfirmedRide
        fare={fare}
        pickup={pickup}
        destination={destination}
        vehicleType={vehicleType}
        createRide={createRide}
        confirmRidePannel={confirmRidePannel}
        setConfirmRidePannel={setConfirmRidePannel}
        setVehicleFound={setVehicleFound}
      />
      <LookingForDriver
        fare={fare}
        pickup={pickup}
        destination={destination}
        vehicleType={vehicleType}
        vehicleFound={vehicleFound}
      />
      <WaitingForDriver waitingForDriver={waitingForDriver} />
    </div>
  );
};

export default Home;
