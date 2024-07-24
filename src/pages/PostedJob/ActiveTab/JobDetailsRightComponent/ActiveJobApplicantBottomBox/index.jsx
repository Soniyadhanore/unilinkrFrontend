import React from "react";
import { Text } from "components";
import { useTranslation } from "react-i18next";
const ActiveJobApplicantBottomBox = () => {
  const { t } = useTranslation();
  return (
    <div className="border-gray-200 border border-solid bg-white-A700 rounded-lg py-5 px-4">
      <Text className="text-[16px] font-semibold mb-[12px]">
        {t("posted.appliedFor")}
      </Text>
      <Text className="text-sm mb-[4px] text-gray-700">
        {t("posted.jobPost")}
      </Text>
      <Text className="text-sm mb-[12px] font-semibold">
        Software Developer
      </Text>
      <Text className="text-sm mb-[4px] text-gray-700">
        {t("posted.applicationId")}
      </Text>
      <Text className="text-sm mb-[12px] font-semibold">1553165</Text>
      <Text className="text-sm mb-[4px] text-gray-700">
        {t("posted.jobID")}
      </Text>
      <Text className="text-sm mb-[12px] font-semibold">15516545</Text>
      <Text className="text-sm mb-[4px] text-gray-700">
        {t("posted.schedule")}
      </Text>
      <Text className="text-sm mb-[12px] font-semibold">Morning Shift</Text>
      <Text className="text-sm mb-[4px] text-gray-700">
        {t("posted.typeofApplicants")}
      </Text>
      <Text className="text-sm mb-[12px] font-semibold">Public</Text>
    </div>
  );
};

export default ActiveJobApplicantBottomBox;
