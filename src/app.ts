import express from "express";
import pinoHttp from "pino-http";
import logger from "./logger.js";

const app = express();

app.use(pinoHttp({ logger }));

app.get("/home/welcome", (_request, response) => {
  logger.info("Welcome route was hit");
  response.type("text/plain").send("welcome to first cd/cd ");
});

export default app;