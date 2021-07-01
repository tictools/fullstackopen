import { createContext, useState } from "react";

const INITIAL_STATE = [
  {
    name: "tictools",
    phone: "123123123",
  },
  {
    name: "Meliona",
    phone: "7878978989",
  },
  {
    name: "Pau",
    phone: "15915919",
  },
  {
    name: "Mariona",
    phone: "456456465",
  },
  {
    name: "Carlos",
    phone: "4564556",
  },
];

export const UsersContext = createContext([]);

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState(INITIAL_STATE);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
