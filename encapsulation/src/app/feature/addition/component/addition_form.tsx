"use client";

import { FC } from "react";

import { getFancyTotal } from "../../inner/fancy_total";

import { useAdditionContext } from "./addition_context";

export const AdditionForm: FC = () => {
  const { a, b, increment1, increment2 } = useAdditionContext();

  return (
    <div className="addition">
      <div className="addition__total">Value {getFancyTotal(a, b)}</div>
      <div className="addition__actions">
        <button className="button" onClick={increment1}>
          Increment 1
        </button>
        <button className="button" onClick={increment2}>
          Increment 2
        </button>
      </div>
    </div>
  );
};
