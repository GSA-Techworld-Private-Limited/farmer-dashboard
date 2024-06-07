import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();
export const ContextStore = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [categorySelect, setCategorySelect] = useState(null);
  const updatedTitle = sessionStorage.getItem("title") || "Dashboard";
  const [title, setTitle] = useState(updatedTitle);
  // data
  const [stats, setStats] = useState(null);
  const [productListStats, setProductListStats] = useState(null);
  const [experts, setExperts] = useState(null);
  useEffect(() => {
    sessionStorage.setItem("title", title);
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
        stats,
        setStats,
        productListStats,
        setProductListStats,
        experts,
        setExperts,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
