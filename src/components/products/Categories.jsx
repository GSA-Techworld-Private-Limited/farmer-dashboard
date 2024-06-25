import React, { useContext, useState } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";
import AddCategory from "./AddCategory";
import { baseUrl, fetchCategories } from "../api/auth";
import axios from "axios";
import { exportData } from "../utils/export";
import { toast } from "react-toastify";
import SearchInput from "../SearchInput";

const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "Category Photo", width: 154 },
  { headerName: "Category Name", width: 154 },
  { headerName: "Total Products", width: 141 },
];
const Categories = () => {
  const {
    setCheckedItems,
    categorySelect,
    setCategorySelect,
    checkedItems,
    categories,
    setCategories,
    setExportLayer,
    setDataForExport,
  } = useContext(MyContext);
  const [category, setCategory] = useState(false);
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const deleteCate = async () => {
    const token = sessionStorage.getItem("token");
    if (categorySelect) {
      console.log(categorySelect);
      try {
        const res = await axios.delete(
          `${baseUrl}superadmin/get-categories-dashboard/${categorySelect}/`,
          {
            Authorization: `token ${token}`,
          }
        );
        fetchCategories(setCategories);
        console.log(res);
        toast.success("Category Deleted Successfully!", {
          theme: "light",
        });
        setCategorySelect(null);
      } catch (error) {
        toast.error(error.message, {
          theme: "light",
        });
      }
    } else {
      toast.warning("First Select Item!", {
        theme: "light",
      });
    }
  };
  const handleSearchResults = (results) => {
    setFilteredProducts(results);
  };
  const showOverlay = () => {
    setExportLayer(true);
    setDataForExport(categories);
  };
  return (
    <div className="w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex justify-between items-center py-5 px-7 pb-7">
        <div className="flex items-center border border-[#EEEEEE] overflow-hidden rounded-md w-[350px]">
          <label htmlFor="search" className="px-[18px] text-[#4D44B5]">
            <SearchRounded />
          </label>
          <SearchInput
            items={categories}
            onSearchResults={handleSearchResults}
          />
        </div>
        <div className="flex items-center gap-4">
          <CommonBtn
            clickEvent={() => setCategory(true)}
            btntext="+ Add Category"
            style="bg-[#FF7D24]"
          />
          <CommonBtn
            clickEvent={deleteCate}
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
      <div className="w-full overflow-auto">
        <div className="flex items-center gap-16 bg-[#EAFFD4]">
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
                  {i + 1}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[154px]">
                  <img
                    className="h-9 rounded w-16 object-cover"
                    src={val.image.replace("http://localhost:8000/", baseUrl)}
                    alt="categories image"
                  />
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[154px]">
                  {val.name}
                </div>
                <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline cursor-pointer w-[141px]">
                  {val.total_products}
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
      {category && <AddCategory setCategory={setCategory} />}
    </div>
  );
};

export default Categories;
