/* eslint-disable no-extra-boolean-cast */
import React from "react";
import PropTypes from "prop-types";
import { Img, Button, Text } from "components";
const ManageAffiliatesBox = ({
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
          <Text className="!text-blue_gray-900_01 mb-3 text-[18px] font-bold">
            {headingText}
          </Text>
        </div>
        <div className="flex justify-between gap-[15px] border-gray-200_01 border-t-[0.5px] border-solid pt-3 md:flex-wrap">
          <div className="flex flex-col items-start">
            <Text size="s" as="p" className="!text-gray-700">
              Category
            </Text>
            <Text className="!text-blue_gray-900_01 text-[16px] font-semibold">
              {categoryText}
            </Text>
          </div>

          <div className="flex flex-col items-start relative px-3">
            <div className="h-[34px] w-px bg-gray-200_01 absolute left-0 " />
            <Text size="s" as="p" className="!text-gray-700">
              Type
            </Text>
            <Text className="!text-blue_gray-900_01 text-[16px] font-semibold">
              {typeText}
            </Text>
          </div>
          <div className="flex flex-col items-start relative px-3 md:px-0">
            <div className="h-[34px] w-px bg-gray-200_01 absolute left-0 md:hidden" />
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
ManageAffiliatesBox.propTypes = {
  image: PropTypes.string,
  statusChips: PropTypes.string,
  headingText: PropTypes.string,
  categoryText: PropTypes.string,
  imageClass: PropTypes.string,
  typeText: PropTypes.string.isRequired,
  IDText: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};
export default ManageAffiliatesBox;
