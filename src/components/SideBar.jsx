import React from "react";
import SideBtn from "./common/SideBtn";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const handleTabs = (path) => {
    console.log(path);
    if (path) {
      navigate(path.toLowerCase());
    }
  };
  return (
    <div className="flex flex-col w-[275px] bg-hero gap-6 py-[30px] pl-5 pr-4 h-[calc(100vh-73px)] overflow-auto custom_scroll">
      <SideBtn
        handleTabs={handleTabs}
        btnText="Dashboard"
        icon={<HomeIcon sx={{ fontSize: "26px" }} className="text-white" />}
      />
      <SideBtn
        handleTabs={handleTabs}
        btnText="Ab"
        icon={<HomeIcon sx={{ fontSize: "26px" }} className="text-white" />}
      />
      <SideBtn
        handleTabs={handleTabs}
        btnText="Dashboard"
        icon={<HomeIcon sx={{ fontSize: "26px" }} className="text-white" />}
      />
      <SideBtn
        handleTabs={handleTabs}
        btnText="Dashboard"
        icon={<HomeIcon sx={{ fontSize: "26px" }} className="text-white" />}
      />
      <SideBtn
        handleTabs={handleTabs}
        btnText="Dashboard"
        icon={<HomeIcon sx={{ fontSize: "26px" }} className="text-white" />}
      />
      <SideBtn
        handleTabs={handleTabs}
        btnText="Dashboard"
        icon={<HomeIcon sx={{ fontSize: "26px" }} className="text-white" />}
      />
      <SideBtn
        handleTabs={handleTabs}
        btnText="Dashboard"
        icon={<HomeIcon sx={{ fontSize: "26px" }} className="text-white" />}
      />
      <SideBtn
        handleTabs={handleTabs}
        btnText="Dashboard"
        icon={<HomeIcon sx={{ fontSize: "26px" }} className="text-white" />}
      />
    </div>
  );
};

export default SideBar;
