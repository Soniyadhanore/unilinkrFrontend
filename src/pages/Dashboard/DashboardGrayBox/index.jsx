/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import React from "react";
import { Img, Text } from "components";
import { InfoGraySvg } from "assets/images";
const DashboardGrayBox = ({
  clicks = "Click through Rate (CTR)",
  threehundred = "55%",
  arrowOne,
  five,
  comparedto = "Compared to last week",
  arrowImageSrc = "images/img_arrow_light_green_100.svg", 
  textColor = "text-gray-700",
}) => {
  return (
    <>
      <div className="p-4 bg-gray-50_01 rounded">
        <div className="flex items-center justify-between mb-3">
          <Text className="text-sm font-semibold whitespace-nowrap md:whitespace-normal">
            {clicks}
          </Text>
          <InfoGraySvg />
        </div>
        <Text className="text-[18px] font-semibold flex items-center">
          {threehundred}
          <span
            className={`${textColor} text-[10px] mx-2 flex items-center gap-1 font-normal`}
          >
            {!!arrowOne ? <Img src={arrowImageSrc} alt="arrow_one" /> : null}
            {!!five ? <span>{five}</span> : null}
          </span>
        </Text>
        <Text className="text-[10px] text-gray-700 my-1">{comparedto}</Text>
      </div>
    </>
  );
};
export default DashboardGrayBox;
