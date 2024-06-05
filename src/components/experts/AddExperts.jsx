import { ArrowBack } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";

const AddExperts = () => {
  const { setTitle } = useContext(MyContext);
  return (
    <div className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex mb-4 justify-between">
        <Link to="/experts">
          <button
            onClick={() => setTitle("Experts")}
            className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
          >
            <ArrowBack />
            <span>Back</span>
          </button>
        </Link>
        <CommonBtn btntext="+ Add Experts" style="bg-[#FF7D24]" />
      </div>
      <form className="w-full overflow-auto">
        <div className="flex gap-[70px]">
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Expert Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="expert-name"
                placeholder="James"
                className="py-[13px] focus:border-[525153] outline-none duration-200 hover:border-[#525153] text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-no"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Contact Number<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="expert-no"
                placeholder="+123456789"
                className="py-[13px] focus:border-[525153] outline-none duration-200 hover:border-[#525153] text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-email"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Email ID<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="email"
                id="expert-email"
                placeholder="James@gmail.com"
                className="py-[13px] focus:border-[525153] outline-none duration-200 hover:border-[#525153] text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-state"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                State<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="expert-state"
                placeholder="+123456789"
                className="py-[13px] focus:border-[525153] outline-none duration-200 hover:border-[#525153] text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-date"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Date of Joining<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="date"
                id="expert-date"
                placeholder="James"
                className="py-[13px] focus:border-[525153] outline-none duration-200 hover:border-[#525153] text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-no-two"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Contact Number 2<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="expert-no-two"
                placeholder="+123456789"
                className="py-[13px] focus:border-[525153] outline-none duration-200 hover:border-[#525153] text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-city"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                City<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="expert-city"
                placeholder="+123456789"
                className="py-[13px] focus:border-[525153] outline-none duration-200 hover:border-[#525153] text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-zip"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Zip Code<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="expert-zip"
                placeholder="+123456789"
                className="py-[13px] focus:border-[525153] outline-none duration-200 hover:border-[#525153] text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-[70px] pt-10">
          <div className="w-full">
            <p className="text-base text-black font-poppins font-semibold leading-6 mb-5">
              Login Credentials
            </p>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-username"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Username<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="expert-username"
                placeholder="James"
                className="py-[13px] focus:border-[525153] outline-none duration-200 hover:border-[#525153] text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-password"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Password<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="password"
                id="expert-password"
                placeholder="+123456789"
                className="py-[13px] focus:border-[525153] outline-none duration-200 hover:border-[#525153] text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExperts;
