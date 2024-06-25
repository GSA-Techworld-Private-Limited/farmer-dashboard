import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/NavBar";
import SideBar from "./components/SideBar";
import { useContext, useEffect, useState } from "react";
import MyContext from "./components/context/ContextStore";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import UserStatus from "./components/dashboard/UserStatus";
import Experts from "./components/experts/Experts";
import ExpertDetails from "./components/experts/ExpertDetails";
import AddExperts from "./components/experts/AddExperts";
import Orders from "./components/orders/Orders";
import Employees from "./components/emploees/Employees";
import FramerDetails from "./components/emploees/FarmerDetails";
import AddEmployees from "./components/emploees/AddEmployees";
import Farmers from "./components/farmers/Farmers";
import AddFarmer from "./components/farmers/AddFarmer";
import AddedCrops from "./components/farmers/AddedCrops";
import CropsDetails from "./components/farmers/CropsDetails";
import Vendors from "./components/vendors/Vendors";
import AddVendors from "./components/vendors/AddVendors";
import Nurseries from "./components/nurseries/Nurseries";
import Users from "./components/users/User";
import UserRequest from "./components/users/UserRequest";
import RequestDetails from "./components/users/RequestDetails";
import Offers from "./components/offers/Offers";
import OfferDetails from "./components/offers/OfferDetails";
import Products from "./components/products/Products";
import AddProducts from "./components/products/AddProducts";
import ProductDetails from "./components/products/ProductDetails";
import Categories from "./components/products/Categories";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchBannerData,
  fetchCategories,
  fetchCouponData,
  fetchEmployees,
  fetchExperts,
  fetchFarmers,
  fetchFarmersCrops,
  fetchNurseries,
  fetchOrdersList,
  fetchProductListStats,
  fetchProducts,
  fetchSales,
  fetchStats,
  fetchUsers,
  fetchUsersRequest,
  fetchVendors,
} from "./components/api/auth";
import AddNursery from "./components/nurseries/AddNursery";
import { ToastContainer } from "react-toastify";
import ExportOverlay from "./components/common/ExportOverlay";
import BannerDetails from "./components/offers/BannerDetails";
function App() {
  const {
    authenticated,
    setAuthenticated,
    setStats,
    setProductListStats,
    setExperts,
    setProducts,
    setCategories,
    setOrders,
    setEmployees,
    setFarmers,
    setFarmersCrops,
    setVendors,
    setNurseries,
    setUsers,
    setCouponData,
    setSales,
    setLoading,
    exportLayer,setBannerData,
    setExportLayer,setUsersRequest
  } = useContext(MyContext);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      fetchStats(setStats);
      fetchProductListStats(setProductListStats);
      fetchExperts(setExperts);
      fetchProducts(setProducts);
      fetchCategories(setCategories);
      fetchOrdersList(setOrders);
      fetchEmployees(setEmployees);
      fetchFarmers(setFarmers);
      fetchFarmersCrops(setFarmersCrops);
      fetchVendors(setVendors);
      fetchNurseries(setNurseries);
      fetchUsers(setUsers);
      fetchUsersRequest(setUsersRequest);
      fetchCouponData(setCouponData);
      fetchBannerData(setBannerData)
      fetchSales(setSales, "yearly");
    }
  }, [authenticated]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
    setLoading(false); // Set loading to false after authentication check
  }, [authenticated]);
  console.log(authenticated);
  return (
    <>
      {exportLayer && <ExportOverlay setExportLayer={setExportLayer} />}
      <ToastContainer />
      {authenticated && <NavBar />}
      <div className="flex">
        <div>{authenticated && <SideBar />}</div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<UserStatus />} />}
          />
          <Route
            path="/experts"
            element={<ProtectedRoute element={<Experts />} />}
          />

          <Route
            path="/experts/add-expert"
            exact
            element={<ProtectedRoute element={<AddExperts />} />}
          />
          <Route
            path="/experts/:expert_id"
            exact
            element={<ProtectedRoute element={<ExpertDetails />} />}
          />

          <Route
            path="/products"
            element={<ProtectedRoute element={<Products />} />}
          />
          <Route
            path="/products/:product_id"
            element={<ProtectedRoute element={<ProductDetails />} />}
          />
          <Route
            path="/products/categories"
            element={<ProtectedRoute element={<Categories />} />}
          />
          <Route
            path="/products/add-products"
            element={<ProtectedRoute element={<AddProducts />} />}
          />
          <Route
            path="/orders"
            element={<ProtectedRoute element={<Orders />} />}
          />
          <Route
            path="/employees"
            element={<ProtectedRoute element={<Employees />} />}
          />
          <Route
            path="/employees/:farmer_id"
            element={<ProtectedRoute element={<FramerDetails />} />}
          />
          <Route
            path="/employees/add-employees"
            element={<ProtectedRoute element={<AddEmployees />} />}
          />
          <Route
            path="/farmers"
            element={<ProtectedRoute element={<Farmers />} />}
          />
          <Route
            path="/farmers/add-farmer"
            element={<ProtectedRoute element={<AddFarmer />} />}
          />
          <Route
            path="/farmers/crops-added"
            element={<ProtectedRoute element={<AddedCrops />} />}
          />
          <Route
            path="/farmers/crops-added/:request_id"
            element={<ProtectedRoute element={<CropsDetails />} />}
          />
          <Route
            path="/vendors"
            element={<ProtectedRoute element={<Vendors />} />}
          />
          <Route
            path="/vendors/add-vendors"
            element={<ProtectedRoute element={<AddVendors />} />}
          />
          <Route
            path="/nurseries"
            element={<ProtectedRoute element={<Nurseries />} />}
          />
          <Route
            path="/nurseries/add-nursery"
            element={<ProtectedRoute element={<AddNursery />} />}
          />
          <Route
            path="/users"
            element={<ProtectedRoute element={<Users />} />}
          />
          <Route
            path="/users/user-requests"
            element={<ProtectedRoute element={<UserRequest />} />}
          />
          <Route
            path="/users/user-requests/:user_req_id"
            element={<ProtectedRoute element={<RequestDetails />} />}
          />
          <Route
            path="/offers"
            element={<ProtectedRoute element={<Offers />} />}
          />
          <Route
            path="/offers/:offer_id"
            element={<ProtectedRoute element={<OfferDetails />} />}
          />
          <Route
            path="/offers/banner/:banner_id"
            element={<ProtectedRoute element={<BannerDetails />} />}
          />
          <Route
            path="*"
            element={
              <p className="text-2xl font-bold font-poppins p-10">
                404 Error - Nothing here...
              </p>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
