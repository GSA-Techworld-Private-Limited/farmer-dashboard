import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import axios from "axios";
import { baseUrl, fetchExperts, token } from "../api/auth";
const ExpertDetails = () => {
  const navigate = useNavigate();
  const { expert_id } = useParams();
  console.log;
  const { setExperts, setTitle } = useContext(MyContext);
  const [expertDetails, setExpertDetails] = useState(null);
  const handleExpertInput = (e) => {
    const { name, value } = e.target;
    setExpertDetails({ ...expertDetails, [name]: value });
  };
  const editExpert = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const res = await axios.patch(
        `${baseUrl}superadmin/get-experts-dashboard/${expertDetails.expert_id}/`,
        expertDetails,
        {
          Authorization: `token ${token}`,
        }
      );
      console.log(res);
      fetchExperts(setExperts);
      navigate("/experts");
      setTitle(`Experts`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(expertDetails);

  useEffect(() => {
    if (expert_id) {
      const fetchProductDetails = async () => {
        try {
          const res = await axios.get(
            `${baseUrl}superadmin/get-experts-dashboard/${expert_id}/`,
            {
              Authorization: `token ${token}`,
            }
          );
          setExpertDetails(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProductDetails();
    }
    console.log("id", expert_id);
  }, [expert_id]);
  return (
    <div className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col">
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
          clickEvent={editExpert}
          btntext="Edit"
          style="bg-[#05A3E7]"
        />
      </div>
      <form className="overflow-auto">
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
                type="text"
                id="expert-name"
                name="name"
                onChange={handleExpertInput}
                value={expertDetails && expertDetails.name}
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
                type="number"
                id="expert-no"
                name="contact_no"
                value={expertDetails && expertDetails.contact_no}
                onChange={handleExpertInput}
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
                type="email"
                id="expert-email"
                name="email"
                value={expertDetails && expertDetails.email}
                onChange={handleExpertInput}
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
                type="text"
                id="expert-state"
                placeholder="+123456789"
                name="state"
                value={expertDetails && expertDetails.state}
                onChange={handleExpertInput}
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
                type="date"
                id="expert-date"
                placeholder="James"
                name="date_of_joined"
                value={expertDetails && expertDetails.date_of_joined}
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
                type="number"
                id="expert-no-two"
                placeholder="+123456789"
                name="whatsapp_no"
                value={expertDetails && expertDetails.whatsapp_no}
                onChange={handleExpertInput}
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
                type="text"
                id="expert-city"
                value={expertDetails && expertDetails.city}
                onChange={handleExpertInput}
                name="city"
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
                type="number"
                id="expert-zip"
                name="pincode"
                value={expertDetails && expertDetails.pincode}
                onChange={handleExpertInput}
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex items-end gap-[70px] pt-10">
          <div className="w-full">
            <p className="text-base text-black font-poppins font-semibold leading-6 mb-5">
              Login Credentials
            </p>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-username"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Username<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="expert-username"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="expert-password"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Password<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="password"
                id="expert-password"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default ExpertDetails;
