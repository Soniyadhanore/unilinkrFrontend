/* eslint-disable react/prop-types */
import React from "react";
import { Img, Text } from "components";
const NoData = ({ noImg, activityHeading, activityContent }) => {
  return (
    <>
      <div className="bg-gray-100 rounded p-[20px] flex flex-col justify-center items-center gap-4 mt-[20px]">
        <Img className="max-w-[76px]" src={noImg} />
        <Text className="text-[16px] font-semibold">{activityHeading}</Text>
        <Text>{activityContent}</Text>
      </div>
    </>
  );
};
export default NoData;