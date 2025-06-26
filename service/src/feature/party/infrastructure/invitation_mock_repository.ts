import { InvitationRepository } from "../application";
import { Invitation, InvitationId } from "../domain";

export class InvitationMockRepository implements InvitationRepository {
  private data: Record<InvitationId, Invitation> = {};

  async createInvitation(invitation: Invitation): Promise<void> {
    this.data[invitation.id] = invitation;
  }

  async getInvitation(id: InvitationId): Promise<Invitation> {
    const invitation = this.data[id];
    if (!invitation) {
      throw new Error("not found");
    }

    return invitation;
  }

  async replaceInvitation(
    id: InvitationId,
    invitation: Invitation
  ): Promise<void> {
    const old = this.data[id];
    if (!old) {
      throw new Error("not found");
    }

    this.data[id] = invitation;
  }
}
