import React, { useContext, useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicletype, setVehicletype] = useState("");
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault();
    const newCaptaindata = {
      firstname,
      lastname,
      email,
      password,
      vehicle: { color, plate, capacity, vehicletype },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      newCaptaindata
    );
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain_home')
    }
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setColor("");
    setPlate("");
    setCapacity("");
    setVehicletype("");
  };
  return (
    <div className="flex flex-col justify-between h-screen">
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

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-lg mb-2 font-medium" htmlFor="color">
                Vehicle Color
              </label>
              <input
                id="color"
                className="w-full text-base bg-gray-200 rounded px-4 py-2 border placeholder:text-base mb-5"
                required
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="Vehicle color"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg mb-2 font-medium" htmlFor="plate">
                Vehicle Plate
              </label>
              <input
                id="plate"
                className="w-full text-base bg-gray-200 rounded px-4 py-2 border placeholder:text-base mb-5"
                required
                type="text"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                placeholder="Vehicle plate"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-lg mb-2 font-medium" htmlFor="capacity">
                Vehicle Capacity
              </label>
              <input
                id="capacity"
                className="w-full text-base bg-gray-200 rounded px-4 py-2 border placeholder:text-base mb-5"
                required
                type="number"
                min="1"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Vehicle capacity"
              />
            </div>
            <div className="flex-1">
              <label className="text-lg mb-2 font-medium" htmlFor="vehicletype">
                Vehicle Type
              </label>
              <select
                id="vehicletype"
                className="w-full text-base bg-gray-200 rounded px-4 py-2 border placeholder:text-base mb-8"
                required
                value={vehicletype}
                onChange={(e) => setVehicletype(e.target.value)}
              >
                <option value="" disabled>
                  Select vehicle type
                </option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

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
            placeholder="captain@example.com"
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
            Create Captain Account
          </button>
        </form>
        <p className="text-center text-sm">
          Already have an account ?{" "}
          <Link to="/captain_login" className="text-blue-700">
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

export default CaptainSignup;
