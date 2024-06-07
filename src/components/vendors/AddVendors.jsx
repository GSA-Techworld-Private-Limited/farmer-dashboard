import { ArrowBack } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import dummyImage from "../../assets/images/png/image-skeletion.png";
const AddVendors = () => {
  const { setTitle } = useContext(MyContext);
  return (
    <div className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex mb-4 justify-between">
        <Link to="/vendors">
          <button
            onClick={() => setTitle("Vendors")}
            className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
          >
            <ArrowBack />
            <span>Back</span>
          </button>
        </Link>
        <CommonBtn btntext="+ Add Vendor" style="bg-[#FF7D24]" />
      </div>
      <form className="w-full overflow-auto">
        <div className="flex gap-[70px]">
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Vendor-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Vendor Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Vendor-name"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Vendor-no"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Contact Number 1<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="Vendor-no"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Vendor-city"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                City<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Vendor-city"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Vendor-zip"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Zip Code<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="Vendor-zip"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Vendor-no-two"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Contact Number 2<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="Vendor-no-two"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Vendor-state"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                State<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Vendor-state"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
        </div>
        <div className="inline-block">
          <p className="text-sm font-poppins leading-5 text-[#4D44B5]">
            Upload Profile Pic <span className="text-[#FD5353]">*</span>
          </p>
          <div className="border border-[#E3E3E3] rounded-lg px-4 py-2.5 mt-3">
            <img
              className="mb-7 w-16 h-16 object-cover"
              src={dummyImage}
              alt="dummyImage"
            />
            <div className="flex items-center gap-2.5">
              <button className="leading-5 w-[108px] text-center text-xs text-white font-poppins font-medium py-2.5 px-2 rounded-[8px] bg-[#787878]">
                Choose File
              </button>
              <button className="leading-5 w-[108px] text-center text-xs bg-[#FFEAEA] font-poppins font-medium py-2.5 px-2 rounded-[8px] text-[#FD5353]">
                Remove
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVendors;
