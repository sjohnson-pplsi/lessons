"use client";

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

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

const useAdditionData = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [total, setTotal] = useState(0);

  const increment1 = useCallback(() => {
    setA(a + 1);
    setTotal(total + 1);
  }, [a, total]);

  const increment2 = useCallback(() => {
    setB(b + 2);
    setTotal(total + 2);
  }, [b, total]);

  return {
    a,
    b,
    total,
    increment1,
    increment2,
  };
};
