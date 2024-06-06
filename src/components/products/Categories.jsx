import React, { useContext, useState } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";
import AddCategory from "./AddCategory";

const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "Category Photo", width: 154 },
  { headerName: "Category Name", width: 154 },
  { headerName: "Total Products", width: 141 },
];

const rows = [
  {
    id: 1,
    image: "",
    cate_name: "9498740",
    totalQty: "1099",
  },
  {
    id: 2,
    image: "",
    cate_name: "9498740",
    totalQty: "1099",
  },
  {
    id: 3,
    image: "",
    cate_name: "9498740",
    totalQty: "1099",
  },
  {
    id: 4,
    image: "",
    cate_name: "9498740",
    totalQty: "1099",
  },
];
const Categories = () => {
  const { setCheckedItems, setCategorySelect, checkedItems, setTitle } =
    useContext(MyContext);
  const [category, setCategory] = useState(false);
  const navigate = useNavigate();

  const addCatgories = () => {};
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
            clickEvent={() => setCategory(true)}
            btntext="+ Add Category"
            style="bg-[#FF7D24]"
          />
          <CommonBtn btntext="Delete" style="bg-[#FF2E2E]" />
          <CommonBtn btntext="Export" style="bg-[#444444]" />
        </div>
      </div>
      <div className="w-full overflow-auto">
        <div className="flex items-center gap-16 bg-[#EAFFD4]">
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
          {rows.map((val, i) => (
            <div
              key={i}
              className="flex items-center gap-16 hover:bg-[#f3f1f1] duration-300"
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
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[154px]">
                {val.image}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[154px]">
                {val.cate_name}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline cursor-pointer w-[141px]">
                {val.totalQty}
              </div>
            </div>
          ))}
        </div>
      </div>
      {category && <AddCategory setCategory={setCategory} />}
    </div>
  );
};

export default Categories;
