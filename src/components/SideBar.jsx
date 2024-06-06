import React, { useContext, useState } from "react";
import SideBtn from "./common/SideBtn";
import { NavLink, useNavigate } from "react-router-dom";
import MyContext from "./context/ContextStore";
import home from "../assets/images/svg/home.svg";
import expert from "../assets/images/svg/expert.svg";
import orders from "../assets/images/svg/orders.svg";
import employee from "../assets/images/svg/employee.svg";
import vendor from "../assets/images/svg/vendor.svg";
import nursuries from "../assets/images/svg/nursuries.svg";
import offers from "../assets/images/svg/offers.svg";
import productIcon from "../assets/images/svg/product.svg";
import arrow from "../assets/images/svg/drop-arrow.svg";
import { CommonSquareIcon } from "./common/Icons";
const SideBar = () => {
  const { setTitle } = useContext(MyContext);
  const navigate = useNavigate();
  const handleTabs = (path) => {
    if (path) {
      navigate(path.toLowerCase());
      setTitle(path);
    }
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (path) => {
    setTitle(path);
    setIsDropdownOpen(path);
  };
  return (
    <div className="flex flex-col w-[275px] bg-hero gap-6 py-[30px] pl-5 pr-4 h-[calc(100vh-76px)] overflow-auto custom_scroll">
      <SideBtn handleTabs={handleTabs} btnText="Dashboard" icon={home} />
      <SideBtn handleTabs={handleTabs} btnText="Experts" icon={expert} />
      <div>
        <NavLink to="/products" activeClassName="">
          <div
            onClick={() => toggleDropdown("Products")}
            className="flex items-center justify-between w-full py-[10px] pl-6 pr-[22px] duration-300 cursor-pointer rounded-md hover:bg-[#2A5105] text-white"
          >
            <div className="flex items-center gap-4">
              <img src={productIcon} alt="icons" />
              <span className="font-poppins text-sm text-white leading-6">
                Products
              </span>
              <img
                className={isDropdownOpen === "Products" ? "rotate-180" : ""}
                src={arrow}
                alt="arrow"
              />
            </div>
            <CommonSquareIcon />
          </div>
        </NavLink>
        {isDropdownOpen === "Products" && (
          <div className="mt-2">
            <NavLink
              activeClassNam=""
              to="/products/categories"
              className="block px-4 py-2 subLink text-sm text-white font-poppins opacity-50 font-normal pl-16 leading-6"
              onClick={() => {
                handleTabs("Categories");
              }}
            >
              Categories
            </NavLink>
          </div>
        )}
      </div>
      <SideBtn handleTabs={handleTabs} btnText="Orders" icon={orders} />
      <SideBtn handleTabs={handleTabs} btnText="Employees" icon={employee} />
      <div>
        <NavLink to="/farmers" activeClassName="">
          <div
            onClick={() => toggleDropdown("Farmers")}
            className="flex items-center justify-between w-full py-[10px] pl-6 pr-[22px] duration-300 cursor-pointer rounded-md hover:bg-[#2A5105] text-white"
          >
            <div className="flex items-center gap-4">
              <img src={productIcon} alt="icons" />
              <span className="font-poppins text-sm text-white leading-6">
                Farmers
              </span>
              <img
                className={isDropdownOpen === "Farmers" ? "rotate-180" : ""}
                src={arrow}
                alt="arrow"
              />
            </div>
            <CommonSquareIcon />
          </div>
        </NavLink>
        {isDropdownOpen === "Farmers" && (
          <div className="mt-2">
            <NavLink
              activeClassNam=""
              to="/farmers/crops-added"
              className="block px-4 py-2 subLink text-sm text-white font-poppins opacity-50 font-normal pl-16 leading-6"
              onClick={() => {
                handleTabs("Crops Added");
              }}
            >
              Crops Added
            </NavLink>
          </div>
        )}
      </div>
      <SideBtn handleTabs={handleTabs} btnText="Vendors" icon={vendor} />
      <SideBtn handleTabs={handleTabs} btnText="Nurseries" icon={nursuries} />
      <div>
        <NavLink to="/users" activeClassName="">
          <div
            onClick={() => toggleDropdown("Users")}
            className="flex items-center justify-between w-full py-[10px] pl-6 pr-[22px] duration-300 cursor-pointer rounded-md hover:bg-[#2A5105] text-white"
          >
            <div className="flex items-center gap-4">
              <img src={productIcon} alt="icons" />
              <span className="font-poppins text-sm text-white leading-6">
                Users
              </span>
              <img
                className={isDropdownOpen === "Users" ? "rotate-180" : ""}
                src={arrow}
                alt="arrow"
              />
            </div>
            <CommonSquareIcon />
          </div>
        </NavLink>
        {isDropdownOpen === "Users" && (
          <div className="mt-2">
            <NavLink
              activeClassNam=""
              to="/users/user-requests"
              className="block px-4 py-2 subLink text-sm text-white font-poppins opacity-50 font-normal pl-16 leading-6"
              onClick={() => {
                handleTabs("User Request");
              }}
            >
              User Requests
            </NavLink>
          </div>
        )}
      </div>
      <SideBtn handleTabs={handleTabs} btnText="Offers" icon={offers} />
    </div>
  );
};

export default SideBar;
