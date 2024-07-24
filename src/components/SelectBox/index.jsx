/* eslint-disable react/prop-types */
import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";
import { ArrowsDownSVG } from "../../assets/images";
import { Img, SearchInputComponent } from "components";
import { useTranslation } from "react-i18next";
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
        borderColor: "var(--gray-200)",
        backgroundColor: "var(--gray_50)",
        opacity: "1",
        zIndex: 0,
      },
      "&:hover fieldset": {
        opacity: "1",
        borderColor: "var(--gray-200)",
        backgroundColor: "var(--gray_50)",
      },
      "& img": {
        opacity: "1",
        zIndex: 1,
        cursor: "default",
      },
    },
    "& fieldset": {
      borderRadius: "8px",
      border: "1px solid var(--gray-200)",
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
const SelectBox = ({
  options,
  searchInput,
  multiple,
  error,
  size,
  value,
  disabled,
  selecttype,
  className,
  onSelect,
  classNameInner,
}) => {
  const { t } = useTranslation();
  const SelectIcon = selecttypes[selecttype] || ArrowsDownSVG;
  const handleChange = (event, data) => {
    onSelect(event.target?.value, data?.props?.name);
  };
  return (
    <FormParent fullWidth size={size} className={className}>
      <CustomInput
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        multiple={multiple}
        value={value}
        IconComponent={SelectIcon}
        disabled={disabled}
        onChange={handleChange}
        displayEmpty // This should be placed directly here, not in inputProps
        inputProps={{ "aria-label": "Without label" }}
        className={`${selecttypesclass[selecttype] || null} `}
      >
        {searchInput && (
          <SearchInputComponent
            placeholder={t("common.search")}
            startAdornment={
              <Img
                className="h-[15px] w-[15px] md:mr-0"
                src="images/img_search.svg"
                alt="img_search"
              />
            }
            className="!mb-[0px] sm:mb-4 max-w-[350px] sm:max-w-[100%] md:max-w-[200px] w-full search-input"
          />
        )}
        {options.map((option) => (
          <CustomMenuItem
            className={classNameInner}
            key={option.value}
            value={option.value}
            name={option?.label}
          >
            {option.label}
          </CustomMenuItem>
        ))}
      </CustomInput>
      {error && (
        <span className="text-sm text-red-700 absolute left-0 bottom-[-18px]">
          {error}
        </span>
      )}
    </FormParent>
  );
};
export { SelectBox };
