import { Check } from "@mui/icons-material";

const CheckBox = (props) => {
  return (
    <>
      <label className="inline-flex items-center">
        <div className="relative inline-block w-5 h-5">
          <input
            type="checkbox"
            className={`peer h-5 w-5 border opacity-0 border-[#C4C4C4] rounded transition-colors duration-150 ease-in-out${props.inputStyle}`}
            checked={props.isChecked}
            onChange={props.handleCheckBox}
          />
          <span
            className={`absolute bg-white w-5 h-5 border-2 rounded-sm inset-0 border-[#C4C4C4] flex items-center justify-center ${props.checkStyle}`}
          >
            {props.isChecked && <Check sx={{width:"16px"}} className="text-[#0FB001]" />}
          </span>
        </div>
      </label>
    </>
  );
};
export default CheckBox;
