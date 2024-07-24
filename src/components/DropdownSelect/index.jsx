/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { Input, Img, CheckBox } from "../../components";
import { styled } from "@mui/system";
import { ArrowsDownSVG, TimeSVG, SearchSVG } from "../../assets/images";
import { useTranslation } from "react-i18next";
const FormParent = styled(FormControl)({
  marginBottom: 0,
  fieldset: {},
  "& .MuiFormLabel-asterisk": {
    color: "var(--red_700)",
  },
  "& .MuiFormLabel-root": {
    color: "var(--black_900)",
    "&.Mui-focused": {
      color: "var(--black_900)",
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: "0px",
    padding: "5px 8px",
    height: "18px",
    minHeight: "18px",
    fontSize: "12px",
    lineHeight: "18px",
    color: "var(--black_900)",
    paddingRight: "30px",
    zIndex: 1,
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
    "& .MuiSelect-icon": {
      right: "8px",
      zIndex: 1,
    },
    "&.Mui-disabled": {
      opacity: 1,
      "& .MuiSelect-select": {
        color: "var(--gray_700)",
        zIndex: 1,
      },
      "& .MuiSelect-icon": {
        zIndex: 1,
        color: "var(--gray_700)",
        opacity: ".5",
      },
      "& fieldset": {
        borderColor: "var(--gray_200)",
        backgroundColor: "var(--gray_50)",
        opacity: "1",
        zIndex: 0,
      },
      "&:hover fieldset": {
        opacity: "1",
        borderColor: "var(--gray_200)",
        backgroundColor: "var(--gray_50)",
      },
      "& img": {
        opacity: ".5",
        cursor: "default",
      },
    },
    "& fieldset": {
      borderRadius: "4px",
      border: "1px solid transparent",
      backgroundColor: "transparent",
      top: "-10px",
      zIndex: 0,
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
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
  time: TimeSVG,
};
const selecttypesclass = {
  dropdown: "dropdown-select",
  time: "time-select",
};
const DropdownSelect = ({
  options,
  multiple,
  placeholder,
  error,
  size,
  value,
  disabled,
  selecttype,
  className,
  Dropdownname,
  search,
  showFavourites,
  backFavourites,
  startAdornment,
  selectclassName,
  withCheckbox,
  sx,
}) => {
  const { t } = useTranslation();
  const SelectIcon = selecttypes[selecttype] || ArrowsDownSVG;
  const [selectValue, setSelectValue] = useState(value || options[0].value);
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };
  const CustomInputValue = `${Dropdownname || ""} ${
    options.find((option) => option.value === selectValue)?.label || ""
  }`;
  return (
    <FormParent
      variant="outlined"
      fullWidth
      size={size}
      className={className}
      sx={sx}
    >
      <CustomInput
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        multiple={multiple}
        value={CustomInputValue}
        IconComponent={SelectIcon}
        startAdornment={startAdornment}
        placeholder="Select Patient"
        disabled={disabled}
        onChange={handleChange}
        displayEmpty // This should be placed directly here, not in inputProps
        inputProps={{ "aria-label": "Without label" }}
        className={`${selecttypesclass[selecttype] || null} ${selectclassName}`}
        renderValue={(selected) => selected}
      >
        {search ? (
          <Input
            className="mt-[-8px_!important] mb-[4px_!important] focus-none"
            size="small"
            placeholder={placeholder}
            startAdornment={<SearchSVG className="w-4 h-4" />}
          />
        ) : null}
        {showFavourites ? (
          <div className="px-4 py-2 flex items-center gap-2">
            <Img src="images/thunder-flash.svg" />
            <div className="w-full text-xs text-blue-500">
              {t("common.showFavourites")}
            </div>
            <Img src="images/img_arrowright_blue.svg" />
          </div>
        ) : null}
        {backFavourites ? (
          <div className="px-4 py-2 flex items-center gap-2">
            <Img src="images/img_arrowright_blue.svg" className="rotate-180" />
            <div className="w-full text-xs text-blue-500">
              {t("common.showAllMedications")}
            </div>
          </div>
        ) : null}
        {options.map((option) => (
          <CustomMenuItem
            key={option.value}
            value={option.value}
            className="text-[12px_!important]"
          >
            {withCheckbox ? (
              <CheckBox inputClassName="rounded text-green-100 m-0 cursor-pointer" />
            ) : null}
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
export { DropdownSelect };