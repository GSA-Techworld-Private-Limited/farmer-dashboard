import { ArrowBack } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../context/ContextStore";
import demoCrop from "../../assets/images/png/demo-crop.png";
const RequestDetails = () => {
  const { setTitle } = useContext(MyContext);
  return (
    <div className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex mb-10 justify-between">
        <Link to="/users/user-requests">
          <button
            onClick={() => setTitle("User Requests")}
            className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
          >
            <ArrowBack />
            <span>Back</span>
          </button>
        </Link>
      </div>
      <div className="w-full overflow-auto">
        <div className="flex gap-[70px] pb-9 border-b border-opacity-50 border-[#787878]">
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="user-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                User Name<span className="text-[#FD5353]">*</span>
              </label>
              <p className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]">
                lorem
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p className="text-sm text-[#525153] font-poppins leading-5 mb-2">
                Plant Name<span className="text-[#FD5353]">*</span>
              </p>
              <p className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]">
                abc
              </p>
            </div>
            <div className="flex flex-col mb-2">
              <p className="text-sm text-[#525153] font-poppins leading-5 mb-2">
                Description<span className="text-[#FD5353]">*</span>
              </p>
              <div className="py-[13px] h-[170px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                  dignissimos quod itaque quisquam neque culpa sed alias. Nulla
                  corrupti fuga, saepe laboriosam ipsum minus qui corporis,
                  omnis facere maiores eum!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm font-poppins mb-6 text-[#525153] leading-5">
              Pictures :
            </p>
            <div className="grid grid-cols-2 gap-7">
              <img className="w-full" src={demoCrop} alt="demoCrop" />
              <img className="w-full" src={demoCrop} alt="demoCrop" />
              <img className="w-full" src={demoCrop} alt="demoCrop" />
            </div>
          </div>
        </div>
        <div className="flex gap-[70px] mt-6">
          <div className="flex w-full flex-col mb-2">
            <p className="text-sm text-[#525153] font-poppins leading-5 mb-2">
              Expert Reply
            </p>
            <div className="py-[13px] h-[170px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                dignissimos quod itaque quisquam neque culpa sed alias. Nulla
                corrupti fuga, saepe laboriosam ipsum minus qui corporis, omnis
                facere maiores eum!
              </p>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
