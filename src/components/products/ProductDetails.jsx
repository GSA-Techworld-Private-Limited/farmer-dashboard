import { ArrowBack } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import demoCrop from "../../assets/images/png/demo-crop.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const ProductDetails = () => {
  const { Product_id } = useParams();
  const { setTitle, productDetails, setProductDetails } = useContext(MyContext);
  console.log(productDetails);
  return (
    <div className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex mb-4 justify-between">
        <Link to="/products">
          <button
            onClick={() => setTitle("Products")}
            className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
          >
            <ArrowBack />
            <span>Back</span>
          </button>
        </Link>
        <CommonBtn btntext="Edit" style="bg-[#05A3E7]" />
      </div>
      <form className="overflow-auto">
        <div className="flex gap-[70px]">
          <div className="w-full">
            <p className="text-black text-sm font-semibold mb-6 font-poppins">
              Product Images
            </p>
            <div className="grid grid-cols-3 gap-x-3 gap-y-6">
              {productDetails.product_galleries.map((val) => (
                <img
                  className="w-full"
                  src={val.image.replace(
                    "http://localhost:8000/",
                    "http://142.93.223.45:8005/"
                  )}
                  alt="demoCrop"
                />
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="text-black text-sm font-semibold mb-6 font-poppins">
              Product Details
            </p>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Product-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Product Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                id="Product-name"
                value={productDetails.name}
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Product-category"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Category<span className="text-[#FD5353]">*</span>
              </label>
              <Select>
                <SelectTrigger className="w-full text-[#525153] pl-5 font-poppins bg-white border border-[#DDDDDD] rounded-md !text-sm">
                  <SelectValue placeholder={productDetails.category_names[0]} />
                </SelectTrigger>
                <SelectContent width="w-[369px] w-[99.7%] border border-t-0 border-[#DDDDDD] rounded-md !bg-white">
                  {productDetails.category_names.map((val) => (
                    <SelectItem
                      color="text-[#525153] bg-white pl-4 font-poppins !text-sm"
                      value={val}
                    >
                      {val}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Product-price"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Actual Price*<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="Product-price"
                value={productDetails.actual_price}
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Product-sale-price"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Selling Price<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                value={productDetails.selling_price}
                id="Product-sale-price"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Product-qty"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Quantity<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                value={productDetails.quantity}
                id="Product-qty"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Product-des"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Description<span className="text-[#FD5353]">*</span>
              </label>
              <textarea
                type="date"
                id="Product-des"
                placeholder="Write here..."
                value={productDetails.description}
                className="py-[13px] h-[166px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductDetails;
