import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import dummyImage from "../../assets/images/png/image-skeletion.png";
import { baseUrl, fetchFarmers, token } from "../api/auth";
import axios from "axios";
import { toast } from "react-toastify";
const AddFarmer = () => {
  const fileInputRef = useRef();
  const { setTitle, setFarmers } = useContext(MyContext);
  const [farmerData, setFarmerData] = useState({
    full_name: "",
    mobile_number: "",
    whatsapp_number: "",
    state: "",
    city: "",
    zipcode: "",
    photo: null,
  });
  const handleInput = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setFarmerData({
        ...farmerData,
        [name]: files[0],
      });
    } else {
      setFarmerData({ ...farmerData, [name]: value });
    }
  };
  const handleRemoveImage = () => {
    setFarmerData({ ...farmerData, photo: null });
    fileInputRef.current.value = null;
  };
  const addFarmer = async () => {
    const formData = new FormData();
    // Append text data
    Object.keys(farmerData).forEach((key) => {
      if (key !== "photo") {
        formData.append(key, farmerData[key]);
      }
    });
    // Append the photo file
    if (farmerData.photo) {
      formData.append("photo", farmerData.photo);
    }
    const {
      full_name,
      mobile_number,
      whatsapp_number,
      state,
      city,
      zipcode,
      photo,
    } = farmerData;
    if (
      full_name &&
      mobile_number &&
      whatsapp_number &&
      state &&
      city &&
      zipcode &&
      photo
    ) {
      try {
        const res = await axios.post(
          `${baseUrl}superadmin/add-farmer-dashboard/`,
          formData,
          {
            Authorization: `token ${token}`,
          }
        );
        fetchFarmers(setFarmers);
        console.log(res);
        setFarmerData({
          full_name: "",
          mobile_number: "",
          whatsapp_number: "",
          state: "",
          city: "",
          zipcode: "",
          photo: null,
        });
        toast.success("Farmer Added Successfully!", {
          theme: "light",
        });
      } catch (error) {
        console.log(error);
        toast.error(error.message, {
          theme: "light",
        });
      }
    } else {
      toast.warning("Fill required field", {
        theme: "light",
      });
    }
  };
  return (
    <div className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex mb-4 justify-between">
        <Link to="/farmers">
          <button
            onClick={() => setTitle("Farmers")}
            className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
          >
            <ArrowBack />
            <span>Back</span>
          </button>
        </Link>
        <CommonBtn
          clickEvent={addFarmer}
          btntext="+ Add Farmer"
          style="bg-[#FF7D24]"
        />
      </div>
      <div className="w-full overflow-auto">
        <div className="flex gap-[70px]">
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Farmer-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Farmer Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                value={farmerData.full_name}
                name="full_name"
                onChange={handleInput}
                id="Farmer-name"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Farmer-no"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Contact Number 1<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="Farmer-no"
                value={farmerData.mobile_number}
                name="mobile_number"
                onChange={handleInput}
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Farmer-city"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                City<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                value={farmerData.city}
                name="city"
                onChange={handleInput}
                id="Farmer-city"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Farmer-zip"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Zip Code<span className="text-[#FD5353]">*</span>
              </label>
              <input
                value={farmerData.zipcode}
                name="zipcode"
                onChange={handleInput}
                type="number"
                id="Farmer-zip"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Farmer-email"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Email<span className="text-[#FD5353]">*</span>
              </label>
              <input
                value={farmerData.email}
                name="email"
                onChange={handleInput}
                type="email"
                id="Farmer-email"
                placeholder="abc@gmail.com"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Farmer-no-two"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Whatsapp Number<span className="text-[#FD5353]">*</span>
              </label>
              <input
                value={farmerData.whatsapp_number}
                name="whatsapp_number"
                onChange={handleInput}
                type="number"
                id="Farmer-no-two"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Farmer-state"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                State<span className="text-[#FD5353]">*</span>
              </label>
              <input
                value={farmerData.state}
                name="state"
                onChange={handleInput}
                type="text"
                id="Farmer-state"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
        </div>
        <div className="inline-block">
          <p className="text-sm font-poppins leading-5 text-[#323332]">
            Upload Pic <span className="text-[#FD5353]">*</span>
          </p>
          <div className="border border-[#E3E3E3] rounded-lg px-4 py-2.5 mt-3">
            <img
              className="mb-7 rounded w-16 h-16 object-cover"
              src={
                farmerData.photo
                  ? URL.createObjectURL(farmerData.photo)
                  : dummyImage
              }
              alt="dummyImage"
            />
            <div className="flex items-center gap-2.5">
              <div className="relative overflow-hidden">
                <input
                  type="file"
                  id="cate-id"
                  name="photo"
                  required
                  ref={fileInputRef}
                  onChange={handleInput}
                  className="leading-5 absolute opacity-0 inset-0 pointer-events-none w-[108px] text-center text-xs text-white font-poppins font-medium py-2.5 px-2 rounded-[8px] bg-[#787878]"
                />
                <label
                  htmlFor="cate-id"
                  className="leading-5 w-[108px] inline-block cursor-pointer text-center text-xs text-white font-poppins font-medium py-2.5 px-2 rounded-[8px] bg-[#787878]"
                >
                  Choose File
                </label>
              </div>
              <button
                onClick={handleRemoveImage}
                className="leading-5 w-[108px] text-center text-xs bg-[#FFEAEA] font-poppins font-medium py-2.5 px-2 rounded-[8px] text-[#FD5353]"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFarmer;
