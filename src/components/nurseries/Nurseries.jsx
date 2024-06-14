import React, { useContext } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";
import { exportData } from "../utils/export";

const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "Nurseryman", width: 158 },
  { headerName: "Contact", width: 107 },
  { headerName: "State", width: 106 },
  { headerName: "City", width: 104 },
  { headerName: "Pincode", width: 104 },
  { headerName: "Farmers Added", width: 122 },
  { headerName: "Status", width: 104 },
];

const Nurseries = () => {
  const { setCheckedItems, setCategorySelect, checkedItems, nurseries } =
    useContext(MyContext);
  const navigate = useNavigate();
  //   const addVendors = () => {
  //     navigate(`/vendors/add-vendors`);
  //     setTitle(`Add Nurseries`);
  //   };
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
            // clickEvent={addVendors}
            btntext="+ Add Nursery"
            style="bg-[#FF7D24]"
          />
          <CommonBtn btntext="Delete" style="bg-[#FF2E2E]" />
          <CommonBtn
            clickEvent={() => exportData(nurseries)}
            btntext="Export"
            style="bg-[#444444]"
          />
        </div>
      </div>
      <div className="w-[calc(100vw-275px)] 2xl:w-full overflow-auto">
        <div className="w-[calc(1440px-275px)] 2xl:w-full pb-2">
          <div className="flex items-center gap-6 bg-[#EAFFD4]">
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
            {nurseries &&
              nurseries.map((val, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 hover:bg-[#f3f1f1] duration-300"
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
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#3F7E00] underline w-[158px]">
                    {val.name}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[107px]">
                    {val.contact_no}
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
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] underline w-[122px]">
                    {val.farmersAdded}
                  </div>
                  <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                    <span
                      className={`text-white font-medium font-poppins leading-5 text-sm px-7 py-[5px] rounded-lg bg-[#5DB505] ${
                        val.is_active ? "bg-[#5DB505]" : "bg-[#FD5353]"
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

export default Nurseries;
