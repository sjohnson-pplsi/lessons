import { InvitationRepository } from "../application";
import { Invitation, InvitationId } from "../domain";

export class InvitationMockRepository implements InvitationRepository {
  createInvitation(invitation: Invitation): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getInvitation(id: InvitationId): Promise<Invitation> {
    throw new Error("Method not implemented.");
  }

  replaceInvitation(id: InvitationId, invitation: Invitation): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
