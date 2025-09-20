/* eslint-disable react/react-in-jsx-scope */

import { useState } from "react";

/* eslint-disable react/prop-types */
export function Input({
  number = 0,
  label = "",
  sign,
  costume = false,
  onchange,
  value = "",
}) {
  const [placeholder, setPlaceHolder] = useState(costume ? "Costume" : number);
  const error = !costume && value !== "" && Number(value) <= 0;
  const onChange = (e) => {
    onchange(e.target.value === "" ? "" : e.target.value);
  };
  return (
    <>
      {!costume && (
        <div className={`flex justify-between `}>
          <p>{label}</p>
          <p
            className={`text-red-500 text-right ${error ? "block" : "hidden"}`}
          >
            Can&apos;t be zero
          </p>
        </div>
      )}

      <div
        className={`flex items-center p-2 rounded-md justify-between text-gray-500 bg-slate-100 ${costume ? " justify-center focus-within:placeholder:null  text-center mb-3" : " text-right "} focus-within:border-1 border-teal-600 ${error ? "border-1 focus-within:border-red-500" : ""}`}
      >
        {sign && !costume && (
          <img className=" w-3 h-3" src={sign} alt="dollar sign" />
        )}

        <input
          onFocus={() => costume && setPlaceHolder("")}
          onBlur={() => costume && setPlaceHolder(costume)}
          value={value}
          onChange={onChange}
          className={` ${costume ? "text-center pl-3" : "text-right"} outline-none `}
          type="number"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
