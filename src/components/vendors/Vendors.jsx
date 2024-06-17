import React, { useContext, useState } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, fetchVendors } from "../api/auth";
import { exportData } from "../utils/export";
import { toast } from "react-toastify";
import SearchInput from "../SearchInput";

const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "Vendor", width: 158 },
  { headerName: "Contact", width: 107 },
  { headerName: "State", width: 106 },
  { headerName: "City", width: 104 },
  { headerName: "Pincode", width: 104 },
  { headerName: "Farmers Added", width: 122 },
  { headerName: "Status", width: 104 },
];
const Vendors = () => {
  const {
    setCheckedItems,
    setCategorySelect,
    checkedItems,
    categorySelect,
    setTitle,
    vendors,
    setVendors,
    setExportLayer,
    setDataForExport,
  } = useContext(MyContext);
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const addVendors = () => {
    navigate(`/vendors/add-vendors`);
    setTitle(`Add Vendors`);
  };
  const deleteVendor = async () => {
    console.log("yes", categorySelect);
    const token = sessionStorage.getItem("token");

    if (categorySelect) {
      console.log(categorySelect);
      try {
        const res = await axios.delete(
          `${baseUrl}superadmin/get-vendor-dashboard/${categorySelect}/`,
          {
            Authorization: `token ${token}`,
          }
        );
        fetchVendors(setVendors);
        console.log(res);
        toast.success("Vendor Deleted Successfully", {
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
      toast.warning("Select Any Item First!", {
        theme: "light",
      });
    }
  };
  const handleSearchResults = (results) => {
    setFilteredProducts(results);
  };
  const showOverlay = () => {
    setExportLayer(true);
    setDataForExport(vendors);
  };
  return (
    <div className="w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex justify-between items-center py-5 px-7 pb-7">
        <div className="flex items-center border border-[#EEEEEE] overflow-hidden rounded-md w-[350px]">
          <label htmlFor="search" className="px-[18px] text-[#4D44B5]">
            <SearchRounded />
          </label>
          <SearchInput items={vendors} onSearchResults={handleSearchResults} />
        </div>
        <div className="flex items-center gap-4">
          <CommonBtn
            clickEvent={addVendors}
            btntext="+ Add Vendor"
            style="bg-[#FF7D24]"
          />
          <CommonBtn
            clickEvent={deleteVendor}
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
      <div className="w-[calc(100vw-275px)] 2xl:w-full overflow-auto">
        <div className="w-[calc(1440px-275px)] 2xl:w-full pb-2">
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

export default Vendors;
