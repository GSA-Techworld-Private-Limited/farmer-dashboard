import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import dummyImage from "../../assets/images/png/image-skeletion.png";
import { baseUrl, fetchProducts, token } from "../api/auth";
import axios from "axios";
import CategoryDropDown from "../common/CategoryDropDown";
import { toast } from "react-toastify";
const AddProducts = () => {
  const navigate = useNavigate();
  const { setTitle, setProducts, categories } = useContext(MyContext);
  const [product_galleries, setProduct_galleries] = useState([]);
  const [detailsAdded, setDetailsAdded] = useState(false);
  const [product_id, setProduct_id] = useState();
  const [productData, setProductData] = useState({
    categories_galleries: [],
    name: "",
    quantity: "",
    description: "",
    actual_price: "",
    rating: "4.5",
    selling_price: "",
    total_sold: "0",
    is_popular: true,
  });
  const fileInputRef = useRef(null);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  const submitProduct = async (e) => {
    e.preventDefault();
    const {
      categories_galleries,
      name,
      quantity,
      description,
      actual_price,
      rating,
      selling_price,
      total_sold,
      is_popular,
    } = productData;
    const raw = JSON.stringify(productData);
    if (
      categories_galleries.length > 0 &&
      name &&
      quantity &&
      description &&
      actual_price &&
      rating &&
      selling_price &&
      total_sold &&
      is_popular
    ) {
      try {
        const res = await axios.post(
          `${baseUrl}superadmin/add-products-dashboard/`,
          raw,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `token ${token}`,
            },
          }
        );
        setDetailsAdded(true);
        fetchProducts(setProducts);
        console.log(res.data.product_id);
        setProduct_id(res.data.product_id);
        toast.success("First Step Completed Successfully", {
          theme: "light",
        });
        console.log(res);
      } catch (error) {
        console.log(error);
        alert(error.message);
        toast.error(error.message, {
          theme: "light",
        });
      }
    } else {
      toast.warning("Fill all the required field", {
        theme: "light",
      });
    }
  };

  // add images in product with product_id
  const handleImageInput = (e) => {
    const file = e.target.files[0];
    if (file && product_galleries.length < 5) {
      const newImage = {
        id: Date.now(),
        image: file,
        is_featured: true,
      };
      setProduct_galleries((prevData) => [...prevData, newImage]);
    }
  };
  const handleRemoveImage = (id) => {
    setProduct_galleries((prevData) => prevData.filter((img) => img.id !== id));
    fileInputRef.current.value = null;
  };
  const addImages = async () => {
    // const product_id = "7745db07-b";
    if (product_id) {
      if (product_galleries.length > 0) {
        const formData = new FormData();
        product_galleries.forEach((imageObject) => {
          formData.append(`is_featured`, imageObject.is_featured);
          formData.append(`image`, imageObject.image);
        });
        try {
          const res = await axios.post(
            `${baseUrl}superadmin/add-products-images/${product_id}/`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `token ${token}`,
              },
            }
          );
          toast.success("Product added successfully", {
            theme: "light",
          });
          fetchProducts(setProducts);
          setProduct_galleries([]);
          navigate("/products");
          setTitle("Products");
          fileInputRef.current.value = null;
        } catch (err) {
          alert(err);
          toast.error(err, {
            theme: "light",
          });
        }
      } else {
         toast.warning("Add Images First!", {
          theme: "light",
        });
      }
    } else {
      toast.warning("Add Product details first", {
        theme: "light",
      });
    }
  };
  console.log(productData);
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
        {detailsAdded ? (
          <CommonBtn
            clickEvent={addImages}
            btntext="Add Images & Finish"
            style="bg-[#FF7D24]"
          />
        ) : (
          <CommonBtn
            clickEvent={submitProduct}
            btntext="Next"
            style="bg-[#FF7D24]"
          />
        )}
      </div>
      {!detailsAdded ? (
        <div className="w-full overflow-auto">
          <div className="flex gap-[70px]">
            <div className="w-full">
              <div className="flex flex-col mb-2">
                <label
                  htmlFor="Product-name"
                  className="text-sm text-[#525153] font-poppins leading-5 mb-2"
                >
                  Product Name<span className="text-[#FD5353]">*</span>
                </label>
                <input
                  onChange={handleInput}
                  value={productData.name}
                  name="name"
                  type="text"
                  id="Product-name"
                  placeholder="James"
                  className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label
                  htmlFor="Product-price"
                  className="text-sm text-[#525153] font-poppins leading-5 mb-2"
                >
                  Actual Price<span className="text-[#FD5353]">*</span>
                </label>
                <input
                  type="number"
                  onChange={handleInput}
                  value={productData.actual_price}
                  name="actual_price"
                  id="Product-price"
                  placeholder="+123456789"
                  className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                />
              </div>
              <div className="flex flex-col mb-8">
                <label
                  htmlFor="Product-qty"
                  className="text-sm text-[#525153] font-poppins leading-5 mb-2"
                >
                  Quantity<span className="text-[#FD5353]">*</span>
                </label>
                <input
                  type="number"
                  onChange={handleInput}
                  value={productData.quantity}
                  name="quantity"
                  id="Product-qty"
                  placeholder="+123456789"
                  className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col mb-2">
                <label
                  htmlFor="Product-sale-price"
                  className="text-sm text-[#525153] font-poppins leading-5 mb-2"
                >
                  Selling Price<span className="text-[#FD5353]">*</span>
                </label>
                <input
                  onChange={handleInput}
                  value={productData.selling_price}
                  name="selling_price"
                  type="number"
                  id="Product-sale-price"
                  placeholder="+123456789"
                  className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                />
              </div>
              <div className="flex flex-col mb-2">
                <p className="text-sm text-[#525153] font-poppins leading-5 mb-2">
                  Categories<span className="text-[#FD5353]">*</span>
                </p>
                <CategoryDropDown
                  categories={categories}
                  setProductData={setProductData}
                  productData={productData}
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
                  onChange={handleInput}
                  value={productData.description}
                  name="description"
                  type="date"
                  id="Product-des"
                  placeholder="Write here..."
                  className="py-[13px] h-[166px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="inline-block">
            <p className="text-sm font-poppins leading-5 text-[#4D44B5]">
              Upload Pic (Max 5)<span className="text-[#FD5353]">*</span>
            </p>
            <div className="border border-[#E3E3E3] min-w-[250px] rounded-lg px-4 py-2.5 mt-3">
              <div className="flex  gap-2 mb-7">
                {product_galleries.length === 0 && (
                  <div className="rounded w-16 h-16">
                    <img
                      className="rounded w-16 h-16 object-cover"
                      src={dummyImage}
                      alt="Dummy"
                    />
                  </div>
                )}
                {product_galleries.map((img) => (
                  <div key={img.id} className="flex flex-col">
                    <img
                      className="rounded w-16 h-16 object-cover"
                      src={URL.createObjectURL(img.image)}
                      alt="Product"
                    />
                    <button
                      onClick={() => handleRemoveImage(img.id)}
                      className="mt-1 text-xs bg-[#FFEAEA] font-poppins rounded font-medium py-1 px-2 text-[#FD5353]"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div
                className={`flex items-center gap-2.5 ${
                  product_galleries.length >= 5 &&
                  "pointer-events-none opacity-70"
                }`}
              >
                <div className="relative overflow-hidden">
                  <input
                    type="file"
                    id="cate-id"
                    accept="image/*"
                    name="image"
                    required
                    ref={fileInputRef}
                    onChange={handleImageInput}
                    className="leading-5 absolute opacity-0 inset-0 pointer-events-none w-[108px] text-center text-xs text-white font-poppins font-medium py-2.5 px-2 rounded-[8px] bg-[#787878]"
                  />
                  <label
                    htmlFor="cate-id"
                    className="leading-5 w-[108px] inline-block cursor-pointer text-center text-xs text-white font-poppins font-medium py-2.5 px-2 rounded-[8px] bg-[#787878]"
                  >
                    Choose File
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProducts;
