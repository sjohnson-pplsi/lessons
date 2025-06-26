import { PartyRepository } from "../application";
import { Party, PartyId } from "../domain";

export class PartyMockRepository implements PartyRepository {
  createParty(party: Party): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getParty(id: PartyId): Promise<Party> {
    throw new Error("Method not implemented.");
  }

  replaceParty(id: PartyId, party: Party): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
