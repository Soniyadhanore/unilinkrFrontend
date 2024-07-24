import React from "react";
import { Img, Text } from "components";
import { useTranslation } from "react-i18next";
import DetailHeader from "layout/DetailHeader";
import JobPreviewWeekly from "../JobPreviewWeekly";
const PreviewJob = () => {
  const { t } = useTranslation();
  return (
    <>
      <DetailHeader buttonName={t("sidebar.postJob")} />
      <div className="text-center my-[24px]">
        <Text className="text-[18px] font-bold">{t("postJob.previewJob")}</Text>
      </div>
      <div className="flex flex-col self-stretch items-center gap-8 mb-[72px] md:px-6">
        <div className="w-full max-w-[964px] gap-[19px] sm:pb-5 border-gray-200_01 border border-solid bg-white-A700 rounded-[16px]">
          <div className="flex justify-between items-center gap-5 p-[19px] bg-blue-50 rounded-t-[16px]">
            <Text className="text-gray-900_02 self-start ml-3 md:ml-0 text-lg font-bold">
              {t("postJob.basicInfo")}
            </Text>
            <Img
              className="self-start h-[20px] w-[20px] mr-3 md:mr-0"
              src="images/img_edit.svg"
              alt="edit_one"
            />
          </div>
          <div className="py-[16px] px-[32px] sm:px-5">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-7">
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("postJob.degreeOfSpecialization")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  Specialized
                </Text>
              </div>
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("posted.workrea")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  Hospitality
                </Text>
              </div>
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("postJob.jobTitle")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  Customer Service Coordinator
                </Text>
              </div>
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("postJob.workMode")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  On-Site
                </Text>
              </div>
              <div className="grid grid-span-1">
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("postJob.jobDescription")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  Previous experience in catering or hospitality
                </Text>
                <ul className="list-disc">
                  <li className="text-sm text-gray-700 ml-[14px]">
                    Excellent customer service skills
                  </li>
                  <li className="text-sm text-gray-700 ml-[14px]">
                    Ability to work in a fast-paced environment.
                  </li>
                  <li className="text-sm text-gray-700 ml-[14px]">
                    Must be 18 years or older.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-7 mt-[32px]">
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("postJob.jobAddress")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  123, Main Street, Stark Building, Lisbon Road, Braga,
                  Portugal, 125645
                </Text>
              </div>
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("postJob.scheduleType")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  Full Time
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[964px] gap-[19px] sm:pb-5 border-gray-200_01 border border-solid bg-white-A700 rounded-[16px]">
          <div className="flex justify-between items-center gap-5 p-[19px] bg-blue-50 rounded-t-[16px]">
            <Text className="text-gray-900_02 self-start ml-3 md:ml-0 text-lg font-bold">
              {t("posted.schedule")}
            </Text>
            <Img
              className="self-start h-[20px] w-[20px] mr-3 md:mr-0"
              src="images/img_edit.svg"
              alt="edit_one"
            />
          </div>
          <div className="py-[16px] px-[32px] sm:px-5">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-7">
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
                  {t("postJob.endDate")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">-</Text>
              </div>
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("postJob.vacancies")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">5</Text>
              </div>
            </div>
          </div>
          <JobPreviewWeekly />
        </div>
        <div className="w-full max-w-[964px] gap-[19px] sm:pb-5 border-gray-200_01 border border-solid bg-white-A700 rounded-[16px]">
          <div className="flex justify-between items-center gap-5 p-[19px] bg-blue-50 rounded-t-[16px]">
            <Text className="text-gray-900_02 self-start ml-3 md:ml-0 text-lg font-bold">
              {t("postJob.otherInfo")}
            </Text>
            <Img
              className="self-start h-[20px] w-[20px] mr-3 md:mr-0"
              src="images/img_edit.svg"
              alt="edit_one"
            />
          </div>
          <div className="py-[16px] px-[32px] sm:px-5">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-7">
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("posted.paymentFrequency")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  Monthly
                </Text>
              </div>
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("posted.amount")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">$120</Text>
              </div>
              <div className="grid grid-span-1">
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("posted.benefits")}
                </Text>
                <ul className="list-disc">
                  <li className="text-sm text-gray-700 ml-[14px]">
                    Ensuring a positive guest experience
                  </li>
                  <li className="text-sm text-gray-700 ml-[14px]">
                    Assisting with event coordination
                  </li>
                  <li className="text-sm text-gray-700 ml-[14px]">
                    Serving food and beverages to guests
                  </li>
                  <li className="text-sm text-gray-700 ml-[14px]">
                    Setting up and breaking down event spaces
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-7 mt-[32px]">
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("posted.howtopaystudents")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  Through Unilinkr
                </Text>
              </div>
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("posted.typeofApplicants")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  Team Only
                </Text>
              </div>
              <div>
                <Text className="text-gray-900_02 text-sm font-semibold mb-[4px]">
                  {t("sidebar.teams")}
                </Text>
                <Text className="text-gray-700 text-sm font-normal">
                  HR - Sales
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PreviewJob;
