import { callService } from "../../base";
import {
  GetInvitationResponse,
  InvitationService,
  ListInvitationsResponse,
} from "../context";

export class InvitationHttpService implements InvitationService {
  list(partyId: string): Promise<ListInvitationsResponse> {
    return callService(() =>
      fetch(`localhost:3001/party/${partyId}/invitation`)
    );
  }

  getInvitation(invitationId: string): Promise<GetInvitationResponse> {
    return callService(() =>
      fetch(`localhost:3001/invitation/${invitationId}`)
    );
  }

  createInvitation(partyId: string, email: string): Promise<string> {
    return callService(() =>
      fetch(`localhost:3001/invitation`, {
        method: "POST",
        body: JSON.stringify({ email }),
      })
    );
  }

  changeEmail(invitationId: string, email: string): Promise<void> {
    return callService(() =>
      fetch(`localhost:3001/invitation/${invitationId}`, {
        method: "PUT",
        body: JSON.stringify({ email }),
      })
    );
  }
}
