import crypto from "crypto";

import { NotFoundError, ValidationError } from "@/app/base";
import {
  GetIPartyResponse,
  ListPartiesResponse,
  PartyService,
} from "../context";

export class PartyMockService implements PartyService {
  private data: Record<string, PartyResponse> = {};

  async list(): Promise<ListPartiesResponse> {
    return { data: Object.values(this.data) };
  }

  async getParty(partyId: string): Promise<GetIPartyResponse> {
    const party = this.data[partyId];
    if (!party) {
      throw new NotFoundError();
    }

    return { party };
  }

  async createParty(name: string): Promise<string> {
    const id = crypto.randomUUID();

    this.data[id] = {
      id,
      name,
    };

    return id;
  }

  async changePartyName(partyId: string, name: string): Promise<void> {
    if (!name.trim()) {
      throw new ValidationError({
        message: "validation error",
        errors: ["name must not be empty"],
      });
    }

    const party = this.data[partyId];
    if (!party) {
      throw new NotFoundError();
    }

    party.name = name;
  }
}

type PartyResponse = {
  id: string;
  name: string;
};
