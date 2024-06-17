import React, { useContext, useState } from "react";
import closeIcon from "../../assets/images/svg/close.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { exportData } from "../utils/export";
import MyContext from "../context/ContextStore";
const ExportOverlay = (props) => {
  const { dataForExport } = useContext(MyContext);
  const [file, setFile] = useState("pdf");
  const getFileType = (value) => {
    setFile(value);
  };
  const exportFile = () => {
    exportData(dataForExport, file);
  };
  return (
    <div>
      <div className="flex items-center duration-100 justify-center fixed inset-0 z-10">
        <div
          onClick={() => props.setExportLayer(false)}
          className="fixed inset-0 backdrop-blur-sm bg-[#3F7E00] bg-opacity-15"
        ></div>
        <div className="w-full max-w-[398px] mx-auto pb-6 relative z-10 px-6 pt-[18px] bg-white rounded-2xl">
          <button
            onClick={() => props.setExportLayer(false)}
            className="rounded-full absolute top-6 right-9"
          >
            <img src={closeIcon} alt="close icon" />
          </button>
          <p className="text-black mb-6 text-2xl font-semibold font-poppins text-center leading-9">
            Export
          </p>
          <Select onValueChange={getFileType}>
            <SelectTrigger className="w-[300px] py-2 !text-lg font-poppins">
              <SelectValue placeholder={file} />
            </SelectTrigger>
            <SelectContent width="w-[300px]">
              <SelectItem
                color="text-[#000] py-1 !text-lg font-poppins"
                value="pdf"
              >
                pdf
              </SelectItem>
              <SelectItem
                color="text-[#000] py-1 !text-lg font-poppins"
                value="xlsx"
              >
                xlsx
              </SelectItem>
              <SelectItem
                color="text-[#000] py-1 !text-lg font-poppins"
                value="xls"
              >
                xls
              </SelectItem>
            </SelectContent>
          </Select>
          <button
            onClick={exportFile}
            className="py-[14px] mt-6 px-16 leading-6 text-sm text-white font-poppins rounded-[8px] bg-[#3F7E00]"
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportOverlay;
