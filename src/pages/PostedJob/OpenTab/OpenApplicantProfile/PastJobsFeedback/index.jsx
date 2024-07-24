import React from "react";
import { useTranslation } from "react-i18next";
import { Img, Text } from "components";
// import NoFeedBack from "components/NoFeedback";
import { Divider, Rating } from "@mui/material";
import { useState } from "react";
const PastJobsFeedback = () => {
  const { t } = useTranslation();
  const [ratingValue, setRatingValue] = useState(3);
  return (
    <>
      <div className="gap-5 p-[20px] mt-[20px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg">
        <Text className="uppercase text-gray-700 text-[12px] font-normal mb-[10px]">
          {t("posted.pastJobsFeedback")}
        </Text>
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={(newValue) => {
                setRatingValue(newValue);
              }}
            />
            <Text className="text-gray-900_02 self-start text-center text-sm font-normal">
              5.0
            </Text>
          </div>
          <Text className="text-gray-900_02 text-center text-base font-semibold">
            Event Manager
          </Text>
          <Text className="text-gray-900_02 w-[78%] md:w-full !text-gray-700 text-[16px] font-normal">
            Physically demanding but rewarding. Attention to detail, camaraderie
            among crew members. Beautifully set venues make it worthwhile.
          </Text>
          <div className="flex">
            <Img
              className="w-[24px] h-[24px]"
              src="images/img_companies_logo.png"
            />
            <Text className="text-gray-900_02 text-center text-sm font-semibold ml-[12px] md:ml-[5px]">
              Dominos Pizza Ltd.
            </Text>
            <Text className="text-gray-900_02 self-center !text-gray-700 text-sm font-normal ml-[20px] md:ml-[12px]">
              2 month ago
            </Text>
          </div>
        </div>
        <Divider variant="middle" className="!mx-[0] !my-[20px]" />
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={(newValue) => {
                setRatingValue(newValue);
              }}
            />
            <Text className="text-gray-900_02 self-start text-center text-sm font-normal">
              5.0
            </Text>
          </div>
          <Text className="text-gray-900_02 text-center text-base font-semibold">
            Digital Media
          </Text>
          <Text className="text-gray-900_02 w-[78%] md:w-full !text-gray-700 text-[16px] font-normal">
            Physically demanding but rewarding. Attention to detail, camaraderie
            among crew members. Beautifully set venues make it worthwhile.
          </Text>
          <div className="flex">
            <Img
              className="w-[24px] h-[24px]"
              src="images/img_companies_logo_24x24.png"
            />
            <Text className="text-gray-900_02 text-center text-sm font-semibold ml-[12px]  md:ml-[5px]">
              Delloite Softwares
            </Text>
            <Text className="text-gray-900_02 self-center !text-gray-700 text-sm font-normal ml-[20px] md:ml-[12px]">
              4 month ago
            </Text>
          </div>
        </div>
        <Divider variant="middle" className="!mx-[0] !my-[20px]" />
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={(newValue) => {
                setRatingValue(newValue);
              }}
            />
            <Text className="text-gray-900_02 self-start text-center text-sm font-normal">
              5.0
            </Text>
          </div>
          <Text className="text-gray-900_02 text-center text-base font-semibold">
            Traveling Executive
          </Text>
          <Text className="text-gray-900_02 w-[78%] md:w-full !text-gray-700 text-[16px] font-normal">
            Physically demanding but rewarding. Attention to detail, camaraderie
            among crew members. Beautifully set venues make it worthwhile.
          </Text>
          <div className="flex">
            <Img
              className="w-[24px] h-[24px]"
              src="images/img_companies_logo_1.png"
            />
            <Text className="text-gray-900_02 text-center text-sm font-semibold ml-[12px] md:ml-[5px]">
              Airbnb
            </Text>
            <Text className="text-gray-900_02 self-center !text-gray-700 text-sm font-normal ml-[20px] md:ml-[12px]">
              6 month ago
            </Text>
          </div>
        </div>
        <Divider variant="middle" className="!mx-[0] !my-[20px]" />
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={(newValue) => {
                setRatingValue(newValue);
              }}
            />
            <Text className="text-gray-900_02 self-start text-center text-sm font-normal">
              5.0
            </Text>
          </div>
          <Text className="text-gray-900_02 text-center text-base font-semibold">
            Event Manager
          </Text>
          <Text className="text-gray-900_02 w-[78%] md:w-full !text-gray-700 text-[16px] font-normal">
            Physically demanding but rewarding. Attention to detail, camaraderie
            among crew members. Beautifully set venues make it worthwhile.
          </Text>
          <div className="flex">
            <Img
              className="w-[24px] h-[24px]"
              src="images/img_companies_logo.png"
            />
            <Text className="text-gray-900_02 text-center text-sm font-semibold ml-[12px] md:ml-[5px]">
              Dominos Pizza Ltd.
            </Text>
            <Text className="text-gray-900_02 self-center !text-gray-700 text-sm font-normal ml-[20px] md:ml-[12px]">
              2 month ago
            </Text>
          </div>
        </div>
        <Divider variant="middle" className="!mx-[0] !my-[20px]" />
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={(newValue) => {
                setRatingValue(newValue);
              }}
            />
            <Text className="text-gray-900_02 self-start text-center text-sm font-normal">
              5.0
            </Text>
          </div>
          <Text className="text-gray-900_02 text-center text-base font-semibold">
            Digital Media
          </Text>
          <Text className="text-gray-900_02 w-[78%] md:w-full !text-gray-700 text-[16px] font-normal">
            Physically demanding but rewarding. Attention to detail, camaraderie
            among crew members. Beautifully set venues make it worthwhile.
          </Text>
          <div className="flex">
            <Img
              className="w-[24px] h-[24px]"
              src="images/img_companies_logo_24x24.png"
            />
            <Text className="text-gray-900_02 text-center text-sm font-semibold ml-[12px] md:ml-[5px]">
              Delloite Softwares
            </Text>
            <Text className="text-gray-900_02 self-center !text-gray-700 text-sm font-normal ml-[20px] md:ml-[12px]">
              4 month ago
            </Text>
          </div>
        </div>
        <Divider variant="middle" className="!mx-[0] !my-[20px]" />
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Rating
              name="simple-controlled"
              value={ratingValue}
              onChange={(newValue) => {
                setRatingValue(newValue);
              }}
            />
            <Text className="text-gray-900_02 self-start text-center text-sm font-normal">
              5.0
            </Text>
          </div>
          <Text className="text-gray-900_02 text-center text-base font-semibold">
            Traveling Executive
          </Text>
          <Text className="text-gray-900_02 w-[78%] md:w-full !text-gray-700 text-[16px] font-normal">
            Physically demanding but rewarding. Attention to detail, camaraderie
            among crew members. Beautifully set venues make it worthwhile.
          </Text>
          <div className="flex">
            <Img
              className="w-[24px] h-[24px]"
              src="images/img_companies_logo_1.png"
            />
            <Text className="text-gray-900_02 text-center text-sm font-semibold ml-[12px] md:ml-[5px]">
              Airbnb
            </Text>
            <Text className="text-gray-900_02 self-center !text-gray-700 text-sm font-normal ml-[20px] md:ml-[12px]">
              6 month ago
            </Text>
          </div>
        </div>

        {/* After No FeedBack Data */}
        {/* <NoFeedBack /> */}
      </div>
    </>
  );
};

export default PastJobsFeedback;
