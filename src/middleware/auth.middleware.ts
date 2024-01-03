import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getUserById } from "../util/user";
import { RequestWithUser } from "../interface/requestUser";

export const verifyJWT = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "") ||
      "";

    if (!token) {
      throw new Error("Unauthorized");
    }

    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    ) as { id: number }; // Assuming 'id' is the expected field in the token.

    const user = getUserById(decodedToken.id);

    if (!user) {
      throw new Error("Invalid access token");
    }

    req.user = user;
    next();
  } catch (error: any) {
    throw new Error(error?.message || "Invalid access token");
  }
};
