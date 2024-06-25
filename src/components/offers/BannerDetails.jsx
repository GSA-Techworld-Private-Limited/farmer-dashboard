import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MyContext from "../context/ContextStore";
import { baseUrl, fetchBannerData, token } from "../api/auth";
import axios from "axios";
const BannerDetails = () => {
  const { setTitle,setBannerData } = useContext(MyContext);
  const { banner_id } = useParams();
  const [bannerDetails, setBannerDetails] = useState();
  useEffect(() => {
    if (banner_id) {
      const fetchCoupon = async () => {
        try {
          const res = await axios.get(
            `${baseUrl}superadmin/banners/${banner_id}/`,
            {
              Authorization: `token ${token}`,
            }
          );
          setBannerDetails(res.data);
          fetchBannerData(setBannerData);
        } catch (error) {
          console.log(error);
        }
      };
      fetchCoupon();
    }
    console.log("id", banner_id);
  }, [banner_id]);
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
                value={bannerDetails && bannerDetails.banner_name}
                name="name"
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
                type="text"
                value={bannerDetails && bannerDetails.from_date}
                name="starts_at"
                id="Coupon-start-date"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#714d96] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Coupon-id"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Coupon ID<span className="text-[#FD5353]">*</span>{" "}
               
              </label>
              <input
                type="text"
                value={bannerDetails && bannerDetails.bannerID}
                name="coupon_code"
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
                type="text"
                value={bannerDetails && bannerDetails.to_date}
                name="expiry_at"
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

export default BannerDetails;
