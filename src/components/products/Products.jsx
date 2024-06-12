import React, { useContext } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";
import { baseUrl, fetchProducts } from "../api/auth";
import axios from "axios";

const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "Picture", width: 126 },
  { headerName: "Product ID", width: 136 },
  { headerName: "Product Name", width: 158 },
  { headerName: "QTY.", width: 122 },
  { headerName: "Actual Price", width: 171 },
  { headerName: "Selling Price", width: 104 },
  { headerName: "Status", width: 109 },
];

const Products = () => {
  const {
    setCheckedItems,
    setCategorySelect,
    checkedItems,
    setTitle,
    products,
    setProducts,
    categorySelect,
    setProductDetails,
  } = useContext(MyContext);
  const navigate = useNavigate();

  const handleProductDetails = async (product) => {
    const token = sessionStorage.getItem("token");
    if (product) {
      try {
        const res = await axios.get(
          `${baseUrl}superadmin/get-products-dashboard/${product}/`,
          {
            Authorization: `token ${token}`,
          }
        );
        setProductDetails(res.data);
        console.log(res);
        navigate(`/products/id=${product}`);
        setTitle(`Product ID - ${product}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const addProducts = () => {
    navigate(`/products/add-products`);
    setTitle(`Add Products`);
  };
  const deleteProduct = async () => {
    const token = sessionStorage.getItem("token");
    if (categorySelect) {
      console.log(categorySelect);
      try {
        const res = await axios.delete(
          `${baseUrl}superadmin/get-products-dashboard/${categorySelect}/`,
          {
            Authorization: `token ${token}`,
          }
        );
        fetchProducts(setProducts);
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
            clickEvent={addProducts}
            btntext="+ Add Products"
            style="bg-[#FF7D24]"
          />
          <CommonBtn
            clickEvent={deleteProduct}
            btntext="Delete"
            style="bg-[#FF2E2E]"
          />
          <CommonBtn btntext="Export" style="bg-[#444444]" />
        </div>
      </div>
      <div className="w-[calc(100vw-275px)] 2xl:w-full overflow-auto">
        <div className="w-[calc(1440px-275px)] 2xl:w-full pb-2">
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
            {products &&
              products.map((val, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 hover:bg-[#f3f1f1] duration-300"
                >
                  <div className="px-4 h-5">
                    <CheckBox
                      isChecked={checkedItems[val.product_id] || false}
                      handleCheckBox={() =>
                        handleCheckBoxChange(
                          val.product_id,
                          setCheckedItems,
                          setCategorySelect
                        )
                      }
                    />
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[72px]">
                    {i + 1}
                  </div>
                  <div className="py-1 text-sm flex items-center font-semibold font-poppins leading-5 text-[#303972] w-[126px]">
                    {val.product_galleries.length > 0
                      ? val.product_galleries.map((obj, i) => (
                          <img
                            key={i}
                            className={`w-11 h-9 object-cover rounded-[5px] ${
                              i == !0 ? "-translate-x-1/2" : ""
                            }`}
                            src={obj.image.replace(
                              "http://localhost:8000/",
                              "http://142.93.223.45:8005/"
                            )}
                            alt="sd"
                          />
                        ))
                      : "_"}
                  </div>
                  <div
                    onClick={() => handleProductDetails(val.product_id)}
                    className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline cursor-pointer w-[136px]"
                  >
                    {val.product_id}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[158px]">
                    {val.name}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[122px]">
                    {val.quantity}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[171px]">
                    {val.actual_price}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                    {val.selling_price}
                  </div>
                  <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[109px]">
                    <span
                      className={`font-medium font-poppins leading-5 text-sm rounded-lg ${
                        val.is_active ? "text-[#5DB505]" : "text-[#FF2E2E]"
                      }`}
                    >
                      {val.is_active ? "Available" : "Unavailable"}
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

export default Products;
