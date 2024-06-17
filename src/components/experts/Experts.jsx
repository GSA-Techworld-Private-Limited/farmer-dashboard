import React, { useContext, useState } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";
import { baseUrl, fetchExperts } from "../api/auth";
import axios from "axios";
import { toast } from "react-toastify";
import SearchInput from "../SearchInput";

const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "DOJ", width: 126 },
  { headerName: "Expert ID", width: 136 },
  { headerName: "Expert Name", width: 158 },
  { headerName: "Contact", width: 122 },
  { headerName: "email", width: 171 },
  { headerName: "City", width: 104 },
  { headerName: "Status", width: 109 },
];

export const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString();
};
const Experts = () => {
  const {
    setCheckedItems,
    setCategorySelect,
    checkedItems,
    setTitle,
    experts,
    categorySelect,
    setExperts,
    setExportLayer,
    setDataForExport,
  } = useContext(MyContext);
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleExpertDetails = (expert_id) => {
    navigate(`/experts/${expert_id}`);
    setTitle(`Expert ID - ${expert_id}`);
  };
  const addExperts = () => {
    navigate(`add-expert`);
    setTitle(`Add Experts`);
  };
  const deleteExpert = async () => {
    const token = sessionStorage.getItem("token");
    if (categorySelect) {
      console.log(categorySelect);
      try {
        const res = await axios.delete(
          `${baseUrl}superadmin/get-experts-dashboard/${categorySelect}/`,
          {
            Authorization: `token ${token}`,
          }
        );
        toast.success("Expert deleted successfully!", {
          theme: "light",
        });
        fetchExperts(setExperts);
        setCategorySelect(null);
        console.log(res);
      } catch (error) {
        console.log(error);
        toast.error("Oops something went, Try again!!", {
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
    setDataForExport(experts);
  };
  return (
    <div className="w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex justify-between items-center py-5 px-7 pb-7">
        <div className="flex items-center border border-[#EEEEEE] overflow-hidden rounded-md w-[350px]">
          <label htmlFor="search" className="px-[18px] text-[#4D44B5]">
            <SearchRounded />
          </label>
          <SearchInput items={experts} onSearchResults={handleSearchResults} />
        </div>
        <div className="flex items-center gap-4">
          <CommonBtn
            clickEvent={addExperts}
            btntext="+ Add Expert"
            style="bg-[#FF7D24]"
          />
          <CommonBtn
            clickEvent={deleteExpert}
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
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((val, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 hover:bg-[#f3f1f1] duration-300"
                >
                  <div className="px-4 h-5">
                    <CheckBox
                      isChecked={checkedItems[val.expert_id] || false}
                      handleCheckBox={() =>
                        handleCheckBoxChange(
                          val.expert_id,
                          setCheckedItems,
                          setCategorySelect
                        )
                      }
                    />
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[72px]">
                    {i + 1}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[126px]">
                    {formatDateTime(val.date_of_joined)}
                  </div>
                  <div
                    onClick={() => handleExpertDetails(val.expert_id)}
                    className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline cursor-pointer w-[136px]"
                  >
                    {val.expert_id}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[158px]">
                    {val.name}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[122px]">
                    {val.contact_no}
                  </div>
                  <div className="py-1 text-sm text-ellipsis overflow-hidden font-semibold font-poppins leading-5 text-[#303972] w-[171px]">
                    {val.email}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                    {val.city}
                  </div>
                  <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[109px]">
                    <span className="text-white font-medium font-poppins leading-5 text-sm px-7 py-[5px] rounded-lg bg-[#5DB505]">
                      {val.is_active ? "Active" : ""}
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

export default Experts;
