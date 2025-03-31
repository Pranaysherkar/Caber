import React, { useState, useContext, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { ConfirmRidePopUp } from "../components/ConfirmRidePopUp";
import { CaptainDataContext } from "../context/CaptainContext";
import { SocketContext } from "../context/SocketContext";

const CaptainHome = () => {
  const [ridePopUp, setRidePopUp] = useState(true);
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const { socket } = useContext(SocketContext);
  const {captain} = useContext(CaptainDataContext)
  
  useEffect(() => {
    if (!captain?._id) return;
  
    socket.emit("join", { userType: "captain", userId: captain._id });
  
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const locationData = {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          };
          console.log("Sending location data:", locationData);
          socket.emit("update-location-captain", locationData);
        });
      }
    };
  
    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();
  
    return () => clearInterval(locationInterval);
  }, [captain]);
  
  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden bg-gray-100">
      {/* Header */}
      <div className="absolute top-0 w-full flex items-center justify-between px-2 py-1">
        <Logo />
        <Link to="/captain_login">
          <IoMdArrowBack className="text-3xl bg-gray-100 p-1 rounded-md shadow-md" />
        </Link>
      </div>

      {/* Map / Ride Image */}
      <div className="h-[50%] w-full">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/736x/1f/b6/bd/1fb6bd5984bb95d759d1f755efd2e459.jpg"
          alt="Map View"
        />
      </div>

      {/* Ride Details Section */}
      <CaptainDetails />
      <RidePopUp
        ridePopUp={ridePopUp}
        setRidePopUp={setRidePopUp}
        setConfirmRidePopUp={setConfirmRidePopUp}
      />
      <ConfirmRidePopUp
        confirmRidePopUp={confirmRidePopUp}
        setConfirmRidePopUp={setConfirmRidePopUp}
      />
    </div>
  );
};

export default CaptainHome;
