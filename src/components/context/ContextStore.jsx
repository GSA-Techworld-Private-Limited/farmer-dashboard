import React, { createContext, useEffect, useState } from "react";

const MyContext = createContext();
export const ContextStore = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [categorySelect, setCategorySelect] = useState(null);
  const updatedTitle = sessionStorage.getItem("title") || "Dashboard";
  const [title, setTitle] = useState("Dashboard");
  // data
  const [stats, setStats] = useState(null);
  const [productListStats, setProductListStats] = useState(null);
  const [experts, setExperts] = useState(null);
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [orders, setOrders] = useState(null);
  const [employees, setEmployees] = useState(null);
  const [farmers, setFarmers] = useState(null);
  const [farmersCrops, setFarmersCrops] = useState(null);
  const [vendors, setVendors] = useState(null);
  const [nurseries, setNurseries] = useState(null);
  const [users, setUsers] = useState(null);
  const [couponData, setCouponData] = useState(null);
  const [sales, setSales] = useState(null);
  const [loading, setLoading] = useState(true);
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
        products,
        setProducts,
        categories,
        setCategories,
        orders,
        setOrders,
        employees,
        setEmployees,
        farmers,
        setFarmers,
        farmersCrops,
        setFarmersCrops,
        vendors,
        setVendors,
        nurseries,
        setNurseries,
        users,
        setUsers,
        couponData,
        setCouponData,
        sales,
        setSales,
        loading,
        setLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
