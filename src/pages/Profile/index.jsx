import React from "react";
import { InputAdornment } from "@mui/material";
import { Img, Input, InputLabels, SelectBox, Text } from "components";
import EditorComponent from "components/Editor";
import { useTranslation } from "react-i18next";
import DetailFooter from "layout/DetailFooter";
import ProfileHeader from "./ProfileHeader";
const citySelect = [
  { value: "Indore", label: "Indore" },
  { value: "Bhopal", label: "Bhopal" },
  { value: "Other", label: "Other" },
];
const Profile = () => {
  const { t } = useTranslation();
  return (
    <>
      <ProfileHeader />
      <div className="text-center my-[24px]">
        <Text className="text-[18px] font-bold ">
          {t("profile.completeYourProfile")}
        </Text>
      </div>
      <div className="flex md:flex-col justify-center items-start w-full gap-6 md:p-[18px]">
        <div className="w-[232px] md:w-full ">
          <div className="w-full max-w-[427px] md:max-w-full border-gray-400 border rounded px-[16px] py-[24px]">
            <Text className="text-[16px] font-semibold mb-[20px]">
              {t("profile.companyFacultyLogo")}
            </Text>
            <div className="relative w-[120px] m-auto md:m-0 pb-[16px]">
              <label htmlFor="profileImage" className="cursor-pointer">
                <Img
                  src="images/Profile.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <Input
                  id="profileImage"
                  type="file"
                  className="!absolute !top-[0] left-0 w-full h-full opacity-0 cursor-pointer !mb-[0px]"
                />
              </label>
            </div>
            {/* Upload profile Image code */}
            {/* <div className="relative w-[120px] m-auto pb-[16px]">
              <label className="cursor-pointer">
                <Img
                  src="images/img_profile_image_circle.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </label>
              <div className="absolute top-[0px] right-[5px]">
              <Img
                  src="images/img_cancel.svg" />
              </div>
            </div> */}
            <Text className="text-[14px] font-normal">
              {t("profile.uploadYourLogoImageSoItVisibleOnYourProfile")}
            </Text>
          </div>
        </div>
        <div className="w-[708px] md:w-full md:mt-6">
          <div className="min-h-[100vh] p-[24px] md:h-auto md:py-8 border-gray-400 border rounded">
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("profile.aboutCompany")}
                mandatoryAsterisk="*"
              />
              <EditorComponent className={"mb-6"} />
            </div>
            <Text className="text-[16px] font-semibold mb-[12px]">
              {t("profile.companyTaxBillingAddress")}
            </Text>
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("common.location")}
                mandatoryAsterisk="*"
              />
              <Input
                placeholder={t("common.searchForLocation")}
                endAdornment={
                  <InputAdornment position="start">
                    <Img
                      className="h-[24px] w-[24px] md:mr-0 cursor-pointer relative right-[-8px]"
                      src="images/img_location.svg"
                      alt="info_one"
                    />
                  </InputAdornment>
                }
                className="fill"
                size="small"
              />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-0 w-full">
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.country")}
                  mandatoryAsterisk="*"
                />
                <Input className="fill" size="small" />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.city")}
                  mandatoryAsterisk="*"
                />
                <SelectBox
                  size="small"
                  required
                  options={citySelect}
                  value=""
                />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.pincode")}
                  mandatoryAsterisk="*"
                />
                <Input className="fill" size="small" />
              </div>
            </div>
            <Text className="text-[16px] font-semibold mt-[26px] mb-[12px]">
              {t("profile.taxInformation")}
            </Text>
            <div className="w-full max-w-[322px]">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("common.taxIdNumberNif")}
                mandatoryAsterisk="*"
              />
              <Input className="fill" size="small" />
            </div>
            <Text className="text-[16px] font-semibold mt-[26px] mb-[8px]">
              {t("profile.uploadCommercialDocument")}
            </Text>
            <Text className="text-[14px] font-normal mb-[12px]">
              {t(
                "profile.provideYourCommercialCertificateNotMandatoryForPostingJobsButVerifiedStatusAddsCredibilityToYourProfile"
              )}
            </Text>
            <div className="flex flex-col w-full gap-[15px] p-4 border-gray-200 border border-solid bg-white-A700 rounded">
              <div className="relative flex flex-col self-stretch items-center justify-center p-2.5 border-gray-200 border border-dashed bg-gray-100 rounded">
                <div className="flex flex-col items-center p-1.5 ">
                  <label
                    htmlFor="uploadCommercialDocument"
                    className="cursor-pointer"
                  >
                    <Img
                      src="images/img_file.svg"
                      alt="Profile"
                      className="h-[20px] w-[20px]"
                    />
                  </label>
                  <input
                    id="uploadCommercialDocument"
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer inset-0 "
                  />
                </div>

                <Text className="text-gray-900_02 font-qanelas !text-black-900 text-xs font-semibold">
                  {t("profile.ClickToUpload")}
                </Text>
              </div>
              <div className="flex flex-col self-stretch gap-2">
                <div className="flex self-start">
                  <div className="flex items-center gap-1">
                    <Img
                      className="self-end h-[16px] w-[16px]"
                      src="images/img_attach_file_fil.svg"
                      alt="attach-file-fil"
                    />
                    <Text className="text-gray-900_02 font-qanelas  text-sm font-normal">
                      {t("profile.noFileAdded")}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col self-start items-start">
                  <Text className="text-gray-900_02 font-qanelas !text-gray-700 text-xs font-normal">
                    {t("profile.supportsPdfOnly")}
                  </Text>
                  <Text className="text-gray-900_02 font-qanelas !text-gray-700 text-xs font-normal">
                    {t("profile.maximumFileSizeOf10Mb")}
                  </Text>
                </div>
              </div>
            </div>
            <Text className="text-[16px] font-semibold mt-[40px] mb-[8px]">
              {t("profile.portfolio")}
            </Text>
            <div className="flex flex-col w-full gap-[15px] p-4 border-gray-200 border border-solid bg-white-A700 rounded">
              <div className="relative flex flex-col self-stretch items-center justify-center p-2.5 border-gray-200 border border-dashed bg-gray-100 rounded">
                <div className="flex flex-col items-center p-1.5 ">
                  <label
                    htmlFor="uploadCommercialDocument"
                    className="cursor-pointer"
                  >
                    <Img
                      src="images/img_file.svg"
                      alt="Profile"
                      className="h-[20px] w-[20px]"
                    />
                  </label>
                  <input
                    id="uploadCommercialDocument"
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer inset-0 "
                  />
                </div>
                <Text className="text-gray-900_02 font-qanelas !text-black-900 text-xs font-semibold">
                  {t("profile.ClickToUpload")}
                </Text>
              </div>
              <div className="flex flex-col self-stretch gap-2">
                <div className="flex self-start">
                  <div className="flex items-center gap-1">
                    <Img
                      className="self-end h-[16px] w-[16px]"
                      src="images/img_attach_file_fil.svg"
                      alt="attach-file-fil"
                    />
                    <Text className="text-gray-900_02 font-qanelas  text-sm font-normal">
                      {t("profile.noFileAdded")}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col self-start items-start">
                  <Text className="text-gray-900_02 font-qanelas !text-gray-700 text-xs font-normal">
                    {t("profile.supportsJpgPngOnly")}
                  </Text>
                  <Text className="text-gray-900_02 font-qanelas !text-gray-700 text-xs font-normal">
                    {t("profile.maximumFileSizeOf5Mb")}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailFooter buttonName={t("common.save")} />
    </>
  );
};
export default Profile;
