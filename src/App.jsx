import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/NavBar";
import SideBar from "./components/SideBar";
import { useContext, useEffect } from "react";
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
import {
  fetchExperts,
  fetchProductListStats,
  fetchStats,
} from "./components/api/auth";
function App() {
  const {
    authenticated,
    setAuthenticated,
    setStats,
    setProductListStats,
    setExperts,
    title,
    setTitle,
  } = useContext(MyContext);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      fetchStats(setStats);
      fetchProductListStats(setProductListStats);
      fetchExperts(setExperts);
    }
  }, []);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, [authenticated]);
  return (
    <>
      {authenticated && <NavBar />}
      <div className="flex">
        <div>{authenticated && <SideBar />}</div>
        <Routes>
          <Route
            path="/"
            element={
              !authenticated ? (
                <LoginPage />
              ) : (
                <Navigate to={title.toLowerCase() || "/dashboard"} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <UserStatus />
              </ProtectedRoute>
            }
          />
          <Route
            path="/experts"
            element={
              <ProtectedRoute>
                <Experts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/experts/:expert_id"
            element={
              <ProtectedRoute>
                <ExpertDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/experts/add-expert"
            element={
              <ProtectedRoute>
                <AddExperts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:product_id"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/categories"
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/add-products"
            element={
              <ProtectedRoute>
                <AddProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <Employees />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees/:farmer_id"
            element={
              <ProtectedRoute>
                <FramerDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees/add-employees"
            element={
              <ProtectedRoute>
                <AddEmployees />
              </ProtectedRoute>
            }
          />
          <Route
            path="/farmers"
            element={
              <ProtectedRoute>
                <Farmers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/farmers/add-farmer"
            element={
              <ProtectedRoute>
                <AddFarmer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/farmers/crops-added"
            element={
              <ProtectedRoute>
                <AddedCrops />
              </ProtectedRoute>
            }
          />
          <Route
            path="/farmers/crops-added/:request_id"
            element={
              <ProtectedRoute>
                <CropsDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendors"
            element={
              <ProtectedRoute>
                <Vendors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendors/add-vendors"
            element={
              <ProtectedRoute>
                <AddVendors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nurseries"
            element={
              <ProtectedRoute>
                <Nurseries />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/user-requests"
            element={
              <ProtectedRoute>
                <UserRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/user-requests/:user_req_id"
            element={
              <ProtectedRoute>
                <RequestDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/offers"
            element={
              <ProtectedRoute>
                <Offers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/offers/:offer_id"
            element={
              <ProtectedRoute>
                <OfferDetails />
              </ProtectedRoute>
            }
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
