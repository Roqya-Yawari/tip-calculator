/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/prop-types */
export function Tip({ text, tip, setTip }) {
  const value = Number(text);
  const isActive = tip === value;

  return (
    <div
      onClick={() => setTip(value)}
      className={` rounded-md w-full flex justify-center items-center px-5 py-3 mb-3 text-white hover:bg-teal-600 cursor-pointer 
      ${isActive ? "bg-teal-600 hover:bg-teal-600" : "bg-teal-900"}`}
    >
      <p>{text} %</p>
    </div>
  );
}
