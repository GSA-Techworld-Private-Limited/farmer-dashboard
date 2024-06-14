import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MyContext from "../context/ContextStore";
import demoCrop from "../../assets/images/png/demo-crop.png";
import axios from "axios";
import { baseUrl, token } from "../api/auth";
const CropsDetails = () => {
  const { setTitle } = useContext(MyContext);
  const { request_id } = useParams();
  const [cropDetail, setCropDetail] = useState();
  useEffect(() => {
    if (request_id) {
      const fetchCropDetails = async () => {
        try {
          const res = await axios.get(
            `${baseUrl}superadmin/get-farmer-crop-dashboard/${request_id}/`,
            {
              Authorization: `token ${token}`,
            }
          );
          setCropDetail(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchCropDetails();
    }
    console.log("id", request_id);
  }, [request_id]);
  return (
    <div className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex mb-10 justify-between">
        <Link to="/farmers/crops-added">
          <button
            onClick={() => setTitle("Crops Added")}
            className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
          >
            <ArrowBack />
            <span>Back</span>
          </button>
        </Link>
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
                value={cropDetail && cropDetail.farmer}
                type="text"
                id="Farmer-name"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="crop-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Crop Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                value={cropDetail && cropDetail.crop_name}
                type="text"
                id="crop-name"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="acres"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Acres<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                value={cropDetail && cropDetail.farm_size}
                id="acres"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="crop-date"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Date of Sawing<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="date"
                value={cropDetail && cropDetail.seed_sowed_on}
                id="crop-date"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="variety"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Variety<span className="text-[#FD5353]">*</span>
              </label>
              <input
                value={cropDetail && cropDetail.variety}
                type="text"
                id="variety"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="soil-type"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Soil Type<span className="text-[#FD5353]">*</span>
              </label>
              <input
                value={cropDetail && cropDetail.soil_type}
                type="text"
                id="soil-type"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
        </div>
        <div className="pt-9">
          <p className="text-sm font-poppins text-[#525153] leading-5">
            Pictures :
          </p>
          <div className="flex items-center gap-6 pt-6">
            <img
              className="w-full max-w-[180px]"
              src={cropDetail && `${baseUrl}${cropDetail.image1}`}
              alt="demoCrop"
            />
            <img
              className="w-full max-w-[180px]"
              src={cropDetail && `${baseUrl}${cropDetail.image2}`}
              alt="demoCrop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropsDetails;
