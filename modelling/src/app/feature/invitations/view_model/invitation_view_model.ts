export type Invitation = {
  email: string;
};

export interface InvitationService {
  getInvitation(id: string): Promise<Invitation>;
  changeEmail(id: string, email: string): Promise<void>;
}

export class InvitationViewModel {
  constructor(private invitationService: InvitationService) {}

  async changeEmail(id: string, email: string) {
    await this.invitationService.changeEmail(id, email);
  }
}
