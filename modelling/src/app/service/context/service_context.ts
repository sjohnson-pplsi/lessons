import { createContext, useContext } from "react";

import { InvitationService } from "./invitation_service";
import { PartyService } from "./party_service";

export const ServiceContext = createContext<{
  party: PartyService;
  invitation: InvitationService;
}>({
  // @ts-expect-error This will be populated
  party: undefined,
  // @ts-expect-error This will be populated
  invitation: undefined,
});

export const useService = () => useContext(ServiceContext);
