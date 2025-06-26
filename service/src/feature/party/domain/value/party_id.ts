import crypto from "crypto";

export type PartyId = string;

export function newPartyId(): PartyId {
  return crypto.randomUUID();
}
