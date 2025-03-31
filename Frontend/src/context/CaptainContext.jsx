import React, { createContext, useState, useEffect } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(() => {
    // Load captain data from localStorage on initialization
    const storedCaptain = localStorage.getItem("captain");
    return storedCaptain ? JSON.parse(storedCaptain) : null;
  });

  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [vehicletype, setVehicletype] = useState("car");

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  // Persist captain data to localStorage whenever it changes
  useEffect(() => {
    if (captain) {
      localStorage.setItem("captain", JSON.stringify(captain));
    } else {
      localStorage.removeItem("captain");
    }
  }, [captain]);

  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain,
    color,
    setColor,
    plate,
    setPlate,
    capacity,
    setCapacity,
    vehicletype,
    setVehicletype,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;