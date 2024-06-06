import { ArrowBack } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import dummyImage from "../../assets/images/png/image-skeletion.png";
const OfferDetails = () => {
  const { setTitle } = useContext(MyContext);
  return (
    <div className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex mb-4 justify-between">
        <Link to="/offers">
          <button
            onClick={() => setTitle("Offers")}
            className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
          >
            <ArrowBack />
            <span>Back</span>
          </button>
        </Link>
        <CommonBtn btntext="Edit & Renew" style="bg-[#FF7D24]" />
      </div>
      <form className="w-full overflow-auto">
        <div className="flex gap-[70px]">
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Coupon-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Coupon Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Coupon-name"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Coupon-start-date"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                From Date<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="date"
                id="Coupon-start-date"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Coupon-des"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Description<span className="text-[#FD5353]">*</span>
              </label>
              <textarea
                type="date"
                id="Coupon-des"
                placeholder="Write here..."
                className="py-[13px] h-[166px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              ></textarea>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Coupon-id"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Coupon ID<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Coupon-id"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Coupon-to-date"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                To Date<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="date"
                id="Coupon-to-date"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OfferDetails;
