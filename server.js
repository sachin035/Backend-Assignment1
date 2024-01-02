import "dotenv/config";
import cookieParser from "cookie-parser";
import express, { Router } from "express";
import { router } from "./src/routes/user.route.js";

const app = express();

app.use(express.json());

app.use(cookieParser());
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("connected");
});

// // const crypto = require("crypto");

// // try {
// //   const randomBytes = crypto.randomBytes(64).toString("hex");
// //   console.log("Random String:", randomBytes);
// // } catch (error) {
// //   console.error("Error generating random string:", error.message);
// // }

// const user = [
//   {
//     username: "sachin",
//     password: "sachin123",
//   },
//   {
//     username: "sairush",
//     password: "tamang123",
//   },
// ];

// //refactor
// app.use("/user", userRoute);

// app.get("/user", authenticateToken, (req, res) => {
//   res.json(user.filter((post) => post.username === req.user.username));
// });

// // app.post("/login", (req, res) => {
// //   const username = req.body.username;
// //   const title = req.body.title;
// //   const user = {
// //     name: username,
// //     title: title,
// //   };

// //   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
// //   res.json({ accessToken: accessToken });
// // });

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split("")[1];
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// const bcrypt = require("bcrypt");
// const userArr = [];

// app.get("./users", (req, res) => {
//   res.json(users);
// });

// app.post("./users", async (req, res) => {
//   try {
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     console.log(salt);
//     console.log(hashedPassword);
//     const user = {
//       name: req.body.name,
//       password: req.body.password,
//     };
//     userArr.push(user);
//     res.status(201).send();
//   } catch {
//     res.status(500).send();
//   }
// });

// app.post("./users/login", async (req, res) => {
//   const user = userArr.find((user) => (user.name = req.body.name));
//   if (user == null) {
//     return res.status(400).send("cannot find the user");
//   }
//   try {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       res.send("Success");
//     } else {
//       res.send("Not allowed");
//     }
//   } catch {
//     res.status(500).send();
//   }
// });
