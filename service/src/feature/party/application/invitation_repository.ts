import { Invitation, InvitationId, PartyId } from "../domain";

export interface InvitationRepository {
  list(partyId: PartyId): Promise<Invitation[]>;
  createInvitation(invitation: Invitation): Promise<void>;
  getInvitation(id: InvitationId): Promise<Invitation>;
  replaceInvitation(id: InvitationId, invitation: Invitation): Promise<void>;
}
