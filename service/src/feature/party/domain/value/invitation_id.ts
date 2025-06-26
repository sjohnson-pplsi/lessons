export type InvitationId = string;

export function newInvitationId(): InvitationId {
  return crypto.randomUUID();
}
