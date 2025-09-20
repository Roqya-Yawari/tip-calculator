/* eslint-disable react/prop-types */
import React from "react";

export function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-teal-800 text-gray-700 hover:bg-teal-600 cursor-pointer rounded-md w-[90%] mx-auto mt-10 uppercase text-xs py-1.5"
    >
      Reset
    </button>
  );
}
