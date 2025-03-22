import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CaptainProtectedWraper = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token")); // Store token in state
  const { setCaptain } = useContext(CaptainDataContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setLoading(false); // Ensure loading state updates
      navigate("/captain_login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          setCaptain(response.data.captain);
        }
      })
      .catch((err) => {
        console.error("Error fetching captain data:", err);
        localStorage.removeItem("token");
        setToken(null); // Clear token state
        navigate("/captain_login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token, navigate, setCaptain]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
