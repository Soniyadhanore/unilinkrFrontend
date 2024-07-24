/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";
import { ArrowsDownSVG,  } from "../../assets/images";
// Time
const FormParent = styled(FormControl)({
  marginBottom: 24,
  fieldset: {},
  "& .MuiFormLabel-asterisk": {
    color: "var(--red-700)",
  },
  "& .MuiFormLabel-root": {
    color: "var(--gray-900-02)",
    "&.Mui-focused": {
      color: "var(--gray-900-02)",
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: "0px",
    padding: "8px 16px",
    height: "24px",
    fontSize: "14px",
    lineHeight: "24px",
    color: "var(--gray-900-02)",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
    "&.Mui-disabled": {
      opacity: 1,
      "& .MuiInputBase-input": {
        color: "var(--gray_700)",
        zIndex: 1,
        "-webkit-text-fill-color": "var(--gray_700)",
      },
      "& svg": {
        opacity: 1,
        zIndex: 2,
      },
      "& fieldset": {
        backgroundColor: "var(--gray-100)",
        opacity: "1",
        zIndex: 0,
      },
      "&:hover fieldset": {
        opacity: "1",
        borderColor: "var(--gray-200)",
        backgroundColor: "var(--gray_100)",
      },
      "& img": {
        opacity: "1",
        zIndex: 1,
        cursor: "default",
      },
    },
    "& fieldset": {
      borderRadius: "8px",
      border: "none",
      top: "-10px",
    },
    "&:hover fieldset": {
      borderColor: "var(--gray-200)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--gray-200)",
      borderWidth: "1px",
    },
  },
  "&.focus-none .Mui-focused fieldset": {
    borderColor: "var(--gray-200)",
    borderWidth: "1px",
  },
  "&.focus-none .MuiOutlinedInput-root:hover fieldset": {
    borderColor: "var(--gray-200)",
    borderWidth: "1px",
  },
});
const CustomInput = styled(Select)({
  borderRadius: "0px",
  "&.time-select": {
    "& .MuiSelect-icon": {
      transform: "rotate(0)",
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: "0px",
  },
});
const CustomMenuItem = styled(MenuItem)({
  fontSize: "12px",
  lineHeight: "14.4px",
  paddingTop: "9px",
  paddingBottom: "9px",
  "&:hover": {
    backgroundColor: "var(--gray_100)",
  },
});
const selecttypes = {
  dropdown: ArrowsDownSVG,
  // time: Time,
};
const selecttypesclass = {
  dropdown: "dropdown-select",
  time: "time-select",
};
const SelectBoxSimple = ({
  options,
  multiple,
  error,
  size,
  value,
  disabled,
  selecttype,
  className,
}) => {
  const [selectValue, setSelectValue] = useState(value);
  const SelectIcon = selecttypes[selecttype] || ArrowsDownSVG;
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };
  return (
    <FormParent fullWidth size={size} className={className}>
      <CustomInput
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        multiple={multiple}
        value={selectValue}
        IconComponent={SelectIcon}
        disabled={disabled}
        onChange={handleChange}
        displayEmpty // This should be placed directly here, not in inputProps
        inputProps={{ "aria-label": "Without label" }}
        className={`${selecttypesclass[selecttype] || null} `}
      >
        {options.map((option) => (
          <CustomMenuItem key={option.value} value={option.value}>
            {option.label}
          </CustomMenuItem>
        ))}
      </CustomInput>
      {error && (
        <span className="text-sm text-red_500 absolute left-0 bottom-[-18px]">
          {error}
        </span>
      )}
    </FormParent>
  );
};
export { SelectBoxSimple };