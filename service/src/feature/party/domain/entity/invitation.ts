import { Email, InvitationId, newInvitationId, PartyId } from "../value";

export class Invitation {
  #id: InvitationId;
  #partyId: PartyId;
  #email: Email;

  constructor(partyId: PartyId, email: Email) {
    this.#id = newInvitationId();
    this.#partyId = partyId;
    this.#email = email;
  }

  get id() {
    return this.#id;
  }

  get partyId() {
    return this.#partyId;
  }

  get email() {
    return this.#email;
  }

  changeEmail(email: Email) {
    this.#email = email;
  }

  static restore(id: InvitationId, partyId: PartyId, email: Email) {
    const invitation = new Invitation(partyId, email);
    invitation.#id = id;
    return invitation;
  }
}
