import React from "react";
import { Text } from "components";
import { useTranslation } from "react-i18next";
const JobPreviewWeekly = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-[16px] px-[32px] sm:px-5 ">
        <div className="bg-gray-100 p-[16px] rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-7 ">
            <div>
              <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                {t("postJob.shiftName")}
              </Text>
              <Text className="text-gray-700 text-sm font-normal">
                Morning Shift
              </Text>
            </div>
            <div>
              <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                {t("postJob.startDate")}
              </Text>
              <Text className="text-gray-700 text-sm font-normal">
                01/03/2024
              </Text>
            </div>
            <div>
              <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                {t("postJob.vacancies")}
              </Text>
              <Text className="text-gray-700 text-sm font-normal">5</Text>
            </div>
            <div>
              <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                {t("postJob.endDate")}
              </Text>
              <Text className="text-gray-700 text-sm font-normal">-</Text>
            </div>
          </div>
          <div className="flex-wrap flex mt-[32px]">
            <span className="bg-white-A700 text-sm font-normal rounded-lg px-[12px] py-[7px] mr-[12px] mb-[12px]">
              Monday 10:00 AM - 02:00 PM
            </span>
            <span className="bg-white-A700 text-sm font-normal rounded-lg px-[12px] py-[7px] mr-[12px] mb-[12px]">
              Monday 10:00 AM - 02:00 PM
            </span>
            <span className="bg-white-A700 text-sm font-normal rounded-lg px-[12px] py-[7px] mr-[12px] mb-[12px]">
              Monday 10:00 AM - 02:00 PM
            </span>
            <span className="bg-white-A700 text-sm font-normal rounded-lg px-[12px] py-[7px] mr-[12px] mb-[12px]">
              Monday 10:00 AM - 02:00 PM
            </span>
            <span className="bg-white-A700 text-sm font-normal rounded-lg px-[12px] py-[7px] mr-[12px] mb-[12px]">
              Monday 10:00 AM - 02:00 PM
            </span>
          </div>
        </div>
      </div>
      <div className="py-[16px] px-[32px] sm:px-5 ">
        <div className="bg-gray-100 p-[16px] rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-7 ">
            <div>
              <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                {t("postJob.shiftName")}
              </Text>
              <Text className="text-gray-700 text-sm font-normal">
                Morning Shift
              </Text>
            </div>
            <div>
              <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                {t("postJob.startDate")}
              </Text>
              <Text className="text-gray-700 text-sm font-normal">
                01/03/2024
              </Text>
            </div>
            <div>
              <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                {t("postJob.vacancies")}
              </Text>
              <Text className="text-gray-700 text-sm font-normal">5</Text>
            </div>
            <div>
              <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                {t("postJob.endDate")}
              </Text>
              <Text className="text-gray-700 text-sm font-normal">-</Text>
            </div>
          </div>
          <div className="flex-wrap flex mt-[32px]">
            <span className="bg-white-A700 text-sm font-normal rounded-lg px-[12px] py-[7px] mr-[12px] mb-[12px]">
              Monday 10:00 AM - 02:00 PM
            </span>
            <span className="bg-white-A700 text-sm font-normal rounded-lg px-[12px] py-[7px] mr-[12px] mb-[12px]">
              Monday 10:00 AM - 02:00 PM
            </span>
            <span className="bg-white-A700 text-sm font-normal rounded-lg px-[12px] py-[7px] mr-[12px] mb-[12px]">
              Monday 10:00 AM - 02:00 PM
            </span>
            <span className="bg-white-A700 text-sm font-normal rounded-lg px-[12px] py-[7px] mr-[12px] mb-[12px]">
              Monday 10:00 AM - 02:00 PM
            </span>
            <span className="bg-white-A700 text-sm font-normal rounded-lg px-[12px] py-[7px] mr-[12px] mb-[12px]">
              Monday 10:00 AM - 02:00 PM
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobPreviewWeekly;
