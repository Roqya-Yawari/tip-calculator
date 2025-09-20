import "./App.css";
import React from "react";
import { Input } from "./components/Input";
import dollar from "../src/assets/images/icon-dollar.svg";
import person from "../src/assets/images/icon-person.svg";
import { Tip } from "./components/Tip";
import { Result } from "./components/Result";
import { useState } from "react";
function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipValue, setTipValue] = useState("");
  const tips = [5, 10, 15, 25, 50];

  const tipAmount = people > 0 ? (bill * (tipValue / 100)) / people : 0;
  const total = people > 0 ? bill / people + tipAmount : 0;

  const resetHandler = () => {
    setBill("");
    setTipValue("");
    setPeople("");
  };
  return (
    <>
      <h1 className="text-teal-900 uppercase font-bold font-mono">
        spli <br /> tter
      </h1>
      <div className="bg-white max-w-75 md:max-w-140 mx-auto rounded-lg  p-8 font-mono">
        <div className="flex flex-col justify-center md:flex-row gap-6  md:w-120 mx-auto">
          <div className="flex flex-col gap-3 text-gray-500 text-left text-[8px] w-full">
            <Input
              label="Bill"
              value={bill}
              onchange={setBill}
              number={0}
              sign={dollar}
            />
            <p>Select Tips %</p>
            <div className="grid grid-cols-3  gap-3 text-[10px]">
              {tips.map((t) => (
                <Tip key={t} text={t} tip={tipValue} setTip={setTipValue} />
              ))}
              <Input
                label="Custome"
                costume={true}
                onchange={setTipValue}
                value={tipValue}
                className="text-center"
              />
            </div>

            <Input
              number={0}
              sign={person}
              label="Number of People "
              value={people}
              onchange={setPeople}
            />
          </div>
          <Result amount={tipAmount} total={total} onReset={resetHandler} />
        </div>
      </div>
    </>
  );
}

export default App;
