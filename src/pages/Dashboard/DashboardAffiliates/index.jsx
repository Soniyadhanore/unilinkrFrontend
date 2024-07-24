/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import React from "react";
import { Img, Button, Text } from "components";
const DashboardAffiliates = ({
  image,
  statusChips,
  headingText,
  categoryText,
  typeText,
  IDText,
  ...props
}) => {
  return (
    <>
      <div {...props}>
        <div className="flex flex-col self-stretch gap-3">
          <div className="flex justify-between items-start gap-5">
            <div className="bg-gray-100 rounded">
              {!!image ? (
                <Img
                  src={image}
                  alt="image"
                  className="h-[52px] w-full md:w-[52px] md:h-auto object-cover rounded"
                />
              ) : null}
            </div>
            <Button
              size="md"
              shape="round"
              className="sm:px-5 min-w-[84px] cursor-default"
            >
              {statusChips}
            </Button>
          </div>
          <Text size="md" as="h1" className="!text-blue_gray-900_01 mb-3">
            {headingText}
          </Text>
        </div>
        <div className="flex justify-between gap-[15px] sm:gap-[10px] border-gray-200_01 border-t-[0.5px] border-solid pt-3 flex-wrap">
          <div className="flex flex-col items-start">
            <Text size="s" as="p" className="!text-gray-700">
              Category
            </Text>
            <Text className="!text-blue_gray-900_01 text-[16px] font-semibold">
              {categoryText}
            </Text>
          </div>
          <div className="flex flex-col items-start relative px-3 sm:px-0">
            <div className="h-[34px] w-px bg-gray-200_01 absolute left-0 sm:hidden" />
            <Text size="s" as="p" className="!text-gray-700">
              Type
            </Text>
            <Text className="!text-blue_gray-900_01 text-[16px] font-semibold">
              {typeText}
            </Text>
            <div className="h-[34px] w-px bg-gray-200_01 absolute right-0 sm:hidden" />
          </div>
          <div className="flex flex-col items-start relative md:px-0">
            <Text size="s" as="p" className="!text-gray-700">
              ID
            </Text>
            <Text className="!text-blue_gray-900_01 text-[16px] font-semibold">
              {IDText}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAffiliates;
