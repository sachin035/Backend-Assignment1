import cookieParser from "cookie-parser";
import express, { Application } from "express";
import router from "./src/routes/user.route";
import todoRouter from "./src/routes/todo.routes";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use("/todos", todoRouter);
app.use("/", router);

const port: string | number = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("connected", port);
});
