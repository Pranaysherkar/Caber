import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    const newCaptaindata = { email, password };
    setCaptainData(newCaptaindata)
    setEmail("");
    setPassword("");
    console.log(newCaptaindata);
    
  };
  return (
    <div className="flex flex-col justify-between h-screen">
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
            placeholder="captain@example.com"
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
          Join a fleet?{" "}
          <Link to="/captain_signup" className="text-blue-700">
            Register as a Captain
          </Link>
        </p>
      </div>

      <div className="p-7 mb-14">
        <Link
          to={"/login"}
          className="flex items-center justify-center w-full text-xl font-semibold bg-sky-400 text-white px-4 py-2 rounded"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
