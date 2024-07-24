import React from "react";
import { Input, InputLabels, SelectBox, Text } from "components";
import EditorComponent from "components/Editor";
import { useTranslation } from "react-i18next";
import { InputAdornment } from "@mui/material";
const degreeSpecializationSelect = [
  { value: "Select", label: "Select" },
  { value: "Specialised", label: "Specialised" },
  { value: "Non-Specialised", label: "Non-Specialised" },
];
const workModeSelect = [
  { value: "Select", label: "Select" },
  { value: "On-site", label: "On-site" },
  { value: "Remote", label: "Remote" },
];
const scheduleTypeSelect = [
  { value: "Select", label: "Select" },
  { value: "Option", label: "Option" },
  { value: "Option1", label: "Option1" },
];
const BasicInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="md:py-8 border-gray-400 border rounded p-[24px]">
        <div className="w-full max-w-[400px]">
          <div className="mb-8">
            <Text className="text-[16px] font-semibold mb-[8px]">
              {t("postJob.basicInfo")}
            </Text>
            <Text className="text-[14px] text-gray-700 font-normal">
              Lorem ipsum dolor sit amet consectetur. Ipsum euismod non
              phasellus nam cras tristique amet.
            </Text>
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("postJob.degreeOfSpecialization")}
              mandatoryAsterisk="*"
            />
            <Text className="text-[12px] text-gray-700 font-normal">
              {t("postJob.specialisedTheDegreeOfTheWorkerMatters")}
            </Text>
            <Text className="text-[12px] text-gray-700 font-normal mb-[12px]">
              {t("postJob.NonSpecialisedTheDegreeOfTheWorkerDoesNotMatter")}
            </Text>
            <SelectBox
              size="small"
              required
              options={degreeSpecializationSelect}
              value="Select"
              onSelect={(type, name) => {
                console.log(type, name);
              }}
            />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("postJob.jobTitle")}
              mandatoryAsterisk="*"
            />
            <Text className="text-[12px] text-gray-700 font-normal mb-[12px]">
              {t("postJob.jobTitleDisplayedForApplicants")}
            </Text>
            <Input
              className="fill"
              size="small"
              placeholder={t("postJob.egAccountantHR")}
            />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("posted.workrea")}
              mandatoryAsterisk="*"
            />
            <Text className="text-[12px] text-gray-700 font-normal mb-[12px]">
              {t(
                "postJob.TheCategoryThatBestFitsTheTasksOfTheWorkersAndYourBusiness"
              )}
            </Text>
            <SelectBox
              size="small"
              required
              options={degreeSpecializationSelect}
              value="Select"
              onSelect={(type, name) => {
                console.log(type, name);
              }}
            />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("postJob.jobDescription")}
              mandatoryAsterisk="*"
            />
            <Text className="text-[12px] text-gray-700 font-normal mb-[12px]">
              {t(
                "postJob.PleaseMentionAllTasksToBePerformedByTheWorkersAndAnyConditionsNecessaryToBeASuccessfulApplicant"
              )}
            </Text>
            <EditorComponent className={"mb-6"} />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("postJob.workLocation")}
              mandatoryAsterisk="*"
            />
            <Text className="text-[12px] text-gray-700 font-normal mb-[12px]">
              {t("postJob.onSiteVsRemoteIfOnSitePleaseSpecifyAddress")}
            </Text>
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("postJob.workMode")}
              mandatoryAsterisk="*"
            />
            <SelectBox
              size="small"
              required
              options={workModeSelect}
              value="Select"
              onSelect={(type, name) => {
                console.log(type, name);
              }}
            />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("postJob.jobAddress")}
              mandatoryAsterisk="*"
            />
            <Input
              className="fill"
              size="small"
              placeholder={t("postJob.egJobLocation")}
            />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("posted.district")}
              mandatoryAsterisk="*"
            />
            <Input
              className="fill"
              size="small"
              placeholder={t("posted.egJobDistrict")}
            />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("postJob.geofencingRadius")}
              mandatoryAsterisk="*"
            />
            <Text className="text-[12px] text-gray-700 font-normal mb-[12px]">
              {t(
                "postJob.HowCloseTheWorkerNeedsToBeFromTheSpecifiedAddressToCheckInCheckOut"
              )}
            </Text>
            <Input
              className="fill"
              size="small"
              placeholder="50"
              endAdornment={
                <InputAdornment position="start">
                  <span className="bg-[#F4F6FA] border-l border-gray-200 rounded-r-lg py-[11px] px-[16px] flex relative left-[21px] text-gray-700 text-sm">
                    Mtrs.
                  </span>
                </InputAdornment>
              }
            />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("postJob.scheduleType")}
              mandatoryAsterisk="*"
            />
            <Text className="text-[12px] text-gray-700 font-normal">
              {t(
                "postJob.customSpecifyExactlyWhatDaysAndTimesTheWorkersNeedToDoIdealForOneTimeJobs"
              )}
            </Text>
            <Text className="text-[12px] text-gray-700 font-normal">
              {t(
                "postJob.weeklyRecurringSpecifyTheWeeklyScheduleForTheWorkerWhichShouldRepeatOverAPeriodOfTimeIdealForPartTimes"
              )}
            </Text>
            <Text className="text-[12px] text-gray-700 font-normal mb-[12px]">
              {t("postJob.fullTimeIdeal")}
            </Text>
            <SelectBox
              size="small"
              required
              options={scheduleTypeSelect}
              value="Select"
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

export default BasicInfo;
