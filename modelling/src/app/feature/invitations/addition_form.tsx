"use client";

import { FC, useMemo } from "react";

import { Addition } from "./addition";
import { useObservable } from "../observable";

export const AdditionForm: FC = () => {
  const addition = useMemo(() => new Addition(), []);

  useObservable(addition);

  return (
    <div className="addition">
      <div className="addition__total">Value {addition.total}</div>
      <div className="addition__actions">
        <button className="button" onClick={() => addition.increment1()}>
          Increment 1
        </button>
        <button className="button" onClick={() => addition.increment2()}>
          Increment 2
        </button>
      </div>
    </div>
  );
};
