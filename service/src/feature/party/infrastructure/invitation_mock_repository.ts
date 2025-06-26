import { InvitationRepository } from "../application";
import { Invitation, InvitationId } from "../domain";

export class InvitationMockRepository implements InvitationRepository {
  private data: Record<InvitationId, InvitationModel> = {};

  async createInvitation(invitation: Invitation): Promise<void> {
    this.data[invitation.id] = new InvitationModel(
      invitation.id,
      invitation.email
    );
  }

  async getInvitation(id: InvitationId): Promise<Invitation> {
    const row = this.data[id];
    if (!row) {
      throw new Error("not found");
    }

    return Invitation.restore(row.id, row.email);
  }

  async replaceInvitation(
    id: InvitationId,
    invitation: Invitation
  ): Promise<void> {
    const old = this.data[id];
    if (!old) {
      throw new Error("not found");
    }

    this.data[id] = new InvitationModel(id, invitation.email);
  }
}

class InvitationModel {
  constructor(public id: string, public email: string) {}
}
