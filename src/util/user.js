const users = [
  {
    username: "sachin",
    password: "sachin123",
  },
  {
    username: "sairush",
    password: "tamang123",
  },
];

export const getUsers = () => {
  return users;
};

export const addUser = (user) => {
  users.push(user);
};

export const getUserById = (id) => {
  const user = users.find(({ id: userID }) => userID === id);
  return user;
};
