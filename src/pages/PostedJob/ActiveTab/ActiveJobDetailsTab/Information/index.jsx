import React from "react";
import { Text } from "components";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import Schedule from "../../../Schedule";
const Information = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex flex-col gap-6 mt-5">
        <div className="gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg">
          <Text className="text-[16px] font-semibold mb-[12px]">
            {t("posted.jobInfo")}
          </Text>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
            <div>
              <Text className="text-sm font-normal text-gray-700 mb-[4px]">
                {t("posted.postedJobDate")}
              </Text>
              <Text className="text-sm font-semibold">15/01/2024</Text>
            </div>
            <div>
              <Text className="text-sm font-normal text-gray-700 mb-[4px]">
                {t("posted.workrea")}
              </Text>
              <Text className="text-sm font-semibold">Hospitality</Text>
            </div>
            <div>
              <Text className="text-sm font-normal text-gray-700 mb-[4px]">
                {t("posted.typeofApplicants")}
              </Text>
              <Text className="text-sm font-semibold">Teams</Text>
            </div>
            <div>
              <Text className="text-sm font-normal text-gray-700 mb-[4px]">
                {t("sidebar.teams")}
              </Text>
              <Text className="text-sm font-semibold">Team 1, Team 2</Text>
            </div>
            <div className="col-span-2">
              <Text className="text-sm font-normal text-gray-700 mb-[4px]">
                {t("common.address")}
              </Text>
              <Text className="text-sm font-semibold">
                Avenida Miguel Bombarda 38, Lisboa, Portuguese
              </Text>
            </div>
          </div>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <Text className="text-[16px] font-semibold mb-[12px]">
            {t("posted.schedule")}
          </Text>
          <Schedule />
          <Divider variant="middle" className="!mx-[0] !mb-[20px]" />
          <Text className="text-[16px] font-semibold mb-[12px]">
            {t("posted.description")}
          </Text>
          <Text className="text-sm">
            {`QA Automation Engineer (Senior) Position: Requires a minimum of 5
            years of experience in QA automation, with expertise in scripting
            languages such as Python or Java and proficiency in test automation
            frameworks like Selenium or Appium. The ideal candidate should
            demonstrate strong leadership skills, the ability to design and
            implement scalable test automation solutions, and a deep
            understanding of software development methodologies and QA
            processes. A Bachelor's degree in Computer Science or a related
            field is preferred, along with a proven track record of successfully
            leading automation efforts in agile development environments.`}
          </Text>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <Text className="text-[16px] font-semibold mb-[12px]">
            {t("posted.benefits")}
          </Text>
          <Text className="text-sm">
            {`Lorem ipsum dolor sit amet consectetur. Adipiscing mattis lorem
            neque volutpat tellus nam ut accumsan tempus. Enim est vitae
            pellentesque vel ornare. Non mattis nibh senectus id. Donec posuere
            habitasse commodo cursus. Justo lobortis hendrerit et velit nunc ac
            arcu posuere. In integer fermentum ut interdum aliquam hendrerit sit
            enim gravida. Vulputate semper interdum semper malesuada pretium
            odio. In ac ac id nulla purus. Sed sagittis condimentum ac bibendum
            adipiscing.`}
          </Text>
          <Divider variant="middle" className="!mx-[0] !my-[20px]" />
          <Text className="text-[16px] font-semibold mb-[12px]">
            {t("posted.paymentInfo")}
          </Text>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
            <div>
              <Text className="text-sm font-normal text-gray-700 mb-[4px]">
                {t("posted.paymentFrequency")}
              </Text>
              <Text className="text-sm font-semibold">Per Shift</Text>
            </div>
            <div>
              <Text className="text-sm font-normal text-gray-700 mb-[4px]">
                {t("posted.amount")}
              </Text>
              <Text className="text-sm font-semibold">€40</Text>
            </div>
            <div>
              <Text className="text-sm font-normal text-gray-700 mb-[4px]">
                {t("posted.howtopaystudents")}
              </Text>
              <Text className="text-sm font-semibold">Through Unilinkr</Text>
              <Text className="text-gray-900_02 !text-light_blue-900 underline text-sm font-semibold">
                View Business Model Details
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
