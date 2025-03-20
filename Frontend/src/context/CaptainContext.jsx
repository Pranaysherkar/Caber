import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [vehicletype, setVehicletype] = useState("car");

  const updateCaptain = (captainData)=>{

    setCaptain(captainData)
  }

  const value= {
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
    setVehicletype
  }

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
