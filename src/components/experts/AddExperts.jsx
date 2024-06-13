import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import { baseUrl, fetchExperts, token } from "../api/auth";
import axios from "axios";

const AddExperts = () => {
  const { setTitle, setExperts } = useContext(MyContext);
  const [isAdded, setIsAdded] = useState(false);
  const [expertData, setExpertData] = useState({
    name: "",
    contact_no: "",
    whatsapp_no: "",
    email: "",
    date_of_joined: "",
    state: "",
    city: "",
    pincode: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setExpertData({ ...expertData, [name]: value });
  };
  const submitExpert = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseUrl}superadmin/add-expert-dashboard/`,
        expertData,
        {
          Authorization: `token ${token}`,
        }
      );
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), [2000]);
      setExpertData({
        name: "",
        contact_no: "",
        whatsapp_no: "",
        email: "",
        date_of_joined: "",
        state: "",
        city: "",
        pincode: "",
      });
      fetchExperts(setExperts);
      console.log(res);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <form
      onSubmit={submitExpert}
      className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col"
    >
      <div className="flex mb-4 justify-between">
        <Link to="/experts">
          <button
            onClick={() => setTitle("Experts")}
            className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
          >
            <ArrowBack />
            <span>Back</span>
          </button>
        </Link>
        <CommonBtn
          btntext={isAdded ? "Added" : "+ Add Expert"}
          style={
            isAdded
              ? "bg-transparent border border-[#3F7E00] !text-[#3F7E00]"
              : "bg-[#FF7D24]"
          }
        />
      </div>
      <div className="w-full overflow-auto">
        <div className="flex gap-[70px]">
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Expert Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                required
                name="name"
                value={expertData.name}
                onChange={handleInput}
                type="text"
                id="expert-name"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-no"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Contact Number<span className="text-[#FD5353]">*</span>
              </label>
              <input
                required
                name="contact_no"
                value={expertData.contact_no}
                onChange={handleInput}
                type="number"
                id="expert-no"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-email"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Email ID<span className="text-[#FD5353]">*</span>
              </label>
              <input
                required
                name="email"
                value={expertData.email}
                onChange={handleInput}
                type="email"
                id="expert-email"
                placeholder="James@gmail.com"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-state"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                State<span className="text-[#FD5353]">*</span>
              </label>
              <input
                required
                name="state"
                value={expertData.state}
                onChange={handleInput}
                type="text"
                id="expert-state"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-date"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Date of Joining<span className="text-[#FD5353]">*</span>
              </label>
              <input
                required
                name="date_of_joined"
                value={expertData.date_of_joined}
                onChange={handleInput}
                type="date"
                id="expert-date"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-no-two"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Whatsapp Number<span className="text-[#FD5353]">*</span>
              </label>
              <input
                required
                name="whatsapp_no"
                value={expertData.whatsapp_no}
                onChange={handleInput}
                type="number"
                id="expert-no-two"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-city"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                City<span className="text-[#FD5353]">*</span>
              </label>
              <input
                required
                name="city"
                value={expertData.city}
                onChange={handleInput}
                type="text"
                id="expert-city"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-zip"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Zip Code<span className="text-[#FD5353]">*</span>
              </label>
              <input
                required
                name="pincode"
                value={expertData.pincode}
                onChange={handleInput}
                type="number"
                id="expert-zip"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddExperts;
