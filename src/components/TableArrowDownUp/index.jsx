import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const TableArrowDownUp = () => {
  return (
    <div className="flex flex-col ml-[4px] cursor-pointer">
      <KeyboardArrowUpIcon className="!w-[16px] !h-[12px] relative bottom-[-2px]" />
      <KeyboardArrowDownIcon className="!w-[16px] !h-[12px] relative top-[-2px]" />
    </div>
  );
};
export default TableArrowDownUp;