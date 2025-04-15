"use client";

import { FC } from "react";

import { useAdditionContext } from "./AdditionContext";

export const AdditionForm: FC = () => {
  const { value, increment } = useAdditionContext();
  return (
    <div>
      <div>Value {value}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};
