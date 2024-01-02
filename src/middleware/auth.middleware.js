import { getUserById } from "../util/user.js";
import jwt from "jsonwebtoken";
// const jwt = require("jsonwebtoken");
export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new Error("Unauthorized");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = getUserById(decodedToken.id);
    if (!user) {
      throw new Error("Invalid access token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new Error(error?.message || "Invalid access token");
  }
};
