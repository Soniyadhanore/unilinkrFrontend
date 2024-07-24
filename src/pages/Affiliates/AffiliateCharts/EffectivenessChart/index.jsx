import React from "react";
import { Img, SelectBox, Text } from "components";
import { useTranslation } from "react-i18next";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import DashboardGrayBoxNew from "pages/Dashboard/DashboardGrayBoxNew";
const timingSelect = [
  { value: "This Week", label: "This Week" },
  { value: "Last Week", label: "Last Week" },
  { value: "This Month", label: "This Month" },
  { value: "Last Month", label: "Last Month" },
  { value: "Custom Range", label: "Custom Range" },
];
const EffectivenessChart = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-end my-[24px] sm:block relative  mt-[-42px] sm:mt-4">
        <Text className="text-[16px] font-semibold self-center mr-[8px] sm:mb-[10px]">
          {t("common.filterBy")}
        </Text>
        <SelectBox
          size="small"
          required
          options={timingSelect}
          value="This Week"
          className="!mb-[0px] w-full !max-w-[140px]"
          onSelect={(type, name) => {
            console.log(type, name);
          }}
        />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-1 gap-5">
        <DashboardGrayBoxNew clicks="Clicks" threehundred={300} comparedto="" />
        <DashboardGrayBoxNew
          clicks="Click through Rate (CTR)"
          threehundred={300}
          comparedto=""
        />
        <DashboardGrayBoxNew
          clicks="Conversion Rate"
          threehundred={300}
          comparedto=""
        />
        <DashboardGrayBoxNew clicks="Likes" threehundred={300} comparedto="" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-7	mb-[30px]">
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
            width={480}
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
                data: [160, 120, 200, 80, 160, 40],
                color: "#A5CA96",
              },
            ]}
            width={480}
            height={300}
          />
        </div>
       
        <div className="chart-label flex flex-col gap-5 p-[19px] border-gray-200 border border-solid bg-white-A700 rounded-lg mt-[20px]">
          <div className="flex justify-between items-start mt-1 gap-5">
            <div className="flex flex-col w-[50%]">
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
                data: [200, 160, 50, 80, 160, 50, 80],
                color: "#A5CA96",
              },
              {
                data: [160, 100, 10, 30, 120, 10, 20],
                color: "#EAA9A8",
                },
            ]}
            width={480}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-5 p-[19px] border-gray-200 border border-solid bg-white-A700 rounded-lg mt-[20px]">
          <div className="flex justify-between items-start mt-1 gap-5">
            <div className="flex flex-col w-[50%]">
              <Text className="text-gray-900_02  text-lg font-bold md:whitespace-nowrap">
              Audience Demographic
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
                data: [160, 120, 200, 80, 160, 40],
                color: "#A5CA96",
              },
              {
                data: [150, 110, 180, 50, 140, 20],
                color: "#EAA9A8",
              },
            ]}
            width={480}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default EffectivenessChart;
