import React, { useContext } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";
import { formatDateTime } from "../experts/Experts";
import { exportData } from "../utils/export";
import { baseUrl, fetchEmployees, token } from "../api/auth";
import axios from "axios";

const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "DOJ", width: 90 },
  { headerName: "Employee ID", width: 114 },
  { headerName: "Employee Name", width: 158 },
  { headerName: "Contact", width: 113 },
  {
    headerName: "email",
    width: 151,
  },
  {
    headerName: "City",
    width: 97,
  },
  {
    headerName: "Farmers Added",
    width: 122,
  },
  {
    headerName: "Status",
    width: 104,
  },
];

const Employees = () => {
  const {
    setCheckedItems,
    setCategorySelect,
    checkedItems,
    categorySelect,
    setTitle,
    employees,
    setEmployees,
  } = useContext(MyContext);
  const navigate = useNavigate();
  const handleExpertDetails = (farmer) => {
    if (farmer) {
      navigate(`/employees/${farmer}`);
      setTitle(`${farmer} (Farmers)`);
    }
  };
  const addEmployees = () => {
    navigate(`/employees/add-employees`);
    setTitle(`Add Employees`);
  };
  const deleteEmplyoee = async () => {
    if (categorySelect) {
      console.log(categorySelect);
      try {
        const res = await axios.delete(
          `${baseUrl}superadmin/get-employee-dashboard/${categorySelect}/`,
          {
            Authorization: `token ${token}`,
          }
        );
        fetchEmployees(setEmployees);
        setCategorySelect(null);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("select item");
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
        <div className="flex items-center gap-4">
          <CommonBtn
            clickEvent={addEmployees}
            btntext="+ Add Employee"
            style="bg-[#FF7D24]"
          />
          <CommonBtn
            clickEvent={deleteEmplyoee}
            btntext="Delete"
            style="bg-[#FF2E2E]"
          />
          <CommonBtn
            clickEvent={() => exportData(employees)}
            btntext="Export"
            style="bg-[#444444]"
          />
        </div>
      </div>
      <div className="w-[calc(100vw-275px)] 2xl:w-full overflow-auto">
        <div className="w-[calc(1440px-275px)] 2xl:w-full pb-2">
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
            {employees &&
              employees.map((val, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 hover:bg-[#f3f1f1] duration-300"
                >
                  <div className="px-4 h-5">
                    <CheckBox
                      isChecked={checkedItems[val.employee_id] || false}
                      handleCheckBox={() =>
                        handleCheckBoxChange(
                          val.employee_id,
                          setCheckedItems,
                          setCategorySelect
                        )
                      }
                    />
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[72px]">
                    {i + 1}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[90px]">
                    {formatDateTime(val.date_of_joined)}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline w-[114px]">
                    {val.employee_id}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[158px]">
                    {val.name}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[113px]">
                    {val.contact_no}
                  </div>
                  <div className="py-1 text-sm text-ellipsis overflow-hidden font-semibold font-poppins leading-5 text-[#303972] w-[151px]">
                    {val.email}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[97px]">
                    {val.city}
                  </div>
                  <div
                    onClick={() => handleExpertDetails(val.firstName)}
                    className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline cursor-pointer w-[122px]"
                  >
                    {val.farmer_added}
                  </div>
                  <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                    <span
                      className={`text-white font-medium font-poppins leading-5 text-sm px-7 py-[5px] rounded-lg ${
                        val.is_active ? "bg-[#5DB505]" : "bg-[#FF2E2E]"
                      }`}
                    >
                      {val.is_active ? "Active" : "Unactive"}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
