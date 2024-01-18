// import jwt from "jsonwebtoken";

// interface User {
//   id: number;
//   username: string;
//   password: string;
// }

// export const generateAccessAndRefreshToken = (user: User) => {
//   console.log({ user });
//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET!, {
//     expiresIn: "15m",
//   });

//   const refreshToken = jwt.sign(
//     { id: user.id },
//     process.env.REFRESH_TOKEN_SECRET!,
//     {
//       expiresIn: "7d",
//     }
//   );

//   return { accessToken, refreshToken };
// };
