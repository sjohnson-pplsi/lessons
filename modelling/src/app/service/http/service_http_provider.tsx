import React, { FC, ReactNode, useMemo } from "react";

import { ServiceContext } from "../context";

import { PartyHttpService } from "./party_http_service";
import { InvitationHttpService } from "./invitation_http_service";

export const ServiceHttpProvider: FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const party = useMemo(() => new PartyHttpService(), []);
  const invitation = useMemo(() => new InvitationHttpService(), []);

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
