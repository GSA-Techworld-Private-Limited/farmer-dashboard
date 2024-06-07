import { ArrowBack, SearchRounded } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import CheckBox from "../common/CheckBox";
const columns = [
  { headerName: "SL. No", width: 64 },
  { headerName: "Date", width: 82 },
  { headerName: "Farmer ID", width: 102 },
  { headerName: "Farmer Name", width: 140 },
  { headerName: "Contact", width: 107 },
  {
    headerName: "State",
    width: 106,
  },
  {
    headerName: "City",
    width: 104,
  },
  {
    headerName: "Employee ID",
    width: 104,
  },

  {
    headerName: "Crop Added",
    width: 104,
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
    employee_ID: "9498740",
    farmer_ID: "949870",
    contact: "9287347823",
    city: "bengaluru",
    name: "Ankit Kumar",
    state: "Karnataka",
    pincode: 560078,
    cropAdded: true,
    status: "active",
  },
  {
    id: 2,
    DOJ: "25/09/23",
    employee_ID: "9498740",
    farmer_ID: "949870",
    contact: "9287347823",
    city: "bengaluru",
    name: "Ankit Kumar",
    state: "Karnataka",
    pincode: 560078,
    cropAdded: true,
    status: "active",
  },
  {
    id: 3,
    DOJ: "25/09/23",
    employee_ID: "9498740",
    farmer_ID: "949870",
    contact: "9287347823",
    city: "bengaluru",
    name: "Ankit Kumar",
    state: "Karnataka",
    pincode: 560078,
    cropAdded: true,
    status: "active",
  },
  {
    id: 4,
    DOJ: "25/09/23",
    employee_ID: "9498740",
    farmer_ID: "949870",
    contact: "9287347823",
    city: "bengaluru",
    name: "Ankit Kumar",
    state: "Karnataka",
    pincode: 560078,
    cropAdded: true,
    status: "active",
  },
  {
    id: 5,
    DOJ: "25/09/23",
    employee_ID: "9498740",
    farmer_ID: "949870",
    contact: "9287347823",
    city: "bengaluru",
    name: "Ankit Kumar",
    state: "Karnataka",
    pincode: 560078,
    cropAdded: false,
    status: "Inactive",
  },
];
const Farmers = () => {
  const { setTitle, setCheckedItems, checkedItems, setCategorySelect } =
    useContext(MyContext);
  const navigate = useNavigate();
  const addFarmer = () => {
    navigate(`/farmers/add-farmer`);
    setTitle(`Add Farmer`);
  };
  return (
    <div className="h-[calc(100vh-76px)] flex flex-col w-full">
      <div className="pt-5 px-7 w-full ">
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
          <div className="flex items-center gap-4">
            <CommonBtn
              clickEvent={addFarmer}
              btntext="+ Add Farmer"
              style="bg-[#FF7D24]"
            />
            <CommonBtn btntext="Delete" style="bg-[#FF2E2E]" />
            <CommonBtn btntext="Export" style="bg-[#444444]" />
          </div>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <div className="flex items-center gap-2 bg-[#EAFFD4]">
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
              className="flex items-center gap-2 hover:bg-[#f3f1f1] duration-300"
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
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[82px]">
                {val.DOJ}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline w-[102px]">
                {val.farmer_ID}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[140px]">
                {val.name}
              </div>

              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[107px]">
                {val.contact}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[106px]">
                {val.state}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                {val.city}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline w-[104px]">
                {val.employee_ID}
              </div>
              <div
                className={`py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px] ${
                  val.cropAdded ? "text-[#3F7E00]" : "text-[#FD5353]"
                }`}
              >
                {val.cropAdded ? "Yes" : "No"}
              </div>
              <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                <span
                  className={`text-white font-medium font-poppins leading-5 text-sm inline-block text-center px-2 min-w-[98px] py-[5px] rounded-lg bg-[#5DB505] ${
                    val.status === "active" ? "bg-[#5DB505]" : "bg-[#FD5353]"
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

export default Farmers;
