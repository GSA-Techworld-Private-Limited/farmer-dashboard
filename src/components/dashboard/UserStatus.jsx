import React, { useContext } from "react";
import { FarmersIcon } from "../common/Icons";
import Chart from "./../Chart";
import MyContext from "../context/ContextStore";

const UserStatus = () => {
  const { stats, productListStats } = useContext(MyContext);

  return (
    <div className="py-7 pl-10 pr-12 w-full h-[calc(100vh-76px)] overflow-auto">
      <div className="grid grid-cols-3 w-[87%] mb-[50px] gap-x-[42px] gap-y-4">
        {stats &&
          Object.entries(stats).map(([key, value], i) => (
            <div
              key={i}
              className={`w-full h-[126px] gap-[9px] flex items-center justify-center rounded-[5px] ${
                key === "farmers"
                  ? "bg-farmer"
                  : key === "vendors"
                  ? "bg-vendors"
                  : key === "nursery"
                  ? "bg-nurseries"
                  : key === "employees"
                  ? "bg-employees"
                  : key === "experts"
                  ? "bg-experts"
                  : ""
              }`}
            >
              <FarmersIcon setColor={key} />
              <div>
                <p className="text-base leading-4 text-white font-poppins capitalize">
                  {key}
                </p>
                <p className="text-white font-poppins font-bold text-2xl leading-6 mt-[5px]">
                  {value}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-between">
        <div>
          <Chart />
        </div>
        <div className="w-[312px] px-[22px] pt-3 bg-[#F9F9F9] border border-[#c6c6c6] rounded-xl">
          <div className="flex items-center justify-between">
            <p className="text-[10px] opacity-0 pointer-events-none">
              {" "}
              View All
            </p>
            <p className="text-lg text-black leading-7 font-semibold font-poppins">
              Product List
            </p>
            <button className="text-[10px] underline text-[#303972] font-poppins font-semibold">
              View All
            </button>
          </div>
          <div className="flex justify-between border-b border-black border-opacity-50 pt-4">
            <p className="text-black leading-7 w-3/5 text-sm font-poppins font-semibold">
              Product Name
            </p>
            <p className="text-black leading-7 w-[38%] text-sm font-poppins font-semibold">
              Available Qty.
            </p>
          </div>
          <div className="flex flex-col h-[370px] overflow-auto gap-2 mt-2">
            {productListStats &&
              productListStats.map((val, i) => (
                <div key={i} className="flex justify-between">
                  <p className="text-black leading-7 w-3/5 text-sm font-poppins text-nowrap overflow-hidden text-ellipsis">
                    {val.name}
                  </p>
                  <p className="text-black leading-7 w-[38%] text-sm font-poppins">
                    {val.quantity}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
