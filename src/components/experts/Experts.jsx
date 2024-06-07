import React, { useContext } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "id", headerName: "SL. No", width: 72 },
  { field: "DOJ", headerName: "DOJ", width: 126 },
  { field: "Expert_ID", headerName: "Expert ID", width: 136 },
  { field: "firstName", headerName: "Expert Name", width: 158 },
  { field: "contact", headerName: "Contact", width: 122, sortable: false },
  {
    field: "email",
    headerName: "email",
    width: 171,
  },
  {
    field: "city",
    headerName: "City",
    sortable: false,
    width: 104,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 109,
  },
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
  } = useContext(MyContext);
  const navigate = useNavigate();
  const handleExpertDetails = (user) => {
    if (user) {
      navigate(`/experts/${user}`);
      setTitle(`Expert ID- ${user}`);
    }
  };
  const addExperts = () => {
    navigate(`/experts/add-expert`);
    setTitle(`Add Experts`);
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
            clickEvent={addExperts}
            btntext="+ Add Expert"
            style="bg-[#FF7D24]"
          />
          <CommonBtn btntext="Delete" style="bg-[#FF2E2E]" />
          <CommonBtn btntext="Export" style="bg-[#444444]" />
        </div>
      </div>
      <div className="w-full overflow-auto">
        <div className="flex items-center gap-3 bg-[#EAFFD4]">
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
          {experts &&
            experts.map((val, i) => (
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
                  {i + 1}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[126px]">
                  {formatDateTime(val.created_at)}
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;
