"use client";

import { FC, useEffect, useState } from "react";

import {
  ServiceHttpProvider,
  ServiceMockProvider,
  useService,
} from "@/app/service";

export const PartyList: FC = () => {
  const { party } = useService();
  const [list, setList] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    (async () => {
      const result = await party.list();
      setList(result.data);
    })();
  }, [party]);

  return (
    <div>
      {list.map(({ id, name }) => {
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
};

export const PartyListHttp: FC = () => {
  return (
    <ServiceHttpProvider>
      <PartyList />
    </ServiceHttpProvider>
  );
};

export const PartyListMock: FC = () => {
  return (
    <ServiceMockProvider>
      <PartyList />
    </ServiceMockProvider>
  );
};
