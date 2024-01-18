import cookieParser from "cookie-parser";
import express, { Application } from "express";
import routes from "./routes/index";
import serverConfig from "./config";
import { genericErrorHandler, notFoundError } from "./middleware/errorHandler";

const app = express();

app.use(express.json({ limit: "10mb" }));

app.use(routes);

app.use(genericErrorHandler);

app.use(notFoundError);

app.listen(serverConfig.serverPort, () => {
  console.log(`Server is listening at port ${serverConfig.serverPort}`);
});
