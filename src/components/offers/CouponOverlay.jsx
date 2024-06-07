import React from "react";
import closeIcon from "../../assets/images/svg/close.svg";
const CouponOverlay = (props) => {
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
                type="date"
                id="Coupon-des"
                placeholder="Write here..."
                className="py-[13px] h-[166px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              ></textarea>
            </div>
          </div>
          <button className="py-[18px] px-16 leading-6 text-sm text-white font-poppins rounded-[8px] bg-[#3F7E00]">
            Add Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponOverlay;
