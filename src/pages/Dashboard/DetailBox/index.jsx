/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, Text } from "components";
const DetailBox = ({
  detailHeading = "Software Developer - Application",
  jid = "",
  detailType1 = "",
  detailType2 = "",
  detailType3 = "",
  detailType4 = "",
  description,
  statusText,
  ...props
}) => {
  return (
    <>
      <div {...props}>
        <div className="flex flex-col w-[78%] md:w-full gap-1.5">
          <Text className="text-[18px] font-bold" as="h6">
            {detailHeading}
          </Text>
          <div className="flex flex-wrap items-center gap-3 sm:gap-y-1">
            <Text as="p">{jid}</Text>
            <div className="h-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
            <Text as="p">{detailType1}</Text>
            <div className="h-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
            <div className="flex">
              <Text as="p">{detailType2}</Text>
            </div>
            <div className="h-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
            <div className="flex">
              <Text as="p">{detailType3}</Text>
            </div>
            <div className="h-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
            <div className="flex">
              <Text as="p">{detailType4}</Text>
            </div>
          </div>
          <div>
            {!!description ? (
              <Text as="p" className="!text-gray-700">
                {description}
              </Text>
            ) : null}
          </div>
        </div>
        <div className="flex justify-center md:justify-end md:w-full">
          <Button
            size="md"
            shape="round"
            className="min-w-[63px] cursor-default"
          >
            {statusText}
          </Button>
        </div>
      </div>
    </>
  );
};
export default DetailBox;
