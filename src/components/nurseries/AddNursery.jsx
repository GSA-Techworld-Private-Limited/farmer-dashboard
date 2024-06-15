import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import dummyImage from "../../assets/images/png/image-skeletion.png";
import axios from "axios";
import { baseUrl, fetchNurseries } from "../api/auth";
import { toast } from "react-toastify";
const AddNursery = () => {
  const { setTitle, setNurseries } = useContext(MyContext);
  const fileInputRef = useRef(null);
  const [nurseryData, setNurseryData] = useState({
    name: "",
    contact_no: "",
    other_conact_no: "",
    image: null, // this is a file and it should be as file
    state: "",
    city: "",
    pincode: "",
    email: "",
    description: "",
    address_line1: "",
    address_line2: "",
  });
  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNurseryData({
        ...nurseryData,
        [name]: files[0],
      });
    } else {
      setNurseryData({
        ...nurseryData,
        [name]: value,
      });
    }
  };
  console.log(nurseryData);
  const addNursery = async () => {
    const token = sessionStorage.getItem("token");
    const formData = new FormData();
    Object.keys(nurseryData).forEach((key) => {
      formData.append(key, nurseryData[key]);
    });
    const {
      name,
      contact_no,
      other_conact_no,
      image,
      state,
      city,
      pincode,
      email,
      description,
      address_line1,
      address_line2,
    } = nurseryData;
    if (
      name &&
      contact_no &&
      other_conact_no &&
      image &&
      state &&
      city &&
      pincode &&
      email &&
      description &&
      address_line1 &&
      address_line2
    ) {
      try {
        const res = await axios.post(
          `${baseUrl}superadmin/add-nursery-dashboard/`,
          formData,
          {
            Authorization: `token ${token}`,
          }
        );
        console.log(res);
        alert("Nursery added");
        fetchNurseries(setNurseries);
        setNurseryData({
          name: "",
          contact_no: "",
          other_conact_no: "",
          image: null,
          state: "",
          city: "",
          pincode: "",
          email: "",
          description: "",
          address_line1: "",
          address_line2: "",
        });
        fileInputRef.current.value = null;
        toast.success("Nursery Added Successfully", {
          theme: "light",
        });
      } catch (error) {
        console.log(error);
        toast.error(error, {
          theme: "light",
        });
      }
    } else {
      toast.warning("Enter required field", {
        theme: "light",
      });
    }
  };
  const handleRemoveImage = () => {
    setNurseryData({ ...nurseryData, image: null });
    fileInputRef.current.value = null;
  };
  return (
    <div className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex mb-4 justify-between">
        <Link to="/nurseries">
          <button
            onClick={() => setTitle("Nurseries")}
            className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
          >
            <ArrowBack />
            <span>Back</span>
          </button>
        </Link>
        <CommonBtn
          clickEvent={addNursery}
          btntext="+ Add Nursery"
          style="bg-[#FF7D24]"
        />
      </div>
      <div className="w-full overflow-auto">
        <div className="flex gap-[70px]">
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Nursery-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Nursery Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Nursery-name"
                name="name"
                onChange={handleInput}
                value={nurseryData.name}
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Nursery-no"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Contact Number 1<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="Nursery-no"
                name="contact_no"
                onChange={handleInput}
                value={nurseryData.contact_no}
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Nursery-city"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                City<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Nursery-city"
                name="city"
                onChange={handleInput}
                value={nurseryData.city}
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Nursery-zip"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Zip Code<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="Nursery-zip"
                name="pincode"
                onChange={handleInput}
                value={nurseryData.pincode}
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="descritption"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Description<span className="text-[#FD5353]">*</span>
              </label>
              <textarea
                id="descritption"
                name="description"
                onChange={handleInput}
                value={nurseryData.description}
                className="py-[13px] h-[170px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              ></textarea>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Nursery-no-two"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Contact Number 2<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="Nursery-no-two"
                name="other_conact_no"
                onChange={handleInput}
                value={nurseryData.other_conact_no}
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Nursery-state"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                State<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Nursery-state"
                name="state"
                onChange={handleInput}
                value={nurseryData.state}
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Nursery-email"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Email<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="email"
                id="Nursery-email"
                name="email"
                onChange={handleInput}
                value={nurseryData.email}
                placeholder="email"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Nursery-address-1"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Address 1<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Nursery-address-1"
                name="address_line1"
                onChange={handleInput}
                value={nurseryData.address_line1}
                placeholder="address"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Nursery-address-2"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Address 2<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Nursery-address-2"
                name="address_line2"
                onChange={handleInput}
                value={nurseryData.address_line2}
                placeholder="address"
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
                nurseryData.image
                  ? URL.createObjectURL(nurseryData.image)
                  : dummyImage
              }
              alt="dummyImage"
            />
            <div className="flex items-center gap-2.5">
              <div className="relative overflow-hidden">
                <input
                  type="file"
                  id="Nursery-img"
                  name="image"
                  required
                  ref={fileInputRef}
                  onChange={handleInput}
                  className="leading-5 absolute opacity-0 inset-0 pointer-events-none w-[108px] text-center text-xs text-white font-poppins font-medium py-2.5 px-2 rounded-[8px] bg-[#787878]"
                />
                <label
                  htmlFor="Nursery-img"
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

export default AddNursery;
