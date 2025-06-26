import crypto from "crypto";

import { NotFoundError } from "@/app/base";
import {
  GetInvitationResponse,
  InvitationService,
  ListInvitationsResponse,
} from "../context";

export class InvitationMockService implements InvitationService {
  private data: Record<string, InvitationResponse> = {};

  async list(partyId: string): Promise<ListInvitationsResponse> {
    return {
      data: Object.values(this.data).filter((row) => row.partyId === partyId),
    };
  }

  async getInvitation(invitationId: string): Promise<GetInvitationResponse> {
    const invitation = this.data[invitationId];
    if (!invitation) {
      throw new NotFoundError();
    }

    return { invitation };
  }

  async createInvitation(partyId: string, email: string): Promise<string> {
    const id = crypto.randomUUID();

    this.data[id] = {
      id,
      partyId,
      email,
    };

    return id;
  }

  async changeEmail(invitationId: string, email: string): Promise<void> {
    const invitation = this.data[invitationId];
    if (!invitation) {
      throw new NotFoundError();
    }

    invitation.email = email;
  }
}

type InvitationResponse = {
  id: string;
  partyId: string;
  email: string;
};
