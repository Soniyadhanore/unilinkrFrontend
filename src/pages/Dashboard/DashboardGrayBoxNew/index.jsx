/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import React from "react";
import {  Text } from "components";
import { InfoGraySvg } from "assets/images";
const DashboardGrayBoxNew = ({
  clicks = "Click through Rate (CTR)",
  threehundred = "55%",
//   arrowOne,
//   five,
//   arrowImageSrc = "images/img_arrow_light_green_100.svg", 
//   textColor = "text-gray-700",
}) => {
  return (
    <>
      <div className="p-4 bg-gray-50_01 rounded">
        <div className="flex items-start justify-between mb-4">
          <Text className="text-sm font-semibold">
            {clicks}
          </Text>
          <InfoGraySvg />
        </div>
        <Text className="text-[18px] font-semibold flex items-center">
          {threehundred}
          {/* <span
            className={`${textColor} text-[10px] mx-2 flex items-center gap-1 font-normal`}
          >
            {!!arrowOne ? <Img src={arrowImageSrc} alt="arrow_one" /> : null}
            {!!five ? <span>{five}</span> : null}
          </span> */}
        </Text>
      </div>
    </>
  );
};
export default DashboardGrayBoxNew;
