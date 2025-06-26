export interface InvitationService {
  list(partyId: string): Promise<ListInvitationsResponse>;
  getInvitation(invitationId: string): Promise<GetInvitationResponse>;
  createInvitation(partyId: string, email: string): Promise<string>;
  changeEmail(invitationId: string, email: string): Promise<void>;
}

export type ListInvitationsResponse = {
  data: {
    id: string;
    partyId: string;
    email: string;
  }[];
};

export type GetInvitationResponse = {
  invitation: {
    id: string;
    partyId: string;
    email: string;
  };
};
