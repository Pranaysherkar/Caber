import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

export const UserProtectedWrapper = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token")); // Store token in state
  const [user, setUser] = useContext(UserDataContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      setLoading(false);
      navigate("/login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
        }
      })
      .catch((err) => {
        console.error("Error fetching captain data:", err);
        localStorage.removeItem("token");
        setToken(null); // Clear token state
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token, navigate, setUser]);

  return <>{children}</>;
};
