import React, { useContext } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";
import AddCategory from "../products/AddCategory";

const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "Date", width: 93 },
  { headerName: "User Name", width: 112 },
  { headerName: "Request ID", width: 134 },
  {
    headerName: "Plant Name",
    width: 107,
  },
  {
    headerName: "Description",
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
    request_ID: "3564364",
    date: "27-07-23",
    description: "",
    name: "Jon",
    plantName: "Hibiscous",
    status: "Pending",
  },
  {
    id: 2,
    request_ID: "3564364",
    date: "27-07-23",
    description: "",
    name: "Cersei",
    plantName: "Hibiscous",
    status: "Pending",
  },
  {
    id: 3,
    request_ID: "3564364",
    date: "27-07-23",
    description: "",
    name: "Jaime",
    plantName: "Hibiscous",
    status: "Pending",
  },
  {
    id: 4,
    request_ID: "3564364",
    date: "27-07-23",
    description: "",
    name: "Arya",
    plantName: "Hibiscous",
    status: "Pending",
  },
  {
    id: 5,
    request_ID: "3564364",
    date: "27-07-23",
    description: "",
    name: "Daenerys",
    plantName: "Hibiscous",
    status: "Pending",
  },
];
const UserRequest = () => {
  const { setCheckedItems, setCategorySelect, checkedItems, setTitle } =
    useContext(MyContext);
  const navigate = useNavigate();
  const requestDetails = (id) => {
    if (id) {
      setTitle(`Request ID - ${id}`);
      navigate(`/users/user-requests/id=${id}`);
    }
  };
  return (
    <div className="w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex justify-between items-center py-5 px-7 pb-7">
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
      <div className="w-full overflow-auto">
        <div className="flex items-center gap-8 bg-[#EAFFD4]">
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
              className="flex items-center gap-8 hover:bg-[#f3f1f1] duration-300"
            >
              <div className="px-4 h-5">
                <CheckBox
                  isChecked={checkedItems[val.employee_ID] || false}
                  handleCheckBox={() =>
                    handleCheckBoxChange(
                      val.employee_ID,
                      setCheckedItems,
                      setCategorySelect
                    )
                  }
                />
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[72px]">
                {val.id}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[93px]">
                {val.date}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[112px]">
                {val.name}
              </div>
              <div
                onClick={() => requestDetails(val.request_ID)}
                className="py-1 text-sm font-semibold font-poppins leading-5 text-[#3F7E00] cursor-pointer underline w-[134px]"
              >
                {val.request_ID}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[107px]">
                {val.plantName}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[107px]">
                <div className="rounded-[5px] border-[0.5px] border-[#ADA9A9] h-[52px]">
                  {val.description}
                </div>
              </div>

              <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                <span
                  className={`text-white font-medium font-poppins leading-5 text-sm px-7 py-[5px] rounded-lg ${
                    val.status === "Pending" ? "bg-[#FD5353]" : "bg-[#5DB505]"
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

export default UserRequest;
