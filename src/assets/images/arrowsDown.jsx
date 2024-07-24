/* eslint-disable react/prop-types */
import React from "react";
export const ArrowsDownSVG = ({
  strokeColor = "#000000",
  className = "",
  ...props
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={strokeColor}
      className={className}
      {...props}
    >
      <path
        d="M13.2807 5.96484L8.93404 10.3115C8.4207 10.8248 7.5807 10.8248 7.06737 10.3115L2.7207 5.96484"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};