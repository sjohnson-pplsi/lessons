import { FC } from "react";

export const FancyTotal: FC<{ values: number[] }> = ({ values }) => {
  return <div>{getFancyTotal(...values)}</div>;
};

export function getFancyTotal(...values: number[]) {
  return values.reduce((total, value) => total + value, 0);
}
