import React from "react";
import PropTypes from "prop-types";
import { Button, Img } from "components";
const EmptyPage = ({
  className,
  Title,
  SubTitle,
  EmptyButtonText,
  imageClass,
  EmptyImage,
  Checklist,
}) => {
  return (
    <div
      className={`${className} flex items-center justify-center min-h-[83vh] relative`}
    >
      <Img
        src="images/empty-bg.png"
        alt=""
        className="absolute right-[-32px] top-[-32px] z-[0]"
      />
      <div className="m-auto flex md:block gap-[60px] items-center w-[865px] mx-auto">
        <div className="flex flex-col items-start justify-start w-full">
          {Title && (
            <p className="text-gray-900_02 text-[40px] font-[700] mb-4 sm:z-0">
              {Title}
            </p>
          )}
          {SubTitle && (
            <p className="text-gray-900_02 text-md font-[600] mb-[28px] sm:z-0">
              {SubTitle}
            </p>
          )}
          {Checklist && Array.isArray(Checklist) && (
            <ul className="mb-10 sm:z-0">
              {Checklist.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-900_02 flex items-center gap-1 my-1"
                >
                  <Img
                    className="h-6 w-6"
                    src="images/tick-black.png"
                    alt="tick-black"
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          )}
          {EmptyButtonText && (
            <Button
              className="cursor-pointer font-semibold text-center text-sm min-w-[150px] w-auto"
              shape="round"
              color="black_900"
              size="xl"
              variant="fill"
            >
              {EmptyButtonText}
            </Button>
          )}
        </div>
        <img
          className={` ${imageClass || "h-auto w-[345px]"} `}
          src={EmptyImage}
          alt="illustrations"
          loading="lazy"
        />
      </div>
    </div>
  );
};
EmptyPage.propTypes = {
  className: PropTypes.string,
  Title: PropTypes.string,
  SubTitle: PropTypes.string,
  EmptyButtonText: PropTypes.string,
  imageClass: PropTypes.string,
  EmptyImage: PropTypes.string.isRequired,
  Checklist: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};
export { EmptyPage };