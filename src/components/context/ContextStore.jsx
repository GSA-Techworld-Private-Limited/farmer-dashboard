import React, { createContext, useState } from "react";

const MyContext = createContext();
export const ContextStore = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);
  return (
    <MyContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
