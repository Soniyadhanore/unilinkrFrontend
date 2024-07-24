import React from "react";
import { SelectBox, Text } from "components";
import { useTranslation } from "react-i18next";
import { BarChart } from "@mui/x-charts/BarChart";
const timingSelect = [
  { value: "This Week", label: "This Week" },
  { value: "Last Week", label: "Last Week" },
  { value: "This Month", label: "This Month" },
  { value: "Last Month", label: "Last Month" },
  { value: "Custom Range", label: "Custom Range" },
];
const CommissionChart = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-end my-[24px] md:block">
        <Text className="text-[16px] font-semibold self-center md:mb-3 mr-[8px]">
          {t("common.filterBy")}
        </Text>
        <SelectBox
          size="small"
          required
          options={timingSelect}
          value=""
          className="!mb-[0px] w-full !max-w-[140px]"
          onSelect={(type, name) => {
            console.log(type, name);
          }}
        />
      </div>
      <div className="flex flex-col gap-5 p-[19px] border-gray-200 border border-solid bg-white-A700 rounded-lg mt-[20px]">
        <div className="flex justify-between items-start mt-[3px] gap-5">
          <div className="flex flex-col items-start gap-1">
            <Text className="text-gray-900_02  text-lg font-bold">
              {t("affiliates.totalCommission")}
            </Text>
          </div>
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
    </>
  );
};

export default CommissionChart;
