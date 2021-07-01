import { createContext, useState } from "react";

const INITIAL_STATE = "";

export const FilterContext = createContext(INITIAL_STATE);

export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState(INITIAL_STATE);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
