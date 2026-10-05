import app from "./app";
import logger from "./logger";
const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  logger.info(`Server listening on port ${port}`);
});
