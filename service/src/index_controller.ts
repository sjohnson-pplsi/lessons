import { ErrorRequestHandler, Express } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if ("message" in err) {
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: err });
  }
};

export function newIndexController(app: Express) {
  app.get("/", (req, res) => {
    res.send("party service");
  });

  app.use(errorHandler);
}
