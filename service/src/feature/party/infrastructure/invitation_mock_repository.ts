import { InvitationRepository } from "../application";
import { Invitation, InvitationId, Party, PartyId } from "../domain";

export class InvitationMockRepository implements InvitationRepository {
  private data: Record<InvitationId, InvitationModel> = {};

  async list(partyId: PartyId): Promise<Invitation[]> {
    return Object.values(this.data)
      .filter((row) => row.partyId)
      .map(({ id, partyId, email }) => Invitation.restore(id, partyId, email));
  }

  async createInvitation(invitation: Invitation): Promise<void> {
    this.data[invitation.id] = new InvitationModel(
      invitation.id,
      invitation.partyId,
      invitation.email
    );
  }

  async getInvitation(id: InvitationId): Promise<Invitation> {
    const row = this.data[id];
    if (!row) {
      throw new Error("not found");
    }

    return Invitation.restore(row.id, row.partyId, row.email);
  }

  async replaceInvitation(
    id: InvitationId,
    invitation: Invitation
  ): Promise<void> {
    const old = this.data[id];
    if (!old) {
      throw new Error("not found");
    }

    this.data[id] = new InvitationModel(
      id,
      invitation.partyId,
      invitation.email
    );
  }
}

class InvitationModel {
  constructor(
    public id: string,
    public partyId: string,
    public email: string
  ) {}
}
