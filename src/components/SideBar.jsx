import React, { useContext } from "react";
import SideBtn from "./common/SideBtn";
import { useNavigate } from "react-router-dom";
import MyContext from "./context/ContextStore";
import home from "../assets/images/svg/home.svg";
import expert from "../assets/images/svg/expert.svg";
import orders from "../assets/images/svg/orders.svg";
import employee from "../assets/images/svg/employee.svg";
import vendor from "../assets/images/svg/vendor.svg";
import nursuries from "../assets/images/svg/nursuries.svg";
import offers from "../assets/images/svg/offers.svg";
const SideBar = () => {
  const { setTitle } = useContext(MyContext);
  const navigate = useNavigate();
  const handleTabs = (path) => {
    console.log(path);
    if (path) {
      navigate(path.toLowerCase());
      setTitle(path);
    }
  };
  return (
    <div className="flex flex-col w-[275px] bg-hero gap-6 py-[30px] pl-5 pr-4 h-[calc(100vh-76px)] overflow-auto custom_scroll">
      <SideBtn handleTabs={handleTabs} btnText="Dashboard" icon={home} />
      <SideBtn handleTabs={handleTabs} btnText="Experts" icon={expert} />
      <SideBtn handleTabs={handleTabs} btnText="Orders" icon={orders} />
      <SideBtn handleTabs={handleTabs} btnText="Employees" icon={employee} />
      <SideBtn handleTabs={handleTabs} btnText="Vendors" icon={vendor} />
      <SideBtn handleTabs={handleTabs} btnText="Nurseries" icon={nursuries} />
      <SideBtn handleTabs={handleTabs} btnText="Offers" icon={offers} />
    </div>
  );
};

export default SideBar;
