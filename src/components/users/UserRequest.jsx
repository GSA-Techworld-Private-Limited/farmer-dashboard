import React, { useContext, useState } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";
import SearchInput from "../SearchInput";
import { formatDateTime } from "../experts/Experts";

const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "Date", width: 93 },
  { headerName: "User Name", width: 112 },
  { headerName: "Request ID", width: 134 },
  { headerName: "Plant Name", width: 107 },
  { headerName: "Description", width: 107 },
  { headerName: "Status", width: 104 },
];


const UserRequest = () => {
  const {
    setCheckedItems,
    setCategorySelect,
    checkedItems,
    setTitle,
    setExportLayer,
    setDataForExport,usersRequest
  } = useContext(MyContext);
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const requestDetails = (id,req_id) => {
    if (id) {
      setTitle(`Request ID - ${req_id}`);
      navigate(`/users/user-requests/${id}`);
    }
  };
  const handleSearchResults = (results) => {
    setFilteredProducts(results);
  };
  const showOverlay = () => {
    setExportLayer(true);
    setDataForExport(usersRequest);
  };
  return (
    <div className="w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex justify-between items-center py-5 px-7 pb-7">
        <div className="flex items-center border border-[#EEEEEE] overflow-hidden rounded-md w-[350px]">
          <label htmlFor="search" className="px-[18px] text-[#4D44B5]">
            <SearchRounded />
          </label>
          <SearchInput items={usersRequest} onSearchResults={handleSearchResults} />
        </div>
        <CommonBtn
          clickEvent={showOverlay}
          btntext="Export"
          style="bg-[#444444]"
        />
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
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((val, i) => (
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
                  {i+1}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[93px]">
                  {formatDateTime(val.created_at)}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[112px]">
                  {val.username}
                </div>
                <div
                  onClick={() => requestDetails(val.plant_ID,val.request_id)}
                  className="py-1 text-sm font-semibold font-poppins leading-5 text-[#3F7E00] cursor-pointer underline w-[134px]"
                >
                  {val.request_id}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[107px]">
                  {val.plant_ID}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[107px]">
                  <div className="rounded-[5px] p-2 border-[0.5px] border-[#ADA9A9] h-[52px]">
                    {val.description}
                  </div>
                </div>

                <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                  <span
                    className={`text-white font-medium font-poppins leading-5 text-sm px-7 py-[5px] rounded-lg ${
                      val.status.toLowerCase() === "Pending".toLowerCase() ? "bg-[#FD5353]" : val.status.toLowerCase()==="waiting".toLowerCase()?"bg-[#FF7D24]":"bg-[#5DB505]"
                    }`}
                  >
                    {val.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center text-red-500 font-poppins flex-col">
              <span className="text-3xl">☹</span> <p>No data found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserRequest;
