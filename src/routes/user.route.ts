import { Router } from "express";
import { signup, login } from "../controllers/user.controller";

const authRouter = Router();

authRouter.post("/", signup);
authRouter.post("/login", login);
// router.post("/logout", verifyJWT, logoutUser);

export default authRouter;
