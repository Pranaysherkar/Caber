import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = (props) => {
  return (
    <div className="flex flex-col gap-3 px-2 py-3">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          onClick={() => {
            props.setVehiclePannel(true);
            props.setPannel(false);
          }}
          className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:bg-gray-200 active:bg-gray-300 border border-gray-300"
        >
          <FaLocationDot className="text-2xl" />
          <h4 className="font-medium text-sm text-gray-800 leading-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
