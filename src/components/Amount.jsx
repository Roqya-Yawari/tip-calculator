/* eslint-disable react/prop-types */
import React from "react";
export function Amount({ title, amount, person }) {
  return (
    <div className="flex justify-between items-center text">
      <div className="flex flex-col gap-2 items-start">
        <p className="text-white text-[10px]">{title}</p>
        <p className="text-gray-400 text-[6px]">{person}</p>
      </div>
      <div className="text-teal-600 text-xl">${amount.toFixed(2)}</div>
    </div>
  );
}
