import { Email, InvitationId, newInvitationId } from "../value";

export class Invitation {
  #id: InvitationId;
  #email: Email;

  constructor(email: Email) {
    this.#id = newInvitationId();
    this.#email = email;
  }

  get id() {
    return this.#id;
  }

  get email() {
    return this.#email;
  }

  changeEmail(email: Email) {
    this.#email = email;
  }
}
