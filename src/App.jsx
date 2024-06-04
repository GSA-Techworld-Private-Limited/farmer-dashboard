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
        </Routes>
      </div>
    </>
  );
}

export default App;
