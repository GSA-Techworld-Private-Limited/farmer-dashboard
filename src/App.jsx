import { BrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/NavBar";
import SideBar from "./components/SideBar";
import router from "./Router";
import { useContext } from "react";
import MyContext from "./components/context/ContextStore";

function App() {
  const { authenticated } = useContext(MyContext);
  return (
    <>
      {authenticated && <NavBar />}
      <div className="flex">
        <div>
          <BrowserRouter>{authenticated && <SideBar />}</BrowserRouter>
        </div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
