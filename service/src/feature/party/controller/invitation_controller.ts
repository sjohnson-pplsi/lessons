import express, { Express } from "express";
import bodyParser from "body-parser";
import { object, string } from "yup";

import { InvitationService } from "../application";

export function newInvitationController(
  app: Express,
  invitationService: InvitationService
) {
  const router = express.Router();

  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const invitation = await invitationService.getInvitation(id);
      res.json({
        invitation: {
          id: invitation.id,
          email: invitation.email,
        },
      });
    } catch (err) {
      next(err);
    }
  });

  const createInvitationSchema = object({
    partyId: string().required(),
    email: string().required(),
  });

  router.post("/", bodyParser.json(), async (req, res, next) => {
    try {
      const { partyId, email } = await createInvitationSchema.validate(
        req.body,
        {
          abortEarly: false,
        }
      );
      const id = await invitationService.createInvitation(partyId, email);
      res.json({ id });
    } catch (err) {
      next(err);
    }
  });

  const changeEmailSchema = object({
    email: string().required(),
  });

  router.put("/:id", bodyParser.json(), async (req, res, next) => {
    try {
      const { id } = req.params;
      const { email } = await changeEmailSchema.validate(req.body, {
        abortEarly: false,
      });
      await invitationService.changeEmail(id, email);
      res.json({});
    } catch (err) {
      next(err);
    }
  });

  app.use("/invitation", router);
}
