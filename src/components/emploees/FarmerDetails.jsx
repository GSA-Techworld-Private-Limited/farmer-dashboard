import { ArrowBack } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import CheckBox from "../common/CheckBox";
const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "DOJ", width: 136 },
  { headerName: "Farmer Name", width: 158 },
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
    headerName: "Pincode",
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
    DOJ: "26/05/2023",
    employee_ID: "9498740",
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
    DOJ: "26/05/2023",
    employee_ID: "9498740",
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
    DOJ: "26/05/2023",
    employee_ID: "9498740",
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
    DOJ: "26/05/2023",
    employee_ID: "9498740",
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
    DOJ: "26/05/2023",
    employee_ID: "9498740",
    contact: "9287347823",
    city: "bengaluru",
    name: "Ankit Kumar",
    state: "Karnataka",
    pincode: 560078,
    cropAdded: false,
    status: "Inactive",
  },
];
const FramerDetails = () => {
  const { setTitle, setCheckedItems, checkedItems, setCategorySelect } =
    useContext(MyContext);
  return (
    <div className="h-[calc(100vh-76px)] flex flex-col">
      <div className="pt-6 px-10 w-full ">
        <div className="flex mb-7 justify-between">
          <Link to="/employees">
            <button
              onClick={() => setTitle("Employees")}
              className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
            >
              <ArrowBack />
              <span>Back</span>
            </button>
          </Link>
          <CommonBtn btntext="Export" style="bg-[#444444]" />
        </div>
      </div>
      <div className="w-full overflow-auto">
        <div className="flex items-center gap-3 bg-[#EAFFD4]">
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
          {rows.map((val, i) => (
            <div
              key={i}
              className="flex items-center gap-3 hover:bg-[#f3f1f1] duration-300"
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
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[72px]">
                {val.id}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[136px]">
                {val.DOJ}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline cursor-pointer w-[158px]">
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
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                {val.pincode}
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

export default FramerDetails;
