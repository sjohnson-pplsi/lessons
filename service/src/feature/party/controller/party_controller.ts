import express, { Express } from "express";
import bodyParser from "body-parser";
import { object, string } from "yup";

import { PartyService } from "../application";

export function newPartyController(app: Express, partyService: PartyService) {
  const router = express.Router();

  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const party = await partyService.getParty(id);
      res.json({ party });
    } catch (err) {
      next(err);
    }
  });

  const createPartySchema = object({
    name: string().required(),
  });

  router.post("/", bodyParser.json(), async (req, res, next) => {
    try {
      const { name } = await createPartySchema.validate(req.body);
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
      const { name } = await changePartyNameSchema.validate(req.body);
      await partyService.changeName(id, name);
      res.json({});
    } catch (err) {
      next(err);
    }
  });

  app.use("/party", router);
}
