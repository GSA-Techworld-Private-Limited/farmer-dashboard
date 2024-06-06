import React from "react";
import closeIcon from "../../assets/images/svg/close.svg";
import dummyImage from "../../assets/images/png/image-skeletion.png";
const AddCategory = (props) => {
  return (
    <div>
      <div className="flex items-center duration-100 justify-center fixed inset-0">
        <div
          onClick={() => props.setCategory(false)}
          className="fixed inset-0 backdrop-blur-sm bg-[#3F7E00] bg-opacity-15"
        ></div>
        <div className="w-full max-w-[598px] mx-auto pb-[42px] relative z-10 px-[53px] pt-[18px] bg-white rounded-3xl">
          <button
            onClick={() => props.setCategory(false)}
            className="rounded-full absolute top-6 right-9"
          >
            <img src={closeIcon} alt="close icon" />
          </button>
          <p className="text-[#3F7E00] text-2xl font-semibold font-poppins text-center leading-9">
            Add Category
          </p>
          <div className="pt-10 mb-6">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Category-name"
                className="text-sm text-[#323332] font-poppins leading-5 mb-2"
              >
                Category Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Category-name"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
          <div className="mb-10">
            <div className="inline-block">
              <p className="text-sm font-poppins leading-5 text-[#323332]">
                Upload Pic <span className="text-[#FD5353]">*</span>
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
          </div>
          <button className="py-[18px] px-16 leading-6 text-sm text-white font-poppins rounded-[8px] bg-[#3F7E00]">
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
