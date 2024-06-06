import React, { useContext } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";

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

const rows = [
  {
    id: 1,
    image: "",
    product_ID: "9498740",
    salePrice: "1099",
    name: "Jon",
    price: "999",
    qty: 10,
    status: "Available",
  },
  {
    id: 2,
    image: "",
    product_ID: "9498740",
    salePrice: "1099",
    name: "Cersei",
    price: "999",
    qty: 10,
    status: "Available",
  },
  {
    id: 3,
    image: "",
    product_ID: "9498740",
    salePrice: "1099",
    name: "Jaime",
    price: "999",
    qty: 10,
    status: "Available",
  },
  {
    id: 4,
    image: "",
    product_ID: "9498740",
    salePrice: "1099",
    name: "Arya",
    price: "999",
    qty: 10,
    status: "Available",
  },
  {
    id: 5,
    image: "",
    product_ID: "9498740",
    salePrice: "1099",
    name: "Daenerys",
    price: "999",
    qty: 10,
    status: "Available",
  },
];
const Products = () => {
  const { setCheckedItems, setCategorySelect, checkedItems, setTitle } =
    useContext(MyContext);
  const navigate = useNavigate();
  const handleProductDetails = (product) => {
    if (product) {
      navigate(`/products/id=${product}`);
      setTitle(`Product ID - ${product}`);
    }
  };
  const addProducts = () => {
    navigate(`/products/add-products`);
    setTitle(`Add Products`);
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
          {rows.map((val, i) => (
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
                {val.id}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[126px]">
                {val.image}
              </div>
              <div
                onClick={() => handleProductDetails(val.product_ID)}
                className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline cursor-pointer w-[136px]"
              >
                {val.product_ID}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[158px]">
                {val.name}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[122px]">
                {val.qty}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[171px]">
                {val.price}
              </div>
              <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[104px]">
                {val.salePrice}
              </div>
              <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[109px]">
                <span className="font-medium font-poppins leading-5 text-sm rounded-lg text-[#5DB505]">
                  {val.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
