import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import { baseUrl, fetchEmployees, token } from "../api/auth";
import dummyImage from "../../assets/images/png/image-skeletion.png";
import axios from "axios";
import { toast } from "react-toastify";

const AddEmployees = () => {
  const { setTitle, setEmployees } = useContext(MyContext);
  const fileInputRef = useRef(null);
  const [isAdded, setIsAdded] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    name: "",
    contact_no: "",
    other_contact_no: "",
    date_of_joined: "",
    email: "",
    state: "",
    city: "",
    pincode: "",
    image: null,
  });
  const {
    name,
    contact_no,
    other_contact_no,
    date_of_joined,
    email,
    state,
    city,
    pincode,
    image,
  } = employeeData;
  const submitEmplyoee = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // Append text data
    Object.keys(employeeData).forEach((key) => {
      if (key !== "image") {
        formData.append(key, employeeData[key]);
      }
    });
    // Append the image file
    if (employeeData.image) {
      formData.append("image", employeeData.image);
    }
    if (
      name &&
      contact_no &&
      other_contact_no &&
      date_of_joined &&
      email &&
      state &&
      city &&
      pincode &&
      image
    ) {
      try {
        const res = await axios.post(
          `${baseUrl}superadmin/add-employee-dashboard/`,
          formData,
          {
            Authorization: `token ${token}`,
          }
        );
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), [2000]),
          fetchEmployees(setEmployees);
        setEmployeeData({
          name: "",
          contact_no: "",
          other_contact_no: "",
          date_of_joined: "",
          email: "",
          state: "",
          city: "",
          pincode: "",
          image: null,
        });
        fileInputRef.current.value = null;
        toast.success("Employee Added Successfully!", {
          theme: "light",
        });
        console.log(res);
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
      setEmployeeData({
        ...employeeData,
        [name]: files[0],
      });
    } else {
      setEmployeeData({ ...employeeData, [name]: value });
    }
  };
  const handleRemoveImage = () => {
    setEmployeeData({ ...employeeData, image: null });
    fileInputRef.current.value = null;
  };
  console.log(employeeData);
  return (
    <div className="py-6 px-10 w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex mb-4 justify-between">
        <Link to="/employees">
          <button
            onClick={() => setTitle("Employees")}
            className="flex items-center gap-[14px] text-base font-semibold text-[#303972] leading-6 font-poppins"
          >
            <ArrowBack />
            <span>Back</span>
          </button>
        </Link>
        <CommonBtn
          clickEvent={submitEmplyoee}
          btntext={isAdded ? "Added" : "+ Add Employee"}
          style={
            isAdded
              ? "bg-transparent border border-[#3F7E00] !text-[#3F7E00]"
              : "bg-[#FF7D24]"
          }
        />
      </div>
      <div className="w-full overflow-auto">
        <div className="flex gap-[70px]">
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Employee-name"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Employee Name<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleInput}
                value={employeeData.name}
                id="Employee-name"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Employee-no"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Contact Number<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                id="Employee-no"
                name="contact_no"
                onChange={handleInput}
                value={employeeData.contact_no}
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Employee-email"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Email ID<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={employeeData.email}
                id="Employee-email"
                placeholder="James@gmail.com"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Employee-state"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                State<span className="text-[#FD5353]">*</span>
              </label>
              <input
                name="state"
                onChange={handleInput}
                value={employeeData.state}
                type="text"
                id="Employee-state"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="inline-block">
              <p className="text-sm font-poppins leading-5 text-[#323332]">
                Upload Pic <span className="text-[#FD5353]">*</span>
              </p>
              <div className="border border-[#E3E3E3] rounded-lg px-4 py-2.5 mt-3">
                <img
                  className="mb-7 rounded w-16 h-16 object-cover"
                  src={
                    employeeData.image
                      ? URL.createObjectURL(employeeData.image)
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
          <div className="w-full">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Employee-date"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Date of Joining<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="date"
                name="date_of_joined"
                onChange={handleInput}
                value={employeeData.date_of_joined}
                id="Employee-date"
                placeholder="James"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Employee-no-two"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Contact Number 2<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                name="other_contact_no"
                onChange={handleInput}
                value={employeeData.other_contact_no}
                id="Employee-no-two"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Employee-city"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                City<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="text"
                name="city"
                onChange={handleInput}
                value={employeeData.city}
                id="Employee-city"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="Employee-zip"
                className="text-sm text-[#525153] font-poppins leading-5 mb-2"
              >
                Zip Code<span className="text-[#FD5353]">*</span>
              </label>
              <input
                type="number"
                name="pincode"
                onChange={handleInput}
                value={employeeData.pincode}
                id="Employee-zip"
                placeholder="+123456789"
                className="py-[13px] focus:border-[#525153] outline-none duration-200 text-sm w-full text-[#6C757D] placeholder:text-[#6C757D] font-poppins leading-5 px-5 rounded-md border border-[#DDDDDD]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployees;
