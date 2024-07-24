import React from "react";
import { Text, DatePickerComponent } from "components";
import NoData from "components/NoData/NoData";
import { useTranslation } from "react-i18next";
const Effectiveness = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex flex-col mt-[20px]">
        <Text className="text-[12px] font-semibold">
          {t("common.filterBy")}
        </Text>
        <div className="!w-[160px]">
          <DatePickerComponent />
        </div>
        <NoData
          noImg="images/img_frame.svg"
          activityHeading="No Activity"
          activityContent="Once the job is approved, you can track the effectiveness of this job."
        />
      </div>
    </>
  );
};

export default Effectiveness;
