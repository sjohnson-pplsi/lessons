import { PartyRepository } from "../application";
import { Party, PartyId } from "../domain";

export class PartyMockRepository implements PartyRepository {
  private data: Record<PartyId, Party> = {};

  async createParty(party: Party): Promise<void> {
    this.data[party.id] = party;
  }

  async getParty(id: PartyId): Promise<Party> {
    const party = this.data[id];
    if (!party) {
      throw new Error("not found");
    }

    return party;
  }

  async replaceParty(id: PartyId, party: Party): Promise<void> {
    const old = this.data[id];
    if (!old) {
      throw new Error("not found");
    }

    this.data[id] = party;
  }
}
