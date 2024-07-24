/* eslint-disable react/prop-types */
import React from "react";
export const SearchSVG = ({
  stroke = "#000000",
  fill = "#ffffff",
  className = "",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      stroke={stroke}
      fill={fill}
      className={className}
      {...props}
    >
      <circle
        cx="5.8849"
        cy="5.8849"
        r="4.49428"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.01172 9.24609L10.7737 11.0035"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};