import React, { useContext, useState } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { exportData } from "../utils/export";
import SearchInput from "../SearchInput";

const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "User", width: 158 },
  { headerName: "Contact", width: 107 },
  { headerName: "State", width: 106 },
  { headerName: "City", width: 104 },
  { headerName: "Pincode", width: 104 },
  { headerName: "Status", width: 104 },
];

const Users = () => {
  const {
    setCheckedItems,
    setCategorySelect,
    checkedItems,
    users,
    setExportLayer,
    setDataForExport,
  } = useContext(MyContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleSearchResults = (results) => {
    setFilteredProducts(results);
  };
  const showOverlay = () => {
    setExportLayer(true);
    setDataForExport(users);
  };
  return (
    <div className="w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex justify-between items-center py-5 px-7 pb-7">
        <div className="flex items-center border border-[#EEEEEE] overflow-hidden rounded-md w-[350px]">
          <label htmlFor="search" className="px-[18px] text-[#4D44B5]">
            <SearchRounded />
          </label>
          <SearchInput items={users} onSearchResults={handleSearchResults} />
        </div>
        <CommonBtn
          clickEvent={showOverlay}
          btntext="Export"
          style="bg-[#444444]"
        />
      </div>
      <div className="w-full overflow-auto">
        <div className="flex items-center gap-6 bg-[#EAFFD4]">
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
                  {i + 1}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#3F7E00] underline w-[158px]">
                  {val.full_name}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[107px]">
                  {val.mobile_number}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[106px]">
                  {val.state}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                  {val.city}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                  {val.zipcode}
                </div>

                <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                  <span className={`text-white font-medium font-poppins leading-5 text-sm inline-block text-center px-2 min-w-[98px] py-[5px] rounded-lg bg-[#5DB505] ${
                        val.status === true
                          ? "bg-[#5DB505]"
                          : "bg-[#FD5353]"
                      }`}>
                  {val.status === true
                          ? "Active"
                          : "Unactive"
                      }
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
  );
};

export default Users;
