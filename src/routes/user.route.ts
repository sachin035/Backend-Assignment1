import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller";
import { verifyJWT } from "../middleware/auth.middleware";

const router: Router = Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyJWT, logoutUser);

export default router;
