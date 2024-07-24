/* eslint-disable react/prop-types */
import React from "react";
import { TextField, FormControl } from "@mui/material";
import { styled } from "@mui/system";
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
const CustomInput = styled(TextField)({});
const Input = ({
  label,
  error,
  required,
  placeholder,
  disabled,
  multiline,
  size,
  prefix,
  suffix,
  minRows,
  maxRows,
  startAdornment = null,
  endAdornment = null,
  onChange,
  value,
  type,
  className,
}) => {
  return (
    <>
      <FormParent fullWidth className={className}>
        {!!prefix && prefix}
        <CustomInput
          // id="outlined-basic"
          required={required}
          disabled={disabled}
          label={label}
          type={type}
          size={size}
          placeholder={placeholder}
          multiline={multiline}
          minRows={minRows}
          maxRows={maxRows}
          variant="outlined"
          value={value}
          InputProps={{
            ...(startAdornment && { startAdornment }),
            ...(endAdornment && { endAdornment }),
          }}
          onChange={(e) => {
            onChange(e.target?.value?.trimStart());
          }}
          className={`${value ? "value-input" : ""}`}
          error={error}
        />
        {!!suffix && suffix}
        {error && (
          <span className="text-sm text-red-700 absolute left-0 bottom-[-20px]">
            {error}
          </span>
        )}
      </FormParent>
    </>
  );
};
export { Input };
