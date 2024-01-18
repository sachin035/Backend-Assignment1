import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import * as authService from "../service/auth";

export async function signup(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  try {
    const data = await authService.signup(body);
    return res.status(HttpStatus.CREATED).json(data);
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  try {
    const data = await authService.login(body);
    return res.status(HttpStatus.ACCEPTED).json(data);
  } catch (error) {
    next(error);
  }
}

export async function regenerateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const refreshToken = req.body.refreshToken;
  try {
    const data = await authService.regenerateToken(refreshToken);
    return res.json(data);
  } catch (error) {
    next(error);
  }
}

// import { Request, Response } from "express";
// import { getUsers, addUser, getUserById } from "../util/user";
// import { generateAccessAndRefreshToken } from "../util/tokenGenerator";
// import { verifyJWT } from "../middleware/auth.middleware";
// import bcrypt from "bcrypt";
// import { RequestWithUser } from "../interface/requestUser";
// import { loginSchema, registerSchema } from "../schema/user.schema";

// export const registerUser = async (req: Request, res: Response) => {
//   const { id, username, password } = req.body;
//   const { error } = registerSchema.validate(req.body);
//   if (error) {
//     throw new Error("error");
//   }

//   const salt = await bcrypt.genSalt();
//   console.log(password);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   if ([id, username, password].some((field) => field?.trim() === "")) {
//     throw new Error("field cannot be empty");
//   }

//   const user = {
//     id,
//     username,
//     password: hashedPassword,
//   };
//   console.log(hashedPassword);
//   const users = addUser(user);

//   res.status(200).json({ user: users, message: "Register successful" });
// };

// export const loginUser = async (req: Request, res: Response) => {
//   const { username, password } = req.body;
//   const { error } = loginSchema.validate(req.body);
//   if (error) {
//     throw new Error("error");
//   }

//   if ([username, password].some((field) => field?.trim() === "")) {
//     throw new Error("field cannot be empty");
//   }

//   const users = getUsers();
//   // console.log(users);
//   const userExist = users.find((user) => user.username === username);
//   if (!userExist) {
//     throw new Error("User doesn't exist");
//   }
//   const isPasswordValid = await bcrypt.compare(password, userExist.password);
//   if (!isPasswordValid) {
//     throw new Error("Invalid credentials");
//   }
//   console.log({ userExist });

//   const { accessToken, refreshToken } =
//     generateAccessAndRefreshToken(userExist);
//   userExist.refreshToken = refreshToken;

//   res
//     .status(200)
//     .cookie("accessToken", accessToken)
//     .cookie("refreshToken", refreshToken)
//     .json({ message: "Login successful", accessToken, refreshToken });
// };

// export const logoutUser = async (req: RequestWithUser, res: Response) => {
//   const userExist = getUserById(req.user?.id!);
//   if (!userExist) {
//     throw new Error("User not found");
//   }
//   userExist.refreshToken = "";

//   res
//     .status(200)
//     .clearCookie("accessToken", {})
//     .clearCookie("refreshToken", {})
//     .json("User logged out");
// };
