"use client";

import { FC } from "react";

import { fancyTotal } from "../../inner/fancy_total";

import { useAdditionContext } from "./AdditionContext";

export const AdditionForm: FC = () => {
  const { a, b, increment1, increment2 } = useAdditionContext();

  return (
    <div>
      <div>Value {fancyTotal(a, b)}</div>
      <div>
        <button onClick={increment1}>Increment 1</button>
        <button onClick={increment2}>Increment 2</button>
      </div>
    </div>
  );
};
