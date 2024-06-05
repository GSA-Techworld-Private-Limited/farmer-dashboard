import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/NavBar";
import SideBar from "./components/SideBar";
import { useContext } from "react";
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

function App() {
  const { authenticated } = useContext(MyContext);
  return (
    <>
      {authenticated && <NavBar />}
      <div className="flex">
        <div>{authenticated && <SideBar />}</div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="*"
            element={
              <p className="text-2xl font-bold font-poppins p-10">
                404 Error - Nothing here...
              </p>
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
        </Routes>
      </div>
    </>
  );
}

export default App;
