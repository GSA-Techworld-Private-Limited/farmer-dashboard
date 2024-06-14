import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import { baseUrl, fetchCouponData, token } from "../api/auth";
import axios from "axios";
const OfferDetails = () => {
  const { setTitle, setCouponData } = useContext(MyContext);
  const { offer_id } = useParams();
  const [couponDetails, setCouponDetails] = useState();
  useEffect(() => {
    if (offer_id) {
      const fetchCoupon = async () => {
        try {
          const res = await axios.get(
            `${baseUrl}superadmin/get-coupons-dashboard/${offer_id}/`,
            {
              Authorization: `token ${token}`,
            }
          );
          setCouponDetails(res.data);
          fetchCouponData(setCouponData);
        } catch (error) {
          console.log(error);
        }
      };
      fetchCoupon();
    }
    console.log("id", offer_id);
  }, [offer_id]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCouponDetails({ ...couponDetails, [name]: value });
  };
  console.log(couponDetails);
  const editCoupon = async () => {
    try {
      const { coupon_code, ...couponDetailsWithoutCode } = couponDetails;
      const res = await axios.patch(
        `${baseUrl}superadmin/get-coupons-dashboard/${offer_id}/`,
        couponDetailsWithoutCode,
        {
          Authorization: `token ${token}`,
        }
      );
      console.log(res);
      fetchCouponData(setCouponData);
      alert("edited");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
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
        <CommonBtn
          clickEvent={editCoupon}
          btntext="Edit & Renew"
          style="bg-[#FF7D24]"
        />
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
                value={couponDetails && couponDetails.name}
                name="name"
                onChange={handleInput}
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
                value={couponDetails && couponDetails.starts_at}
                name="starts_at"
                onChange={handleInput}
                id="Coupon-start-date"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#714d96] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
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
                value={couponDetails && couponDetails.description}
                name="description"
                onChange={handleInput}
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
                value={couponDetails && couponDetails.coupon_code}
                name="coupon_code"
                onChange={handleInput}
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
                value={couponDetails && couponDetails.expiry_at}
                name="expiry_at"
                onChange={handleInput}
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
