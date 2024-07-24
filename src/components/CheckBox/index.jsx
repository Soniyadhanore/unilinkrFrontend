/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";
const variants = {
  outline: {
    gray_200: "border border-gray-200 border-solid text-black-900",
  },
};
const shapes = {
  square: { rounded_none: "rounded-none" },
  rounded: { rounded: "rounded" },
};
const sizes = { xs: "pl-px py-px", sm: "pl-2 py-2" };
const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "rounded text-light_blue-900 border-gray-200 mt-0.5 cursor-pointer",
      labelClassName = "cursor-pointer",
      className = "flex items-center gap-2 cursor-pointer",
      name = "",
      children,
      label = "",
      errors = [],
      shape = "",
      size = "",
      variant = "",
      color = "",
      checked,
      id = "checkbox_id",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = () => {
      if (onChange) onChange(!checked);
    };
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]?.[color]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label className={`${labelClassName}`} htmlFor={id}>
            {label}
          </label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);
CheckBox.propTypes = {
  inputClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([""]),
  ]),
  labelClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["gray-200"]),
  children: PropTypes.node, // Add this line
};
export { CheckBox };
