import { callService } from "./service_handler";

export class InvitationService {
  async getParty(partyId: string) {
    return callService<GetInvitationResponse>(() =>
      fetch(`localhost:3001/party/${partyId}`)
    );
  }
}

export type GetInvitationResponse = {
  party: {
    id: string;
    name: string;
  };
};
