import React, { createContext, useState } from "react";

const MyContext = createContext();
export const ContextStore = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);
  const [checkedItems, setCheckedItems] = useState({});
  const [categorySelect, setCategorySelect] = useState(null);
  const [title, setTitle] = useState("Dashboard");
  return (
    <MyContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        title,
        setTitle,
        categorySelect,
        setCategorySelect,
        checkedItems,
        setCheckedItems,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
