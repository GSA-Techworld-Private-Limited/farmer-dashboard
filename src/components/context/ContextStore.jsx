import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();
export const ContextStore = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);
  const [checkedItems, setCheckedItems] = useState({});
  const [categorySelect, setCategorySelect] = useState(null);
  const updatedTitle = localStorage.getItem("title") || "Dashboard";
  const [title, setTitle] = useState(updatedTitle);
  useEffect(() => {
    localStorage.setItem("title", title);
  }, [title]);
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
