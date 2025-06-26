import express from "express";
import cors from "cors";

import {
  newInvitationController,
  newPartyController,
} from "./feature/party/controller";
import { InvitationService, PartyService } from "./feature/party/application";
import { PartyMockRepository } from "./feature/party/infrastructure/party_mock_repository";
import { InvitationMockRepository } from "./feature/party/infrastructure/invitation_mock_repository";
import { newIndexController } from "./index_controller";

const app = express();
const port = 3001;

init();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function init() {
  const partyRepository = new PartyMockRepository();
  const invitationRepository = new InvitationMockRepository();

  const partyService = new PartyService(partyRepository);
  const invitationService = new InvitationService(
    partyRepository,
    invitationRepository
  );

  app.use(cors());
  newPartyController(app, partyService, invitationService);
  newInvitationController(app, invitationService);
  newIndexController(app);
}
