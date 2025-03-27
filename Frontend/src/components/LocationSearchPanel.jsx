import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = ({ suggestions, onSelectSuggestion }) => {
  return (
    <div className="flex flex-col gap-3 px-2 py-3 max-h-96 overflow-y-auto">
      {suggestions.map((suggestion, index) => {
        const displayText =
          suggestion.length > 60 ? suggestion.slice(0, 60) + "..." : suggestion;

        return (
          <div
            key={index}
            onClick={() => onSelectSuggestion(suggestion)}
            className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:bg-gray-200 active:bg-gray-300 border border-gray-300"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <FaLocationDot className="text-xl text-gray-700" />
            </div>
            <h4 className="font-medium text-sm text-gray-800 leading-5 flex-1">
              {displayText}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
