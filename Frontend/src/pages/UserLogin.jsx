import React, { useContext, useState } from "react";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser]=useContext(UserDataContext)
  const navigate = useNavigate();

  const submitHandler =async (e) => {
    e.preventDefault();
    const newUser={email,password}
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,newUser);
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col justify-between h-screen overflow-hidden">
      <Logo />
      <div className="flex flex-col mt-5 p-7">
        <form onSubmit={submitHandler}>
          <label className="text-xl mb-2 font-medium" htmlFor="email">
            What's your email?
          </label>
          <input
            id="email"
            className="w-full text-lg bg-gray-200 rounded px-4 py-2 border placeholder:text-lg mb-8"
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="user@example.com"
          />

          <label className="text-xl mb-2 font-medium" htmlFor="password">
            Enter Password
          </label>
          <input
            id="password"
            className="w-full text-lg bg-gray-200 rounded px-4 py-2 border placeholder:text-lg mb-8"
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />

          <button
            type="submit"
            className="w-full text-xl mb-4 font-semibold bg-black text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-700">
            Create new Account
          </Link>
        </p>
      </div>

      <div className="p-7 mb-14">
        <Link to={'/captain_login'} className="flex items-center justify-center w-full text-xl font-semibold bg-orange-400 text-white px-4 py-2 rounded">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
