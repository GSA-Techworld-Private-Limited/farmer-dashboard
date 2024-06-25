import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/images/svg/close.svg";
import dummyImage from "../../assets/images/png/image-skeletion.png";
import { baseUrl, fetchBannerData } from "../api/auth";
import { toast } from "react-toastify";
import MyContext from "../context/ContextStore";

const BannerOverlay = (props) => {
  const {setBannerData}=useContext(MyContext)
  const inputFileRef=useRef()
  const [formData, setFormData] = useState({
    bannerName: "",
    fromDate: "",
    toDate: "",
    profilePic: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      profilePic: event.target.files[0],
    });
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("banner_name", formData.bannerName);
    data.append("from_date", formData.fromDate);
    data.append("to_date", formData.toDate);
    if (formData.profilePic) {
      data.append("image", formData.profilePic);
    }
    const { bannerName, fromDate, toDate, profilePic } = formData;
    if (bannerName && fromDate && toDate && profilePic) {
      try {
        const response = await axios.post(
          `${baseUrl}superadmin/banners/`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Success:", response.data);
        fetchBannerData(setBannerData)
        toast.success("Banner Added Successfully", {
          theme: "light",
        });
        setFormData({
          bannerName: "",
          fromDate: "",
          toDate: "",
          profilePic: null,
        })
        inputFileRef.current.value=""
      } catch (error) {
        console.error("Error:", error);
        toast.error(error.message, {
          theme: "light",
        });
      }
    } else {
      toast.warning("Fill Reqired Fields", {
        theme: "light",
      });
    }
  };

  return (
    <div>
      <div className="flex items-center duration-100 justify-center fixed inset-0">
        <div
          onClick={() => props.setBanner(false)}
          className="fixed inset-0 backdrop-blur-sm bg-[#3F7E00] bg-opacity-15"
        ></div>
        <div className="w-full max-w-[598px] mx-auto pb-[42px] relative z-10 px-[53px] pt-[18px] bg-white rounded-3xl">
          <button
            onClick={() => props.setBanner(false)}
            className="rounded-full absolute top-6 right-9"
          >
            <img src={closeIcon} alt="close icon" />
          </button>
          <p className="text-[#3F7E00] text-2xl font-semibold font-poppins text-center leading-9">
            Add Banner
          </p>
          <div className="pt-10 mb-6">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="bannerName"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Banner Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="bannerName"
                name="bannerName"
                value={formData.bannerName}
                onChange={handleInputChange}
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex gap-6 mb-6">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="fromDate"
                  className="text-sm text-[#525153] font-poppins leading-5 mb-2"
                >
                  From Date<span className="text-[#FD5353]">*</span>
                </label>
                <input
                  type="date"
                  id="fromDate"
                  name="fromDate"
                  value={formData.fromDate}
                  onChange={handleInputChange}
                  className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="toDate"
                  className="text-sm text-[#525153] font-poppins leading-5 mb-2"
                >
                  To Date<span className="text-[#FD5353]">*</span>
                </label>
                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                  value={formData.toDate}
                  onChange={handleInputChange}
                  className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                />
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="inline-block">
              <p className="text-sm font-poppins leading-5 text-[#4D44B5]">
                Upload Profile Pic <span className="text-[#FD5353]">*</span>
              </p>
              <div className="border border-[#E3E3E3] rounded-lg px-4 py-2.5 mt-3">
                <img
                  className="mb-7 w-16 h-16 object-cover"
                  src={
                    formData.profilePic
                      ? URL.createObjectURL(formData.profilePic)
                      : dummyImage
                  }
                  alt="dummyImage"
                />
                <div className="flex items-center gap-2.5">
                  <input
                    type="file"
                    ref={inputFileRef}
                    onChange={handleFileChange}
                    className="hidden"
                    id="profilePic"
                  />
                  <label
                    htmlFor="profilePic"
                    className="leading-5 w-[108px] text-center text-xs text-white font-poppins font-medium py-2.5 px-2 rounded-[8px] bg-[#787878] cursor-pointer"
                  >
                    Choose File
                  </label>
                  <button
                    onClick={() =>
                      setFormData({ ...formData, profilePic: null })
                    }
                    className="leading-5 w-[108px] text-center text-xs bg-[#FFEAEA] font-poppins font-medium py-2.5 px-2 rounded-[8px] text-[#FD5353]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="py-[18px] px-16 leading-6 text-sm text-white font-poppins rounded-[8px] bg-[#3F7E00]"
          >
            Add Banner
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerOverlay;
