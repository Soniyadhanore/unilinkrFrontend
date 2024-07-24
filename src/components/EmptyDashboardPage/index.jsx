import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "components";
const EmptyDashboardPage = ({
  className,
  MainTitle,
  MainSubTitle,
  GrayBoxes,
  boxClass,
  imageClass,
}) => {
  return (
    <div className={`${className}`}>
      <div className="">
        {MainTitle ? (
          <Text className="text-gray-900_02 text-[24px] font-[600] mb-1">
            {MainTitle}
          </Text>
        ) : null}
        {MainSubTitle ? (
          <p className="text-gray-900_02 text-sm mb-[0px]">{MainSubTitle}</p>
        ) : null}
        {GrayBoxes.map((item, index) => (
          <div
            key={index}
            className={` ${
              boxClass ||
              "max-w-[708px] bg-gray-100 rounded-[16px] px-4 py-6 mt-8"
            } `}
          >
            {item.Title ? (
              <p className="text-gray-900_02 text-[18px] font-[700] mb-4">
                {item.Title}
              </p>
            ) : null}
            <img
              className={` ${imageClass || "h-[80px] w-[80px] mb-6 mx-auto"} `}
              src={item.EmptyImage}
              alt="illustrations"
              loading="lazy"
            />
            {item.SubTitle ? (
              <p className="text-gray-700 text-sm mb-6 text-center">
                {item.SubTitle}
              </p>
            ) : null}
            {item.EmptyButtonText ? (
              <div className="flex justify-center">
                <Button
                  className="cursor-pointer font-semibold text-center text-sm min-w-[150px] w-auto"
                  shape="round"
                  color="black_900"
                  size="md"
                  variant="fill"
                >
                  {item.EmptyButtonText}
                </Button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
EmptyDashboardPage.propTypes = {
  className: PropTypes.string,
  MainTitle: PropTypes.string,
  MainSubTitle: PropTypes.string,
  EmptyButtonText: PropTypes.string,
  imageClass: PropTypes.string,
  boxClass: PropTypes.string.isRequired,
  GrayBoxes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};
export { EmptyDashboardPage };