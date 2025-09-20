/* eslint-disable react/prop-types */
import React from "react";
import { Amount } from "./Amount";
import { Button } from "./Button";
export function Result({ onReset, amount, total }) {
  return (
    <>
      <div className="flex flex-col gap-8 bg-teal-900 rounded-md p-4 w-full">
        <Amount title="Tip Amount" amount={amount} person="/person" />
        <Amount title="Total" amount={total} person="/person" />
        <Button onClick={onReset} />
      </div>
    </>
  );
}
