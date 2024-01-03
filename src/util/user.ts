// interface User {
//   id: number;
//   username: string;
//   password: string;
//   refreshToken: [];
// }
import { User } from "../types/user";

const users: User[] = [
  {
    id: 1,
    username: "sachin",
    password: "sachin123",
    refreshToken: "",
  },
  {
    id: 2,
    username: "sairush",
    password: "tamang123",
    refreshToken: "",
  },
];

export const getUsers = (): User[] => {
  return users;
};

export const addUser = (user: User): void => {
  users.push(user);
};

export const getUserById = (id: number): User | undefined => {
  const user = users.find((u) => u.id === id);
  return user;
};
