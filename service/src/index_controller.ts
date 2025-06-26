import { ErrorRequestHandler, Express } from "express";
import { ValidationError } from "yup";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if ("message" in err) {
    if (err instanceof ValidationError) {
      res.status(500).json({
        error: {
          message: "validation error",
          errors: err.errors,
        },
      });
    } else {
      res.status(500).json({ error: err.message });
    }
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
