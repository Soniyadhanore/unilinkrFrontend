/* eslint-disable no-dupe-keys */
import React from "react";
import { ButtonGroup } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { Text, Button, Img } from "components";
import { LineChart } from "@mui/x-charts/LineChart";
import DashboardGrayBox from "pages/Dashboard/DashboardGrayBox";
import { useTranslation } from "react-i18next";
const Effectiveness = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex flex-col mt-[20px]">
        <div className="flex justify-between md:block">
          <Text className="text-[16px] font-semibold self-center md:mb-3">
            {t("common.filterBy")}
          </Text>
          <ButtonGroup
            variant="outlined"
            aria-label="Basic button group"
            className="button-group-box"
          >
            <Button className="active">{t("affiliates.thisWeek")}</Button>
            <Button>{t("affiliates.lastWeek")}</Button>
            <Button>{t("affiliates.thisMonth")}</Button>
            <Button>{t("affiliates.lastMonth")}</Button>
            <Button>{t("affiliates.customRange")}</Button>
          </ButtonGroup>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-2 gap-5 mt-[20px]">
          <DashboardGrayBox
            clicks="Clicks"
            threehundred={300}
            arrowOne="images/img_arrow_light_green_100.svg"
            textColor="text-light_green-900"
            five="20%"
            comparedto="Compared to last week"
          />
          <DashboardGrayBox
            clicks="Click through Rate (CTR)"
            threehundred="55%"
            arrowOne="images/img_arrow_light_green_100.svg"
            textColor="text-light_green-900"
            five="15%"
          />
          <DashboardGrayBox
            clicks="Likes"
            threehundred="32.5%"
            arrowOne="images/img_arrow_red_100.svg"
            textColor="text-light_green-900"
            five="5%"
          />
          <DashboardGrayBox
            clicks="Conversion Rate"
            threehundred="3.2k"
            arrowOne="images/img_arrow_red_100.svg"
            arrowImageSrc="images/img_arrow_red_100.svg"
            textColor="text-red-500"
            five="17%"
          />
        </div>
        <div className="flex flex-col gap-5 p-[19px] border-gray-200 border border-solid bg-white-A700 rounded-lg mt-[20px]">
          <div className="flex justify-between items-start mt-[3px] gap-5">
            <div className="flex flex-col items-start gap-1">
              <Text className="text-gray-900_02  text-lg font-bold">
                {t("posted.reach")}
              </Text>
              <Text className="text-gray-900_02 !text-gray-700 text-xs font-normal">
                {t("posted.noOfUniqueUsers")}
              </Text> 
            </div>
            <Img
              className="h-[20px] w-[20px]"
              src="images/img_info_gray_600.svg"
              alt="info_one"
            />
          </div>
          <BarChart
            xAxis={[{ scaleType: "band", data: ["group A"] }]}
            series={[
              { data: [4], color: "#A5CA96" },
              { data: [1], color: "#A5CA96" },
              { data: [2], color: "#A5CA96" },
              { data: [5], color: "#A5CA96" },
              { data: [2], color: "#A5CA96" },
              { data: [2], color: "#A5CA96" },
              { data: [2], color: "#A5CA96" },
            ]}
            width={800}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-5 p-[19px] border-gray-200 border border-solid bg-white-A700 rounded-lg mt-[20px]">
          <div className="flex justify-between items-start mt-[3px] gap-5">
            <div className="flex flex-col items-start gap-1">
              <Text className="text-gray-900_02  text-lg font-bold">
                {t("posted.impression")}
              </Text>
              <Text className="text-gray-900_02 !text-gray-700 text-xs font-normal">
                {t("posted.seeHowOftenJobsAreViewedDaily")}
              </Text>
            </div>
            <Img
              className="h-[20px] w-[20px]"
              src="images/img_info_gray_600.svg"
              alt="info_one"
            />
          </div>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [160, 120, 200, 80, 160, 40] , color:"#A5CA96",
              },
            ]}
            width={800}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-5 p-[19px] border-gray-200 border border-solid bg-white-A700 rounded-lg mt-[20px]">
          <div className="flex justify-between items-start mt-1 gap-5">
            <div className="flex flex-col w-[23%]">
              <Text className="text-gray-900_02  text-lg font-bold md:whitespace-nowrap">
                {t("posted.clickThroughRate")}
              </Text>
              <div className="flex gap-4">
                <div className="flex self-start items-center w-[43%] gap-2">
                  <div className="h-[2px] w-[28%] bg-red-700_66 rounded-[1px]" />
                  <Text className="text-gray-900_02 !text-gray-700 text-center text-xs font-normal">
                    {t("posted.clicked")}
                  </Text>
                </div>
                <div className="flex self-start items-center w-[43%] gap-2">
                  <div className="h-[2px] w-[28%] bg-light_green-900_66 rounded-[1px]" />
                  <Text className="text-gray-900_02 !text-gray-700 text-center text-xs font-normal">
                    {t("posted.impressions")}
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[20px] w-[20px]"
              src="images/img_info_gray_600.svg"
              alt="info_one"
              loading="lazy"
            />
          </div>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [160, 120, 200, 80, 160, 40] , color:"#A5CA96",
              },
              {
                data: [150, 110, 180, 50, 140, 20] , color:"#EAA9A8",
              },
            ]}
            width={800}
            height={300}
          />
        </div>
        <div className="chart-label flex flex-col gap-5 p-[19px] border-gray-200 border border-solid bg-white-A700 rounded-lg mt-[20px]">
          <div className="flex justify-between items-start mt-1 gap-5">
            <div className="flex flex-col w-[23%]">
              <Text className="text-gray-900_02  text-lg font-bold">
                {t("posted.conversions")}
              </Text>
              <div className="flex gap-4">
                <div className="flex self-start items-center w-[43%] gap-2">
                  <div className="h-[2px] w-[28%] bg-red-700_66 rounded-[1px]" />
                  <Text className="text-gray-900_02 !text-gray-700 text-center text-xs font-normal">
                    {t("posted.clicked")}
                  </Text>
                </div>
                <div className="flex self-start items-center w-[43%] gap-2">
                  <div className="h-[2px] w-[28%] bg-light_green-900_66 rounded-[1px]" />
                  <Text className="text-gray-900_02 !text-gray-700 text-center text-xs font-normal">
                    {t("posted.applied")}
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[20px] w-[20px]"
              src="images/img_info_gray_600.svg"
              alt="info_one"
              loading="lazy"
            />
          </div>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: [
                  "08/03/24",
                  "08/04/24",
                  "08/05/24",
                  "08/06/24",
                  "08/07/24",
                  "08/08/24",
                  "08/09/24",
                ],
              },
            ]}
            series={[
              {
                data: [200, 160, 50, 80, 160, 50, 80] , color:"#A5CA96"              },
              { data: [160, 100, 10, 30, 120, 10, 20], color:"#EAA9A8" },
            ]}
            width={800}
            height={300}
          />
        </div>
      </div>
    </>
  );
};
export default Effectiveness;
