import React from "react";
import PropTypes from "prop-types";
const shapes = {
  round: "rounded-lg",
};
const variants = {
  tarOutlineGray400_1: "border-gray-400 border border-solid bg-gray-100",
  tarOutlineGray400: "border-gray-400 border border-solid",
};
const sizes = {
  xs: "h-[114px] p-[17px] text-sm",
  md: "h-[131px] p-[17px] text-sm",
  sm: "h-[126px] p-[17px] text-sm",
  lg: "h-[147px] p-[17px] text-sm",
};
const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "lg",
      variant = "tarOutlineGray400",
      setTextAreaValue,
      textAreaValue,
      errorText,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${(shape && shapes[shape]) || ""} ${
            sizes[size] || ""
          } ${variants[variant] || ""}`}
          name={name}
          value={textAreaValue}
          onChange={(e) => {
            let textAreaValue = e.target.value.trimStart();
            setTextAreaValue(textAreaValue);
          }}
          placeholder={placeholder}
          {...restProps}
        />
        {errorText && <span className="">{errorText}</span>}
      </>
    );
  }
);
TextArea.displayName = "TextArea";
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  textAreaValue: PropTypes.string,
  placeholder: PropTypes.string,
  errorText: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "md", "sm", "lg"]),
  variant: PropTypes.oneOf([
    "textarea2",
    "tarOutlineGray400_1",
    "tarOutlineGray400",
  ]),
  setTextAreaValue: PropTypes.func,
};
export { TextArea };
