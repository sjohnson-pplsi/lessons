import { Email, Invitation, InvitationId } from "../domain";

export interface InvitationRepository {
  createInvitation(invitation: Invitation): Promise<void>;
  getInvitation(id: InvitationId): Promise<Invitation>;
  replaceInvitation(id: InvitationId, invitation: Invitation): Promise<void>;
}
