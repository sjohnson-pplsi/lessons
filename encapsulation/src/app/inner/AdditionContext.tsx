"use client";

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

const useAdditionData = () => {
  const [value, setValue] = useState(1);
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  return {
    value,
    increment,
  };
};

type AdditionData = ReturnType<typeof useAdditionData>;

const AdditionContext = createContext<AdditionData>({} as AdditionData);

export const AdditionProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const data = useAdditionData();
  return (
    <AdditionContext.Provider value={data}>{children}</AdditionContext.Provider>
  );
};

export const useAdditionContext = () => useContext(AdditionContext);
