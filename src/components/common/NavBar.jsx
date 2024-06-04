import React, { useContext } from "react";
import { BellIcon, DottedMenuIcon, LogoutIcon } from "./Icons";
import MyContext from "../context/ContextStore";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { title, setAuthenticated } = useContext(MyContext);
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    setAuthenticated(false);
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
