import React from "react";
import { forwardRef } from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";
const variants = {
  outline: {
    blue_gray_100: "border border-blue_gray-100 border-solid text-black-900",
  },
};
const shapes = {
  square: { rounded_none: "rounded-none" },
  rounded: { rounded: "rounded" },
};
const sizes = { xs: "pl-px py-px", sm: "pl-2 py-2" };
const Radio = forwardRef(
  (
    {
      inputClassName = "rounded-full text-teal-400 cursor-pointer",
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
      id = "radio_id",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]?.[color]) || ""}`}
            ref={ref}
            type="radio"
            name={name}
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
Radio.displayName = "Radio";
Radio.propTypes = {
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
  color: PropTypes.oneOf(["blue_gray_100"]),
  children: PropTypes.node,
  errors: PropTypes.array,
  id: PropTypes.string,
  onChange: PropTypes.func,
};
export { Radio };