/* eslint-disable react/prop-types */
import React from "react";
import { Autocomplete, FormControl, TextField } from "@mui/material";
import { styled } from "@mui/system";
const FormParent = styled(FormControl)({
  marginBottom: 24,
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
    padding: "6px 12px",
    height: "24px",
    fontSize: "14px",
    lineHeight: "24px",
    color: "var(--black_900)",
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
    "&.Mui-disabled": {
      opacity: 1,
      "& .MuiInputBase-input": {
        color: "var(--gray_700)",
        zIndex: 1,
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
      border: "1px solid var(--gray_200)",
      top: "-10px",
    },
    "&:hover fieldset": {
      borderColor: "var(--teal_400)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--teal_400)",
    },
  },
});
const CustomInput = styled(Autocomplete)({});
const AutocompleteInput = ({
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
  startAdornment = null,
  endAdornment = null,
  onChange,
  value,
  type,
  className,
  options,
}) => {
  return (
    <>
      <FormParent fullWidth className={className}>
        {!!prefix && prefix}
        <CustomInput
          id="outlined-basic"
          required={required}
          disabled={disabled}
          label={label}
          type={type}
          size={size}
          placeholder={placeholder}
          multiline={multiline}
          minRows={minRows}
          variant="outlined"
          value={value}
          freeSolo
          disableClearable
          options={options.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                type: "search",
                ...(startAdornment && { startAdornment }),
                ...(endAdornment && { endAdornment }),
              }}
            />
          )}
          InputProps={{
            ...(startAdornment && { startAdornment }),
            ...(endAdornment && { endAdornment }),
          }}
          onChange={onChange}
          className={`${value ? "value-input" : ""}`}
        />
        {!!suffix && suffix}
        {error && (
          <span className="text-sm text-red-400 absolute left-0 bottom-[-20px]">
            {error}
          </span>
        )}
      </FormParent>
    </>
  );
};
export { AutocompleteInput };