import { Router } from "express";
import authRouter from "./user.route";
import todoRouter from "./todo.routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/todo", todoRouter);

export default router;
