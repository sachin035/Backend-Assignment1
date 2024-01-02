// require("dotenv").config();

// const express = require("express");
// const app = express();

// const jwt = require("jsonwebtoken");
// app.use(express.json());

// const crypto = require("crypto");

// try {
//   const randomBytes = crypto.randomBytes(64).toString("hex");
//   console.log("Random String:", randomBytes);
// } catch (error) {
//   console.error("Error generating random string:", error.message);
// }

// let refreshTokenArr = [];

// app.post("/token", (req, res) => {
//   const refreshToken = req.body.token;
//   if (refreshToken == null) return res.sendStatus(401);
//   if (!refreshTokenArr.includes(refreshToken)) return res.sendStatus(403);
//   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     const accessToken = generateAccessToken({ name: user.name });
//     res.json({ accessToken: accessToken });
//   });
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const title = req.body.title;
//   const user = {
//     name: username,
//     title: title,
//   };

//   //   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   //   res.json({ accessToken: accessToken });
//   const accessToken = generateAccessToken(user);
//   const refreshToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   refreshTokenArr.push(refreshToken);
//   res.json({ accessToken: accessToken, refreshToken: refreshToken });
// });

// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "45s" });
// }

// app.listen(4000);
