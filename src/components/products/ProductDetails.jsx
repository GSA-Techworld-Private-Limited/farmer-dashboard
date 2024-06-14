import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { baseUrl, fetchProducts, token } from "../api/auth";
const ProductDetails = () => {
  const { product_id } = useParams();
  const { setTitle, setProducts } = useContext(MyContext);
  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    if (product_id) {
      const fetchProductDetails = async () => {
        try {
          const res = await axios.get(
            `${baseUrl}superadmin/get-products-dashboard/${product_id}/`,
            {
              Authorization: `token ${token}`,
            }
          );
          setProductDetails(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProductDetails();
    }
    console.log("id", product_id);
  }, [product_id]);
  console.log(productDetails);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };
  const editProduct = async () => {
    try {
      const res = await axios.patch(
        `${baseUrl}superadmin/get-products-dashboard/${product_id}/`,
        productDetails,
        {
          Authorization: `token ${token}`,
        }
      );
      console.log(res);
      fetchProducts(setProducts);
      alert(res);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
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
        <CommonBtn
          clickEvent={editProduct}
          btntext="Edit"
          style="bg-[#05A3E7]"
        />
      </div>
      <form className="overflow-auto">
        <div className="flex gap-[70px]">
          <div className="w-full">
            <p className="text-black text-sm font-semibold mb-6 font-poppins">
              Product Images
            </p>
            <div className="grid grid-cols-3 gap-x-3 gap-y-6">
              {productDetails &&
                productDetails.product_galleries.map((val) => (
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
                name="name"
                onChange={handleInput}
                value={productDetails && productDetails.name}
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
                  <SelectValue
                    placeholder={
                      productDetails && productDetails.category_names[0]
                    }
                  />
                </SelectTrigger>
                <SelectContent width="w-[369px] w-[99.7%] border border-t-0 border-[#DDDDDD] rounded-md !bg-white">
                  {productDetails &&
                    productDetails.category_names.map((val) => (
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
                name="actual_price"
                onChange={handleInput}
                value={productDetails && productDetails.actual_price}
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
                name="selling_price"
                onChange={handleInput}
                value={productDetails && productDetails.selling_price}
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
                name="quantity"
                onChange={handleInput}
                value={productDetails && productDetails.quantity}
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
                name="description"
                onChange={handleInput}
                id="Product-des"
                placeholder="Write here..."
                value={productDetails && productDetails.description}
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
