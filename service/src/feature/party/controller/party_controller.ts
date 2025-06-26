import express, { Express } from "express";
import bodyParser from "body-parser";
import { object, string } from "yup";

import { InvitationService, PartyService } from "../application";

export function newPartyController(
  app: Express,
  partyService: PartyService,
  invitationService: InvitationService
) {
  const router = express.Router();

  router.get("/", async (req, res, next) => {
    try {
      const list = await partyService.list();
      res.json({
        data: list.map(({ id, name }) => ({
          id,
          name,
        })),
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const party = await partyService.getParty(id);
      res.json({
        party: {
          id: party.id,
          name: party.name,
        },
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id/invitations", async (req, res, next) => {
    try {
      const { id } = req.params;
      const list = await invitationService.list(id);
      res.json({
        data: list.map(({ id, email }) => ({
          id,
          email,
        })),
      });
    } catch (err) {
      next(err);
    }
  });

  const createPartySchema = object({
    name: string().required(),
  });

  router.post("/", bodyParser.json(), async (req, res, next) => {
    try {
      const { name } = await createPartySchema.validate(req.body, {
        abortEarly: false,
      });
      const id = await partyService.createParty(name);
      res.json({ id });
    } catch (err) {
      next(err);
    }
  });

  const changePartyNameSchema = object({
    name: string().required(),
  });

  router.put("/:id", bodyParser.json(), async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = await changePartyNameSchema.validate(req.body, {
        abortEarly: false,
      });
      await partyService.changeName(id, name);
      res.json({});
    } catch (err) {
      next(err);
    }
  });

  app.use("/party", router);
}
