import { Email, Invitation, InvitationId, PartyId } from "../domain";
import { InvitationRepository } from "./invitation_repository";
import { PartyRepository } from "./party_repository";

export class InvitationService {
  constructor(
    private partyRepository: PartyRepository,
    private invitationRepository: InvitationRepository
  ) {}

  async list(partyId: PartyId) {
    return this.invitationRepository.list(partyId);
  }

  async getInvitation(id: InvitationId) {
    return this.invitationRepository.getInvitation(id);
  }

  async createInvitation(partyId: PartyId, email: Email) {
    await this.partyRepository.getParty(partyId);
    const invitation = new Invitation(partyId, email);
    await this.invitationRepository.createInvitation(invitation);
    return invitation.id;
  }

  async changeEmail(id: InvitationId, email: Email) {
    const invitation = await this.invitationRepository.getInvitation(id);
    invitation.changeEmail(email);
    await this.invitationRepository.replaceInvitation(id, invitation);
  }
}
