import { SearchRounded } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonBtn from "../common/CommonBtn";
import MyContext from "../context/ContextStore";
import CheckBox from "../common/CheckBox";
import CouponOverlay from "./CouponOverlay";
import BannerOverlay from "./BannerOverlay";
import { formatDateTime } from "../experts/Experts";
import { exportData } from "./../utils/export";
import { handleCheckBoxChange } from "../utils/handleCheckBox";
import SearchInput from "../SearchInput";
const columns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "Date", width: 126 },
  { headerName: "Coupon ID", width: 136 },
  { headerName: "Coupon Name", width: 158 },
  { headerName: "Start Date", width: 122 },
  { headerName: "Expiry Date", width: 172 },
  { headerName: "Status", width: 104 },
];
const BannerColumns = [
  { headerName: "SL. No", width: 72 },
  { headerName: "Date", width: 126 },
  { headerName: "Banner ID", width: 136 },
  { headerName: "Banner Name", width: 158 },
  { headerName: "Start Date", width: 122 },
  { headerName: "Expiry Date", width: 172 },
  { headerName: "Status", width: 104 },
];

const rows = [
  {
    id: 1,
    DOJ: "25/09/23",
    banner_id: "9498740",
    name: "Diwali Coupon",
    startDate: "25/09/23",
    expDate: "25/09/23",
    status: "active",
  },
  {
    id: 2,
    DOJ: "25/09/23",
    banner_id: "9498740",
    name: "Diwali Coupon",
    startDate: "25/09/23",
    expDate: "25/09/23",
    status: "active",
  },
  {
    id: 3,
    DOJ: "25/09/23",
    banner_id: "9498740",
    name: "Diwali Coupon",
    startDate: "25/09/23",
    expDate: "25/09/23",
    status: "active",
  },
  {
    id: 4,
    DOJ: "25/09/23",
    banner_id: "9498740",
    name: "Diwali Coupon",
    startDate: "25/09/23",
    expDate: "25/09/23",
    status: "active",
  },
  {
    id: 5,
    DOJ: "25/09/23",
    banner_id: "9498740",
    name: "Diwali Coupon",
    startDate: "25/09/23",
    expDate: "25/09/23",
    status: "Expired",
  },
];
const Offers = () => {
  const {
    setTitle,
    setCheckedItems,
    checkedItems,
    setCategorySelect,
    couponData,
    setExportLayer,
    setDataForExport,bannerData
  } = useContext(MyContext);
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState(false);
  const [banner, setBanner] = useState(false);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [filteredBanners, setFilteredBanners] = useState([]);
  const handleViewAndEdit = (id, name,tag) => {
    if(tag==="coupon"){
      navigate(`/offers/${id}`);
    }else if(tag==="banner"){
      navigate(`/offers/banner/${id}`);
    }
    setTitle(name);
  };
  const [offerTabs, setOfferTabs] = useState("coupon");
  const handleOfferSearch = (results) => {
    setFilteredOffers(results);
  };
  const handleBannerSearch = (results) => {
    setFilteredBanners(results);
  };
  const showOverlay = (data) => {
    setExportLayer(true);
    setDataForExport(data);
  };
  console.log(bannerData);
  return (
    <div className="h-[calc(100vh-76px)] flex flex-col w-full">
      <div className="flex items-center gap-10 pt-6 px-10">
        <button
          onClick={() => setOfferTabs("coupon")}
          className={`text-[#AAAAAA] text-2xl leading-9 font-poppins relative font-semibold ${
            offerTabs === "coupon" &&
            "!text-[#336205] after:absolute after:w-4/5 after:bg-[#336205] after:h-1 after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-1"
          }`}
        >
          Coupons
        </button>
        <button
          onClick={() => setOfferTabs("banners")}
          className={`text-[#AAAAAA] text-2xl leading-9 font-poppins relative font-semibold ${
            offerTabs === "banners" &&
            "!text-[#336205] after:absolute after:w-4/5 after:bg-[#336205] after:h-1 after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-1"
          }`}
        >
          Banners
        </button>
      </div>
      {offerTabs === "coupon" ? (
        <div>
          <div className="pt-9 px-10 w-full ">
            <div className="flex mb-7 justify-between">
              <div className="flex items-center border border-[#EEEEEE] overflow-hidden rounded-md w-[350px]">
                <label htmlFor="search" className="px-[18px] text-[#4D44B5]">
                  <SearchRounded />
                </label>
                <SearchInput
                  items={couponData}
                  onSearchResults={handleOfferSearch}
                />
              </div>
              <div className="flex items-center gap-4">
                <CommonBtn
                  clickEvent={() => setCoupon(true)}
                  btntext="+ Add Coupon"
                  style="bg-[#FF7D24]"
                />
                <CommonBtn
                  clickEvent={() => showOverlay(couponData)}
                  btntext="Export"
                  style="bg-[#444444]"
                />
              </div>
            </div>
          </div>
          <div className="w-[calc(100vw-275px)] 2xl:w-full overflow-auto">
            <div className="w-[calc(1440px-275px)] 2xl:w-full pb-2">
              <div className="flex items-center gap-2 bg-[#EAFFD4]">
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
                {filteredOffers && filteredOffers.length > 0 ? (
                  filteredOffers.map((val, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 hover:bg-[#f3f1f1] duration-300"
                    >
                      <div className="px-4 h-5">
                        <CheckBox
                          isChecked={checkedItems[val.coupon_code] || false}
                          handleCheckBox={() =>
                            handleCheckBoxChange(
                              val.coupon_code,
                              setCheckedItems,
                              setCategorySelect
                            )
                          }
                        />
                      </div>
                      <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[72px]">
                        {i + 1}
                      </div>
                      <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[126px]">
                        {formatDateTime(val.starts_at)}
                      </div>
                      <div
                        onClick={() =>
                          handleViewAndEdit(val.coupon_code, val.name,"coupon")
                        }
                        className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] cursor-pointer underline w-[136px]"
                      >
                        {val.coupon_code}
                      </div>
                      <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[158px]">
                        {val.name}
                      </div>
                      <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[122px]">
                        {formatDateTime(val.starts_at)}
                      </div>
                      <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[171px]">
                        {formatDateTime(val.expiry_at)}
                      </div>
                      <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                        <span
                          className={`text-white font-medium font-poppins leading-5 text-sm px-7 py-[5px] rounded-lg bg-[#5DB505] ${
                            val.is_active ? "bg-[#5DB505]" : "bg-[#FD5353]"
                          }`}
                        >
                          {val.is_active ? "Active" : "Unactive"}
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
        </div>
      ) : offerTabs === "banners" ? (
        <div>
          <div className="pt-9 px-10 w-full ">
            <div className="flex mb-7 justify-between">
              <div className="flex items-center border border-[#EEEEEE] overflow-hidden rounded-md w-[350px]">
                <label htmlFor="search" className="px-[18px] text-[#4D44B5]">
                  <SearchRounded />
                </label>
                <SearchInput
                  items={bannerData}
                  onSearchResults={handleBannerSearch}
                />
              </div>
              <div className="flex items-center gap-4">
                <CommonBtn
                  clickEvent={() => setBanner(true)}
                  btntext="+ Add Banner"
                  style="bg-[#FF7D24]"
                />
                <CommonBtn
                  clickEvent={() => showOverlay(bannerData)}
                  btntext="Export"
                  style="bg-[#444444]"
                />
              </div>
            </div>
          </div>
          <div className="w-full overflow-auto">
            <div className="flex items-center gap-2 bg-[#EAFFD4]">
              <div className="px-[26px] h-5"></div>
              {BannerColumns.map((val, i) => (
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
              {filteredBanners && filteredBanners.length > 0 ? (
                filteredBanners.map((val, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 hover:bg-[#f3f1f1] duration-300"
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
                      {i+1}
                    </div>
                    <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[126px]">
                      {formatDateTime(val.created_at)}
                    </div>
                    <div
                      onClick={() => handleViewAndEdit(val.bannerID, val.banner_name,"banner")}
                      className="py-1 text-sm font-semibold font-poppins leading-5 text-[#438700] cursor-pointer underline w-[136px]"
                    >
                      {val.bannerID}
                    </div>
                    <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[158px]">
                      {val.banner_name}
                    </div>
                    <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[122px]">
                      {formatDateTime(val.from_date)}
                    </div>
                    <div className="py-1 text-sm font-semibold font-poppins leading-5 text-[#303972] w-[171px]">
                    {formatDateTime(val.to_date)}
                    </div>
                    <div className="py-1 text-sm font-semibold capitalize font-poppins leading-5 text-[#303972] w-[104px]">
                        <span
                          className={`text-white font-medium font-poppins leading-5 text-sm px-7 py-[5px] rounded-lg bg-[#5DB505] ${
                            val.status ? "bg-[#5DB505]" : "bg-[#FD5353]"
                          }`}
                        >
                          {val.status ? "Active" : "Unactive"}
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
      ) : (
        ""
      )}
      {coupon && <CouponOverlay setCoupon={setCoupon} />}
      {banner && <BannerOverlay setBanner={setBanner} />}
    </div>
  );
};

export default Offers;
