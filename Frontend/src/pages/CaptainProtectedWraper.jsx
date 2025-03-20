import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CaptainProtectedWraper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { setCaptain } = useContext(CaptainDataContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if token exists and redirect if not
  useEffect(() => {
    if (!token) {
      navigate("/captain_login");
    }
  }, [token, navigate]);

  // Fetch captain profile data
  useEffect(() => {
    if (!token) return;

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          setCaptain(response.data.captain);
          console.log(response.data.captain);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
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
