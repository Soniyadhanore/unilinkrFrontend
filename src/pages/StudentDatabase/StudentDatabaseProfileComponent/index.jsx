import React from "react";
import { useState } from "react";
import { Img, Text } from "components";
import { Rating } from "@mui/material";
import { useTranslation } from "react-i18next";
const StudentDatabaseProfileComponent = () => {
  const { t } = useTranslation();
  const [ratingValue, setRatingValue] = useState(2);
  return (
    <div className="relative w-full flex flex-col gap-6">
      <div className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg">
        <div className="flex">
          <Img
            className="h-[72px] w-[72px] rounded-[50%]"
            src="images/img_ellipse_1561.png"
            alt="img_ellipse_1561"
          />
          <div className="ml-[14px]">
            <Text className="flex text-[24px] md:text-[18px] font-semibold">
              Bessie Cooper{" "}
              <div className="flex text-[14px] font-semibold">
                <Img className="ml-[3px]" src="images/img_tick_verify.svg" />
                <Img className="ml-[3px]" src="images/profile-2user.svg" />
              </div>
            </Text>
            <Text className="text-sm my-[4px]">
              {t("posted.universityInstituteOfLisbon")}
            </Text>
            <div className="w-full max-w-[154px] flex justify-center items-center gap-1 bg-gradient rounded py-[2px] mb-[4px]">
              <Img
                className="h-[16px] w-[16px]"
                src="images/img_uni_score.svg"
                alt="uniscore_one"
              />
              <Text className="bg-gradient text-gray-900_02 !text-white-A700 text-xs font-semibold">
                {t("posted.unilinkrScore")}
              </Text>
              <Img
                className="h-[16px] w-[16px]"
                src="images/img_info_white_a700.svg"
                alt="info_one"
              />
            </div>
            <div className="flex">
              <Rating
                name="simple-controlled"
                value={ratingValue}
                onChange={(newValue) => {
                  setRatingValue(newValue);
                }}
              />
              <Text className="text-sm font-normal self-center m-[3px]">
                4.0
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDatabaseProfileComponent;
