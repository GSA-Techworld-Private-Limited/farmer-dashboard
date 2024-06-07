import { ArrowBack, SearchRounded } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import CheckBox from "../common/CheckBox";
const columns = [
  { headerName: "SL. No", width: 64 },
  { headerName: "Date", width: 99 },
  { headerName: "Request ID", width: 112 },
  { headerName: "Farmer Name", width: 145 },
  { headerName: "Crop Name", width: 104 },
  {
    headerName: "Variety",
    width: 104,
  },
  {
    headerName: "Acres",
    width: 87,
  },

  {
    headerName: "Soil Type",
    width: 107,
  },
  {
    headerName: "Status",
    width: 104,
  },
];

const rows = [
  {
    id: 1,
    DOJ: "25/09/23",
    acres: "Rainy",
    request_ID: "949870",
    cropName: "Wheat",
    name: "Ankit Kumar",
    variety: "Rabi",
    soilType: "Rainy",
    status: "Pending",
  },
  {
    id: 2,
    DOJ: "25/09/23",
    acres: "Rainy",
    request_ID: "949870",
    cropName: "Wheat",
    name: "Ankit Kumar",
    variety: "Rabi",
    soilType: "Rainy",
    status: "Pending",
  },
  {
    id: 3,
    DOJ: "25/09/23",
    acres: "Rainy",
    request_ID: "949870",
    cropName: "Wheat",
    name: "Ankit Kumar",
    variety: "Rabi",
    soilType: "Rainy",
    status: "Pending",
  },
  {
    id: 4,
    DOJ: "25/09/23",
    acres: "Rainy",
    request_ID: "949870",
    cropName: "Wheat",
    name: "Ankit Kumar",
    variety: "Rabi",
    soilType: "Rainy",
    status: "Pending",
  },
  {
    id: 5,
    DOJ: "25/09/23",
    acres: "Rainy",
    request_ID: "949870",
    cropName: "Wheat",
    name: "Ankit Kumar",
    variety: "Rabi",
    soilType: "Rainy",
    status: "Delivered",
  },
];
const AddedCrops = () => {
  const { setTitle, setCheckedItems, checkedItems, setCategorySelect } =
    useContext(MyContext);
  const navigate = useNavigate();
  const cropsDetails = (id) => {
    setTitle(`Request ID - ${id}`);
    navigate(`/farmers/crops-added/id=${id}`);
  };
  return (
    <div className="h-[calc(100vh-76px)] flex flex-col w-full">
      <div className="pt-6 px-10 w-full ">
        <div className="flex mb-7 justify-between">
          <div className="flex items-center border border-[#EEEEEE] overflow-hidden rounded-md w-[350px]">
            <label htmlFor="search" className="px-[18px] text-[#4D44B5]">
              <SearchRounded />
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search here..."
              className="text-base leading-[22px] w-full text-[#6C757D] placeholder:text-[#6C757D] outline-none font-poppins py-[13px] px-1"
            />
          </div>
          <CommonBtn btntext="Export" style="bg-[#444444]" />
        </div>
      </div>
      <div className="w-full overflow-auto">
        <div className="flex items-center gap-4 bg-[#EAFFD4]">
          <div className="px-4 h-5">
            <CheckBox
              isChecked={checkedItems[0] || false}
              handleCheckBox={() =>
                handleCheckBoxChange(0, setCheckedItems, setCategorySelect)
              }
            />
          </div>
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
          {rows.map((val, i) => (
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
                {val.id}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[99px]">
                {val.DOJ}
              </div>
              <div
                onClick={() => cropsDetails(val.request_ID)}
                className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline w-[112px]"
              >
                {val.request_ID}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[145px]">
                {val.name}
              </div>

              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                {val.cropName}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                {val.variety}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[87px]">
                {val.acres}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[107px]">
                {val.soilType}
              </div>
              <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                <span
                  className={`text-white font-medium font-poppins leading-5 text-sm inline-block text-center px-2 min-w-[98px] py-[5px] rounded-lg bg-[#5DB505] ${
                    val.status === "Delivered" ? "bg-[#5DB505]" : "bg-[#FD5353]"
                  }`}
                >
                  {val.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddedCrops;
