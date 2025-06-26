export interface PartyService {
  list(): Promise<ListPartiesResponse>;
  getParty(partyId: string): Promise<GetIPartyResponse>;
  createParty(name: string): Promise<string>;
  changePartyName(partyId: string, name: string): Promise<void>;
}

export type ListPartiesResponse = {
  data: {
    id: string;
    name: string;
  }[];
};

export type GetIPartyResponse = {
  party: {
    id: string;
    name: string;
  };
};
