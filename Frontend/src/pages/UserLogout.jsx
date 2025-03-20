import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => console.error("Logout failed:", err))
      .finally(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  return <div>UserLogout</div>;
};

export default UserLogout;
