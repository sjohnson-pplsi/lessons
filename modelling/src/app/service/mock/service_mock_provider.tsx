import React, { FC, ReactNode, useMemo } from "react";

import { ServiceContext } from "../context";

import { InvitationMockService } from "./invitation_mock_service";
import { PartyMockService } from "./party_mock_service";

export const ServiceMockProvider: FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const party = useMemo(() => new PartyMockService(), []);
  const invitation = useMemo(() => new InvitationMockService(), []);

  return (
    <ServiceContext.Provider
      value={{
        party,
        invitation,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
