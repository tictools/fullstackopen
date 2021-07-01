import { createContext, useState } from "react";

const INITIAL_STATE = [];
export const UsersContext = createContext([]);

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState(INITIAL_STATE);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
