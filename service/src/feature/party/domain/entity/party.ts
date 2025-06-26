import { newPartyId, PartyId, PartyName } from "../value";

export class Party {
  #id: PartyId;
  #name: PartyName;

  constructor(name: PartyName) {
    this.#id = newPartyId();
    this.#name = name;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  changeName(name: PartyName) {
    this.#name = name;
  }
}
