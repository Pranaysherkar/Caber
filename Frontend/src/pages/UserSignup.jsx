import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUserdata, setNewUserdata] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = { email, password, firstname, lastname };
    setNewUserdata(newData);
    console.log(newUserdata);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    console.log(newData);
  };
  return (
    <div className="flex flex-col justify-between h-screen overflow-hidden">
      <Logo />
      <div className="flex flex-col mt-2 p-7">
        <form onSubmit={submitHandler}>
          <label className="text-lg mb-2 font-medium" htmlFor="firstname">
            What's your Firstname?
          </label>
          <input
            id="firstname"
            className="w-full text-base bg-gray-200 rounded px-4 py-2 border placeholder:text-base mb-5"
            required
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="firstname"
          />

          <label className="text-lg mb-2 font-medium" htmlFor="lastname">
            What's your Lastname?
          </label>
          <input
            id="lastname"
            className="w-full text-base bg-gray-200 rounded px-4 py-2 border placeholder:text-base mb-5"
            type="text"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            placeholder="lastname"
          />

          <label className="text-lg mb-2 font-medium" htmlFor="email">
            What's your email?
          </label>
          <input
            id="email"
            className="w-full text-base bg-gray-200 rounded px-4 py-2 border placeholder:text-base mb-5"
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="user@example.com"
          />

          <label className="text-lg mb-2 font-medium" htmlFor="password">
            Enter Password
          </label>
          <input
            id="password"
            className="w-full text-base bg-gray-200 rounded px-4 py-2 border placeholder:text-base mb-8"
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
            className="w-full text-base mb-2 font-semibold bg-black text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-700">
            Login here
          </Link>
        </p>
      </div>

      <div className="p-7 mb-14">
        <p className="text-xs leading-tight">
          Caber values your privacy and ensures that your personal data is
          protected. Any information collected by Caber is used solely to
          enhance your experience and will not be shared with third parties.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
