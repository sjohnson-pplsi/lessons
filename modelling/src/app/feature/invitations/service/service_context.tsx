import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
} from "react";

import { InvitationService } from "./invitation_service";

const ServiceContext = createContext<{
  invitations: InvitationService;
}>({
  // @ts-expect-error This will be populated
  invitations: undefined,
});

export const ServiceProvider: FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const invitations = useMemo(() => new InvitationService(), []);

  return (
    <ServiceContext.Provider
      value={{
        invitations,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
