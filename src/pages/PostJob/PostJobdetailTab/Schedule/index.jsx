import React from "react";
import { DatePickerComponent, InputLabels, Text } from "components";
import { useTranslation } from "react-i18next";
import AddWeeklyShiftDetails from "../../AddWeeklyShiftDetails";
import AddCustomShift from "../../AddCustomShift";
import Counter from "components/Counter";
const Schedule = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full">
        <div className="md:py-8 border-gray-400 border rounded p-[24px]">
          <div className="w-full max-w-[400px]">
            <div className="mb-8">
              <Text className="text-[16px] font-semibold mb-[8px]">
                {t("posted.schedule")}
              </Text>
              <Text className="text-[14px] text-gray-700 font-normal">
                {t("postJob.defineTheScheduleExactly")}
              </Text>
            </div>
            <div className="select-date">
              <div className="w-full mb-[24px]">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("postJob.startDate")}
                  mandatoryAsterisk="*"
                />
                <DatePickerComponent />
              </div>
              <div className="w-full mb-[24px]">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("postJob.endDate")}
                  mandatoryAsterisk="*"
                />
                <DatePickerComponent />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("postJob.vacancies")}
                  mandatoryAsterisk="*"
                />
                <Counter />
              </div>
            </div>
          </div>
        </div>
        {/* before Post Job add Weekly Shift  */}
        <AddWeeklyShiftDetails />
        {/* Add Custom Shift */}
        <AddCustomShift />
      </div>
    </>
  );
};

export default Schedule;
