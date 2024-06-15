import React, { useContext } from "react";
import { BellIcon, DottedMenuIcon, LogoutIcon } from "./Icons";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/ContextStore";
import { toast } from "react-toastify";

const NavBar = () => {
  const { title, setAuthenticated, setTitle } = useContext(MyContext);
  const navigate = useNavigate();
  const logout = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      sessionStorage.removeItem("token");
      setAuthenticated(false);
      setTitle("Dashboard");
      toast.success("Logout Successfully", {
        theme: "light",
      });
    }
  };
  return (
    <div className="w-full bg-nav-bg py-5 px-12 flex items-center justify-between">
      <div className="flex items-center gap-6 ml-[267px]">
        <DottedMenuIcon />
        <p className="text-2xl leading-9 font-semibold font-poppins text-white">
          {title}
        </p>
      </div>
      <div className="flex items-center gap-[42px]">
        <BellIcon />
        <button
          onClick={logout}
          className="flex items-center gap-[5px] text-base text-white font-poppins"
        >
          <LogoutIcon />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
