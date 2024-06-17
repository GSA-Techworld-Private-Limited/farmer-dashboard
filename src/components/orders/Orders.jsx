import React, { useContext, useState } from "react";
import CommonBtn from "../common/CommonBtn";
import { SearchRounded } from "@mui/icons-material";
import CheckBox from "../common/CheckBox";
import MyContext from "../context/ContextStore";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/images/svg/close.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { formatDateTime } from "../experts/Experts";
import { exportData } from "../utils/export";
import SearchInput from "../SearchInput";
const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "Date", width: 94 },
  { headerName: "Order ID", width: 118 },
  { headerName: "Product Name", width: 135 },
  { headerName: "Qty", width: 58 },
  { headerName: "Ordered By", width: 112 },
  { headerName: "Total Price", width: 121 },
  { headerName: "Payment Status", width: 152 },
  { headerName: "Order Status", width: 121 },
];

const Orders = () => {
  const {
    setCheckedItems,
    setCategorySelect,
    checkedItems,
    orders,
    setExportLayer,
    setDataForExport,
  } = useContext(MyContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const handleExpertDetails = (user) => {};
  const handleSearchResults = (results) => {
    setFilteredProducts(results);
  };
  const showOverlay = () => {
    setExportLayer(true);
    setDataForExport(orders);
  };
  return (
    <div className="w-full h-[calc(100vh-76px)] flex flex-col">
      <div className="flex justify-between items-center py-5 px-7 pb-7">
        <div className="flex items-center border border-[#EEEEEE] overflow-hidden rounded-md w-[350px]">
          <label htmlFor="search" className="px-[18px] text-[#4D44B5]">
            <SearchRounded />
          </label>
          <SearchInput items={orders} onSearchResults={handleSearchResults} />
        </div>
        <p className="text-sm font-semibold leading-5 text-black font-poppins">
          Add Transaction ID
        </p>
        <div className="flex items-center gap-4">
          <CommonBtn
            clickEvent={() => setStatus(true)}
            btntext="Update Status"
            style="bg-[#5DB505]"
          />
          <CommonBtn
            clickEvent={showOverlay}
            btntext="Export"
            style="bg-[#444444]"
          />
        </div>
      </div>
      <div className="w-[calc(100vw-275px)] 2xl:w-full overflow-auto">
        <div className="w-[calc(1440px-275px)] 2xl:w-full pb-2">
          <div className="flex items-center gap-3 bg-[#EAFFD4]">
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
                  className="flex items-center gap-3 hover:bg-[#f3f1f1] duration-300"
                >
                  <div className="px-4 h-5">
                    <CheckBox
                      isChecked={checkedItems[val.order_id] || false}
                      handleCheckBox={() =>
                        handleCheckBoxChange(
                          val.order_id,
                          setCheckedItems,
                          setCategorySelect
                        )
                      }
                    />
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[72px]">
                    {i + 1}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[94px]">
                    {formatDateTime(val.order_placed_date)}
                  </div>
                  <div
                    onClick={() => handleExpertDetails(val.order_id)}
                    className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] underline cursor-pointer w-[118px]"
                  >
                    {val.order_id}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[135px]">
                    {val.product}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[58px]">
                    {val.quantity}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[112px]">
                    {val.orderBy}
                  </div>
                  <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[121px]">
                    {val.price}
                  </div>

                  <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[152px]">
                    <span
                      className={`text-white w-[105px] font-medium font-poppins leading-5 text-sm px-2 inline-block text-center py-[5px] rounded-lg bg-[#5DB505] ${
                        val.is_paid ? "bg-[#5DB505]" : "bg-[#FD5353]"
                      }`}
                    >
                      {val.is_paid ? "Paid" : "Unpaid"}
                    </span>
                  </div>
                  <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[121px]">
                    <span
                      className={`text-white w-[105px] font-medium font-poppins leading-5 text-sm px-2 inline-block text-center py-[5px] rounded-lg bg-[#5DB505] ${
                        val.order_status === "pending"
                          ? "bg-[#FD5353]"
                          : "bg-[#5DB505]"
                      }`}
                    >
                      {val.order_status}
                    </span>
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
      </div>
      <div
        className={`flex items-center duration-100 justify-center fixed inset-0 ${
          status
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setStatus(false)}
          className="fixed inset-0 backdrop-blur-sm bg-[#3F7E00] bg-opacity-15"
        ></div>
        <div className="w-full max-w-[598px] mx-auto pb-[42px] relative z-10 px-[53px] pt-[18px] bg-white rounded-3xl">
          <button
            onClick={() => setStatus(false)}
            className="rounded-full absolute top-6 right-9"
          >
            <img src={closeIcon} alt="close icon" />
          </button>
          <p className="text-[#3F7E00] text-2xl font-semibold font-poppins text-center leading-9">
            Update Status
          </p>
          <div className="flex space-x-[42px] mt-10">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tabs"
                value="tab1"
                checked={selectedTab === "tab1"}
                onChange={() => setSelectedTab("tab1")}
                className="mr-2.5 custom-radio"
              />
              <span className="text-2xl font-poppins leading-9 text-black">
                Order Status
              </span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tabs"
                value="tab2"
                checked={selectedTab === "tab2"}
                onChange={() => setSelectedTab("tab2")}
                className="mr-2.5 custom-radio"
              />
              <span className="text-2xl font-poppins leading-9 text-black">
                Payment Status
              </span>
            </label>
          </div>
          <div className="my-11">
            {selectedTab === "tab1" && (
              <div>
                <Select>
                  <SelectTrigger className="w-[369px]">
                    <SelectValue placeholder="Delivered" />
                  </SelectTrigger>
                  <SelectContent width="w-[369px]">
                    <SelectItem color="text-[#3F7E00]" value="resolved">
                      Delivered
                    </SelectItem>
                    <SelectItem color="text-[#FF3D00]" value="pending">
                      Pending
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            {selectedTab === "tab2" && (
              <div>
                <Select>
                  <SelectTrigger className="w-[369px]">
                    <SelectValue placeholder="Paid" />
                  </SelectTrigger>
                  <SelectContent width="w-[369px]">
                    <SelectItem color="text-[#3F7E00]" value="resolved">
                      Paid
                    </SelectItem>
                    <SelectItem color="text-[#FF3D00]" value="pending">
                      Unpaid
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          <button className="py-[18px] px-16 leading-6 text-base text-white font-poppins font-medium rounded-[8px] bg-[#5DB505]">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
