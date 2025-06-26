import { FC } from "react";

import { ServiceHttpProvider, ServiceMockProvider } from "@/app/service";

import { PartyList } from "./party_list";

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
