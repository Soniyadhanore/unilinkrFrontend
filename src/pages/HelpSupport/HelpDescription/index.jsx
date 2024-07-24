import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "components";
const HelpDescription = ({
  detailHeading = "Software Developer - Application",
  detailType1,
  detailType2,
  detailType3,
  detailType4,
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
            <Text as="p">{detailType1}</Text>
            {detailType2 ? (
              <div className="flex items-center gap-3 sm:gap-y-1">
                <div className="h-[4px] min-w-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
                <Text as="p">{detailType2}</Text>
              </div>
            ) : null}
            {detailType3 ? (
              <div className="flex items-center gap-3 sm:gap-y-1">
                <div className="h-[4px] min-w-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
                <Text as="p">{detailType3}</Text>
              </div>
            ) : null}
            {detailType4 ? (
              <div className="flex items-center gap-3 sm:gap-y-1">
                <div className="h-[4px] min-w-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
                <Text as="p">{detailType4}</Text>
              </div>
            ) : null}
          </div>
          <div>
            {description ? (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            ) : // <Text as="p" className="!text-gray-700">
            //   {description}
            // </Text>
            null}
          </div>
        </div>
        {statusText ? (
          <div className="flex justify-center md:justify-end md:w-full ">
            <Button
              size="md"
              shape="round"
              className="min-w-[63px] cursor-default"
            >
              {statusText}
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default HelpDescription;

HelpDescription.propTypes = {
  detailHeading: PropTypes.string,
  detailType1: PropTypes.string,
  detailType2: PropTypes.string,
  detailType3: PropTypes.string,
  detailType4: PropTypes.string,
  description: PropTypes.string,
  statusText: PropTypes.string,
};
