import { getUsers, addUser } from "../util/user.js";
import { generateAccessAndRefreshToken } from "../util/tokenGenerator.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { getUserById } from "../util/user.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  if ([username, password].some((field) => field?.trim() === "")) {
    throw new Error("field cannot be empty");
  }

  const user = {
    username,
    password: hashedPassword,
  };
  const users = addUser(user);

  res.status().json({ user: users, message: "Register successful" });
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if ([username, password].some((field) => field?.trim() === "")) {
    throw new Error("field cannot be empty");
  }

  const users = getUsers();
  const userExist = users.find((user) => user.username === username);
  if (!userExist) {
    throw new Error("User doesn't exist");
  }
  const isPasswordValid = await bcrypt.compare(password, userExist.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const { accessToken, refreshToken } =
    generateAccessAndRefreshToken(userExist);
  userExist.refreshToken = refreshToken;

  res
    .status(200)
    .cookie("accessToken", accessToken)
    .cookie("refreshToken", refreshToken)
    .json("Login successful");
};

export const logoutUser = async (req, res) => {
  const userExist = getUserById(req.user?.id);
  if (!userExist) {
    throw new Error("User not found");
  }
  userExist.refreshToken = "";

  res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json("User logged out");
};
