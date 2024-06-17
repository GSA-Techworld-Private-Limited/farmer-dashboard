import React, { useContext, useState } from "react";
import closeIcon from "../../assets/images/svg/close.svg";
import { baseUrl, fetchCouponData, token } from "../api/auth";
import MyContext from "../context/ContextStore";
import axios from "axios";
import { toast } from "react-toastify";
const CouponOverlay = (props) => {
  const { setCouponData } = useContext(MyContext);
  const [addCoupon, setAddCoupon] = useState({
    coupon_code: "",
    name: "",
    discount: "", // This is a string, as it's a CharField in the model
    amount: "", // Decimal field as a string
    starts_at: "",
    expiry_at: "",
    description: "",
    is_active: true,
  });
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "starts_at" || name === "expiry_at") {
      const selectedDate = new Date(value);
      const currentDate = new Date();

      if (selectedDate < currentDate) {
        setAddCoupon({
          ...addCoupon,
          [name]: tomorrow.toISOString().split("T")[0],
        });
      } else {
        setAddCoupon({ ...addCoupon, [name]: value });
      }
    } else {
      setAddCoupon({ ...addCoupon, [name]: value });
    }
  };
  const submitCoupon = async (e) => {
    e.preventDefault();
    const {
      coupon_code,
      name,
      discount,
      amount,
      starts_at,
      expiry_at,
      description,
    } = addCoupon;
    if (
      coupon_code &&
      name &&
      discount &&
      amount &&
      starts_at &&
      expiry_at &&
      description
    ) {
      try {
        const res = await axios.post(
          `${baseUrl}superadmin/add-coupons-dashboard/`,
          addCoupon,
          {
            Authorization: `token ${token}`,
          }
        );
        fetchCouponData(setCouponData);
        console.log(res);
        toast.success("Coupon Added Successfully", {
          theme: "light",
        });
        setAddCoupon({
          coupon_code: "",
          name: "",
          discount: "", // This is a string, as it's a CharField in the model
          amount: "", // Decimal field as a string
          starts_at: "",
          expiry_at: "",
          description: "",
          is_active: true,
        });
      } catch (error) {
        console.log(error);
        toast.error(error.message, {
          theme: "light",
        });
      }
    } else {
      toast.warning("Add required details", {
        theme: "light",
      });
    }
  };
  return (
    <div>
      <div className="flex items-center duration-100 justify-center fixed inset-0">
        <div
          onClick={() => props.setCoupon(false)}
          className="fixed inset-0 backdrop-blur-sm bg-[#3F7E00] bg-opacity-15"
        ></div>
        <div className="w-full max-w-[598px] mx-auto pb-[42px] relative z-10 px-[53px] pt-[18px] bg-white rounded-3xl">
          <button
            onClick={() => props.setCoupon(false)}
            className="rounded-full absolute top-6 right-9"
          >
            <img src={closeIcon} alt="close icon" />
          </button>
          <p className="text-[#3F7E00] text-2xl font-semibold font-poppins text-center leading-9">
            Add Coupon
          </p>
          <div className="pt-10 mb-6">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Coupon-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Coupon Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                value={addCoupon.name}
                onChange={handleInput}
                name="name"
                type="text"
                id="Coupon-name"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Coupon-id"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Coupon ID<span className="text-[#FD5353]">*</span>
              </label>
              <input
                value={addCoupon.coupon_code}
                onChange={handleInput}
                name="coupon_code"
                type="text"
                id="Coupon-id"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex gap-6 mb-2">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="Coupon-dis"
                  className="text-sm text-[#525153] font-poppins leading-5 mb-2"
                >
                  Discount Percentage<span className="text-[#FD5353]">*</span>
                </label>
                <input
                  value={addCoupon.discount}
                  onChange={handleInput}
                  name="discount"
                  type="number"
                  min={1}
                  max={100}
                  maxLength={3}
                  id="Coupon-dis"
                  placeholder="00%"
                  onInput={(e) => {
                    const value = parseInt(e.target.value, 10);
                    if (value < 1) e.target.value = 1;
                    if (value > 100) e.target.value = 100;
                  }}
                  className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="Coupon-amount"
                  className="text-sm text-[#525153] font-poppins leading-5 mb-2"
                >
                  Max Amount<span className="text-[#FD5353]">*</span>
                </label>
                <input
                  value={addCoupon.amount}
                  onChange={handleInput}
                  name="amount"
                  type="number"
                  id="Coupon-amount"
                  placeholder="James"
                  className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                />
              </div>
            </div>
            <div className="flex gap-6 mb-6">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="Coupon-from-date"
                  className="text-sm text-[#525153] font-poppins leading-5 mb-2"
                >
                  From Date<span className="text-[#FD5353]">*</span>
                </label>
                <input
                  value={addCoupon.starts_at}
                  onChange={handleInput}
                  name="starts_at"
                  type="date"
                  id="Coupon-from-date"
                  placeholder="00%"
                  className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="Coupon-to-date"
                  className="text-sm text-[#525153] font-poppins leading-5 mb-2"
                >
                  To Date<span className="text-[#FD5353]">*</span>
                </label>
                <input
                  value={addCoupon.expiry_at}
                  onChange={handleInput}
                  name="expiry_at"
                  type="date"
                  id="Coupon-to-date"
                  placeholder="James"
                  className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Coupon-des"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Description<span className="text-[#FD5353]">*</span>
              </label>
              <textarea
                value={addCoupon.description}
                onChange={handleInput}
                name="description"
                type="date"
                id="Coupon-des"
                placeholder="Write here..."
                className="py-[13px] h-[166px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              ></textarea>
            </div>
          </div>
          <button
            onClick={submitCoupon}
            className="py-[18px] px-16 leading-6 text-sm text-white font-poppins rounded-[8px] bg-[#3F7E00]"
          >
            Add Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponOverlay;
