/* eslint-disable react/prop-types */
import React from "react";
const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  onClick,
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onClick={onClick}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };