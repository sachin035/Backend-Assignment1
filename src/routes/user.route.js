import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

export const router = Router();
router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyJWT, logoutUser);
