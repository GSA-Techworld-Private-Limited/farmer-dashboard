import { ArrowBack, SearchRounded } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import CheckBox from "../common/CheckBox";
import { formatDateTime } from "../experts/Experts";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { baseUrl, fetchFarmers } from "../api/auth";
import axios from "axios";
import { toast } from "react-toastify";
import SearchInput from "../SearchInput";
const columns = [
  { headerName: "SL. No", width: 64 },
  { headerName: "Date", width: 82 },
  { headerName: "Farmer ID", width: 102 },
  { headerName: "Farmer Name", width: 140 },
  { headerName: "Contact", width: 107 },
  { headerName: "State", width: 106 },
  { headerName: "City", width: 104 },
  { headerName: "Employee ID", width: 104 },
  { headerName: "Crop Added", width: 104 },
  { headerName: "Status", width: 104 },
];

const Farmers = () => {
  const {
    setTitle,
    setCheckedItems,
    checkedItems,
    setCategorySelect,
    farmers,
    setFarmers,
    categorySelect,
    setExportLayer,
    setDataForExport,
  } = useContext(MyContext);
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const addFarmer = () => {
    navigate(`/farmers/add-farmer`);
    setTitle(`Add Farmer`);
  };
  const deleteFarmer = async () => {
    console.log("yes", categorySelect);
    const token = sessionStorage.getItem("token");

    if (categorySelect) {
      console.log(categorySelect);
      try {
        const res = await axios.delete(
          `${baseUrl}superadmin/get-farmer-dashboard/${categorySelect}/`,
          {
            Authorization: `token ${token}`,
          }
        );
        fetchFarmers(setFarmers);
        console.log(res);
        toast.success("Farmer Deleted Successfully!", {
          theme: "light",
        });
        console.log(categorySelect);
        setCategorySelect(null);
      } catch (error) {
        console.log(error);
        toast.error(error, {
          theme: "light",
        });
      }
    } else {
      toast.warning("First Select Any Item!", {
        theme: "light",
      });
    }
  };
  const handleSearchResults = (results) => {
    setFilteredProducts(results);
  };
  const showOverlay = () => {
    setExportLayer(true);
    setDataForExport(farmers);
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
              items={farmers}
              onSearchResults={handleSearchResults}
            />
          </div>
          <div className="flex items-center gap-4">
            <CommonBtn
              clickEvent={addFarmer}
              btntext="+ Add Farmer"
              style="bg-[#FF7D24]"
            />
            <CommonBtn
              clickEvent={deleteFarmer}
              btntext="Delete"
              style="bg-[#FF2E2E]"
            />
            <CommonBtn
              clickEvent={showOverlay}
              btntext="Export"
              style="bg-[#444444]"
            />
          </div>
        </div>
      </div>
      <div className="w-[calc(100vw-275px)] 2xl:w-full overflow-auto">
        <div className="w-[calc(1440px-275px)] 2xl:w-full pb-2">
          <div className="flex items-center gap-2 bg-[#EAFFD4]">
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
                    {i + 1}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[82px]">
                    {formatDateTime(val.created_at)}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline w-[102px]">
                    {val.id}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[140px]">
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
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline w-[104px]">
                    {val.employee_ID}
                  </div>
                  <div
                    className={`py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px] ${
                      val.is_crop_added ? "text-[#3F7E00]" : "text-[#FD5353]"
                    }`}
                  >
                    {val.is_crop_added ? "Yes" : "No"}
                  </div>
                  <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                    <span
                      className={`text-white font-medium font-poppins leading-5 text-sm inline-block text-center px-2 min-w-[98px] py-[5px] rounded-lg bg-[#5DB505] ${
                        val.status === true
                          ? "bg-[#5DB505]"
                          : "bg-[#FD5353]"
                      }`}
                    >
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
    </div>
  );
};

export default Farmers;
