import React from "react";
import { Input, InputLabels, SelectBox, Text } from "components";
import EditorComponent from "components/Editor";
import { useTranslation } from "react-i18next";
const howToPayStudentsSelect = [
  {
    value: "Unilinkr (Automated Green Receipts)",
    label: "Unilinkr (Automated Green Receipts)",
  },
  { value: "Green Receipts", label: "Green Receipts" },
  { value: "Isolated Acts", label: "Isolated Acts" },
  { value: "Employment Contract", label: "Employment Contract" },
  { value: "Other", label: "Other" },
];
const paymentFrequencySelect = [
  { value: "Monthly", label: "Monthly" },
  { value: "Hourly", label: "Hourly" },
  { value: "Agreement", label: "Agreement" },
];
const typeOfApplicantsSelect = [
  { value: "Public", label: "Public" },
  { value: "Team Only", label: "Team Only" },
];
const teamSelect = [
  { value: "Sales Team", label: "Sales Team" },
  { value: "HR Team", label: "HR Team" },
  { value: "Marketing Team", label: "Marketing Team" },
];
const OtherInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="md:py-8 border-gray-400 border rounded p-[24px]">
        <div className="w-full max-w-[400px]">
          <div className="mb-8">
            <Text className="text-[16px] font-semibold mb-[8px]">
              {t("postJob.otherInfo")}
            </Text>
            <Text className="text-[14px] text-gray-700 font-normal">
              Lorem ipsum dolor sit amet consectetur. Ipsum euismod non
              phasellus nam cras tristique amet.
            </Text>
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("postJob.payment")}
              mandatoryAsterisk="*"
            />
            <Text className="text-[12px] text-gray-700 font-normal mb-[12px]">
              {t("postJob.howMuchAreYouPaying")}
            </Text>
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("posted.paymentFrequency")}
              mandatoryAsterisk="*"
            />
            <SelectBox
              size="small"
              required
              options={paymentFrequencySelect}
              value=""
              onSelect={(type, name) => {
                console.log(type, name);
              }}
            />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("posted.amount")}
              mandatoryAsterisk="*"
            />
            <Input
              className="fill"
              size="small"
              placeholder={t("postJob.egNumber")}
            />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("posted.benefits")}
              mandatoryAsterisk="*"
            />

            <div className="flex justify-between mb-[4px] ">
              <Text className="text-[12px] text-gray-700 font-normal mb-[12px]">
                {t("postJob.hereYouCanMentionAnyExtraBenefits")}
              </Text>
              <Text className="text-[12px] font-normal">250</Text>
            </div>
            <EditorComponent className={"mb-6"} />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("posted.howtopaystudents")}
              mandatoryAsterisk="*"
            />
            <Text className="text-[12px] text-gray-700 font-normal mb-[12px]">
              {t("postJob.specifyHere")}
            </Text>
            <SelectBox
              size="small"
              required
              options={howToPayStudentsSelect}
              value=""
              onSelect={(type, name) => {
                console.log(type, name);
              }}
            />
          </div>
          {/* Post Job Weekly Not selected */}
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("posted.typeofApplicants")}
              mandatoryAsterisk="*"
            />
            <SelectBox
              size="small"
              required
              options={typeOfApplicantsSelect}
              value=""
              onSelect={(type, name) => {
                console.log(type, name);
              }}
            />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("sidebar.teams")}
              mandatoryAsterisk="*"
            />
            <SelectBox
              size="small"
              required
              options={teamSelect}
              value=""
              onSelect={(type, name) => {
                console.log(type, name);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default OtherInfo;
