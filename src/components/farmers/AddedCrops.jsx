import { ArrowBack, SearchRounded } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import CheckBox from "../common/CheckBox";
import { formatDateTime } from "../experts/Experts";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { exportData } from "../utils/export";
import SearchInput from "../SearchInput";
const columns = [
  { headerName: "SL. No", width: 64 },
  { headerName: "Date", width: 99 },
  { headerName: "Request ID", width: 112 },
  { headerName: "Farmer Name", width: 145 },
  { headerName: "Crop Name", width: 104 },
  { headerName: "Variety", width: 104 },
  { headerName: "Acres", width: 87 },
  { headerName: "Soil Type", width: 107 },
  { headerName: "Status", width: 104 },
];

const AddedCrops = () => {
  const {
    setTitle,
    setCheckedItems,
    checkedItems,
    setCategorySelect,
    farmersCrops,
    setExportLayer,
    setDataForExport,
  } = useContext(MyContext);
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const cropsDetails = (id) => {
    setTitle(`Request ID - ${id}`);
    navigate(`/farmers/crops-added/${id}`);
  };
  const handleSearchResults = (results) => {
    setFilteredProducts(results);
  };
  const showOverlay = () => {
    setExportLayer(true);
    setDataForExport(farmersCrops);
  };
  return (
    <div className="h-[calc(100vh-76px)] flex flex-col w-full">
      <div className="pt-5 px-7 w-full ">
        <div className="flex mb-7 justify-between">
          <div className="flex items-center border border-[#EEEEEE] overflow-hidden rounded-md w-[350px]">
            <label htmlFor="search" className="px-[18px] text-[#4D44B5]">
              <SearchRounded />
            </label>
            <SearchInput
              items={farmersCrops}
              onSearchResults={handleSearchResults}
            />
          </div>
          <CommonBtn
            clickEvent={showOverlay}
            btntext="Export"
            style="bg-[#444444]"
          />
        </div>
      </div>
      <div className="w-[calc(100vw-275px)] 2xl:w-full overflow-auto">
        <div className="w-[calc(1440px-275px)] 2xl:w-full pb-2">
          <div className="flex items-center gap-4 bg-[#EAFFD4]">
            <div className="px-[26px] h-5"></div>
            {columns.map((val, i) => (
              <div
                key={i}
                style={{ width: val.width }}
                className="py-3 text-[#444444] font-poppins font-bold text-sm leading-5"
              >
                {val.headerName}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-4">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((val, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 hover:bg-[#f3f1f1] duration-300"
                >
                  <div className="px-4 h-5">
                    <CheckBox
                      isChecked={checkedItems[val.id] || false}
                      handleCheckBox={() =>
                        handleCheckBoxChange(
                          val.id,
                          setCheckedItems,
                          setCategorySelect
                        )
                      }
                    />
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[64px]">
                    {i+1}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[99px]">
                    {formatDateTime(val.created_at)}
                  </div>
                  <div
                    onClick={() => cropsDetails(val.crop_ID)}
                    className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline w-[112px]"
                  >
                    {val.request_id}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[145px]">
                    {val.farmer_name}
                  </div>

                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                    {val.crop_name}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                    {val.crop_variety}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[87px]">
                    {val.farm_size}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[107px]">
                    {val.soil_type}
                  </div>
                  <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                    <span
                      className={`text-white font-medium font-poppins leading-5 text-sm inline-block text-center px-2 min-w-[98px] py-[5px] rounded-lg bg-[#5DB505] ${
                        val.status.toLowerCase() === "accepted".toLowerCase()
                          ? "bg-[#5DB505]"
                          : "bg-[#FD5353]"
                      }`}
                    >
                      {val.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center text-red-500 font-poppins flex-col">
                <span className="text-3xl">☹</span> <p>No matches found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedCrops;
