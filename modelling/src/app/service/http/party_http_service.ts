import { callService } from "@/app/base";
import {
  GetIPartyResponse,
  ListPartiesResponse,
  PartyService,
} from "../context";

export class PartyHttpService implements PartyService {
  list(): Promise<ListPartiesResponse> {
    return callService(() => fetch(`http://localhost:3001/party`));
  }

  getParty(partyId: string): Promise<GetIPartyResponse> {
    return callService(() => fetch(`http://localhost:3001/party/${partyId}`));
  }

  createParty(name: string): Promise<string> {
    return callService(() =>
      fetch(`http://localhost:3001/party`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      })
    );
  }

  changePartyName(partyId: string, name: string): Promise<void> {
    return callService(() =>
      fetch(`http://localhost:3001/party/${partyId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      })
    );
  }
}
