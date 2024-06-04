import React from "react";

const CommonBtn = (props) => {
  return (
    <button
      onClick={props.clickEvent}
      className={`py-3 px-6 min-w-[112px] text-white text-base leading-6 font-medium font-poppins text-center rounded-[8px] ${props.style}`}
    >
      {props.btntext}
    </button>
  );
};

export default CommonBtn;
