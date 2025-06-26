import { Party, PartyId } from "../domain";

export interface PartyRepository {
  list(): Promise<Party[]>;
  createParty(party: Party): Promise<void>;
  getParty(id: PartyId): Promise<Party>;
  replaceParty(id: PartyId, party: Party): Promise<void>;
}
