import { Party, PartyId, PartyName } from "../domain";

import { PartyRepository } from "./party_repository";

export class PartyService {
  constructor(private partyRepository: PartyRepository) {}

  async getParty(id: PartyId) {
    return this.partyRepository.getParty(id);
  }

  async createParty(name: PartyName) {
    const party = new Party(name);
    await this.partyRepository.createParty(party);
    return party.id;
  }

  async changeName(id: PartyId, name: PartyName) {
    const party = await this.partyRepository.getParty(id);
    party.changeName(name);
    await this.partyRepository.replaceParty(id, party);
  }
}
