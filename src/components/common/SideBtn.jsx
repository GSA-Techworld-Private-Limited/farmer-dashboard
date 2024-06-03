import React from "react";
import { CommonSquareIcon } from "./Icons";
import { Link } from "react-router-dom";

const SideBtn = (props) => {
  return (
    <>
      <div
        onClick={() => props.handleTabs(props.btnText)}
        className="flex rounded-md items-center justify-between cursor-pointer w-full py-[10px] pl-6 pr-[22px] duration-300 hover:bg-[#2A5105]"
      >
        <div className="flex items-center gap-4">
          {props.icon}
          <span className="font-poppins text-sm text-white leading-6">
            {props.btnText}
          </span>
        </div>
        <CommonSquareIcon />
      </div>
    </>
  );
};

export default SideBtn;
