import { PartyRepository } from "../application";
import { Party, PartyId } from "../domain";

export class PartyMockRepository implements PartyRepository {
  private data: Record<PartyId, PartyModel> = {};

  async list(): Promise<Party[]> {
    return Object.values(this.data).map(({ id, name }) =>
      Party.restore(id, name)
    );
  }

  async createParty(party: Party): Promise<void> {
    this.data[party.id] = new PartyModel(party.id, party.name);
  }

  async getParty(id: PartyId): Promise<Party> {
    const row = this.data[id];
    if (!row) {
      throw new Error("not found");
    }

    return Party.restore(row.id, row.name);
  }

  async replaceParty(id: PartyId, party: Party): Promise<void> {
    const old = this.data[id];
    if (!old) {
      throw new Error("not found");
    }

    this.data[id] = new PartyModel(id, party.name);
  }
}

class PartyModel {
  constructor(public id: string, public name: string) {}
}
