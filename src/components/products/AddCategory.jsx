import React, { useContext, useState, useRef } from "react";
import closeIcon from "../../assets/images/svg/close.svg";
import dummyImage from "../../assets/images/png/image-skeletion.png";
import { baseUrl, fetchCategories } from "../api/auth";
import axios from "axios";
import MyContext from "../context/ContextStore";
import { toast } from "react-toastify";
const AddCategory = (props) => {
  const fileInputRef = useRef(null);
  const { setCategories } = useContext(MyContext);
  const [categoryData, setCategoryData] = useState({
    name: "",
    image: null,
  });
  const addCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", categoryData.name);
    formData.append("image", categoryData.image);
    const token = sessionStorage.getItem("token");
    if (categoryData.image && categoryData.name) {
      try {
        const res = await axios.post(
          `${baseUrl}superadmin/add-category-dashboard/`,
          formData,
          {
            Authorization: `token ${token}`,
          }
        );
        console.log(res);
        toast.success("Category Added Successfully!", {
          theme: "light",
        });
        setCategoryData({
          name: "",
          image: null,
        });
        props.setCategory(false);
        fetchCategories(setCategories);
      } catch (error) {
        console.log(error);
        toast.error(error.message, {
          theme: "light",
        });
      }
    } else {
      toast.warning("Fill required field", {
        theme: "light",
      });
    }
  };
  const handleInput = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setCategoryData({
        ...categoryData,
        [name]: files[0],
      });
    } else {
      setCategoryData({
        ...categoryData,
        [name]: value,
      });
    }
  };
  const handleRemoveImage = () => {
    setCategoryData({ ...categoryData, image: null });
    fileInputRef.current.value = null;
  };
  console.log(categoryData);
  return (
    <div>
      <div className="flex items-center duration-100 justify-center fixed inset-0">
        <div
          onClick={() => props.setCategory(false)}
          className="fixed inset-0 backdrop-blur-sm bg-[#3F7E00] bg-opacity-15"
        ></div>
        <div className="w-full max-w-[598px] mx-auto pb-[42px] relative z-10 px-[53px] pt-[18px] bg-white rounded-3xl">
          <button
            onClick={() => props.setCategory(false)}
            className="rounded-full absolute top-6 right-9"
          >
            <img src={closeIcon} alt="close icon" />
          </button>
          <p className="text-[#3F7E00] text-2xl font-semibold font-poppins text-center leading-9">
            Add Category
          </p>
          <div className="pt-10 mb-6">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Category-name"
                className="text-sm text-[#323332] font-poppins leading-5 mb-2"
              >
                Category Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                required
                type="text"
                id="Category-name"
                name="name"
                onChange={handleInput}
                value={categoryData.name}
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
          <div className="mb-10">
            <div className="inline-block">
              <p className="text-sm font-poppins leading-5 text-[#323332]">
                Upload Pic <span className="text-[#FD5353]">*</span>
              </p>
              <div className="border border-[#E3E3E3] rounded-lg px-4 py-2.5 mt-3">
                <img
                  className="mb-7 rounded w-16 h-16 object-cover"
                  src={
                    categoryData.image
                      ? URL.createObjectURL(categoryData.image)
                      : dummyImage
                  }
                  alt="dummyImage"
                />
                <div className="flex items-center gap-2.5">
                  <div className="relative overflow-hidden">
                    <input
                      type="file"
                      id="cate-id"
                      name="image"
                      required
                      ref={fileInputRef}
                      onChange={handleInput}
                      className="leading-5 absolute opacity-0 inset-0 pointer-events-none w-[108px] text-center text-xs text-white font-poppins font-medium py-2.5 px-2 rounded-[8px] bg-[#787878]"
                    />
                    <label
                      htmlFor="cate-id"
                      className="leading-5 w-[108px] inline-block cursor-pointer text-center text-xs text-white font-poppins font-medium py-2.5 px-2 rounded-[8px] bg-[#787878]"
                    >
                      Choose File
                    </label>
                  </div>
                  <button
                    onClick={handleRemoveImage}
                    className="leading-5 w-[108px] text-center text-xs bg-[#FFEAEA] font-poppins font-medium py-2.5 px-2 rounded-[8px] text-[#FD5353]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={addCategory}
            className="py-[18px] px-16 leading-6 text-sm text-white font-poppins rounded-[8px] bg-[#3F7E00]"
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
