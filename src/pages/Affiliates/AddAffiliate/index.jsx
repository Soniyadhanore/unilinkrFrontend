import React from "react";
import {
  DatePickerComponent,
  Img,
  Input,
  InputLabels,
  SelectBox,
  Text,
} from "components";
import EditorComponent from "components/Editor";
import DetailHeader from "layout/DetailHeader";
import { useTranslation } from "react-i18next";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const typeAffiliateSelect = [
  { value: "Select", label: "Select" },
  { value: "Online Discount", label: "Online Discount" },
  { value: "General Ads/Announcement", label: "General Ads/Announcement" },
];
const categorySelect = [
  { value: "Select", label: "Select" },
  { value: "Shopping", label: "Shopping" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Food", label: "Food" },
];
const AddAffiliate = () => {
  const { t } = useTranslation();
  return (
    <>
      <DetailHeader buttonName={t("affiliates.postAffiliate")} />
      <div className="text-center my-[24px]">
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          className="z-[999] !bg-gray-100 fixed left-0 right-0 top-[24px] mx-auto w-full max-w-[590px]"
        >
          {t("alertMessages.successYourAffiliateHasBeen")}
        </Alert>
        <Text className="text-[18px] font-bold">
          {t("affiliates.addNewAffiliate")}
        </Text>
      </div>
      <div className="flex md:flex-col justify-center items-start w-full gap-6 md:p-[18px]">
        <div className="w-[220px] md:w-full ">
          <div className="w-full max-w-[427px] border-gray-400 border rounded px-[16px] py-[24px] text-center">
            <Text className="text-[16px] font-semibold mb-[20px]">
              {t("affiliates.uploadImage")}
            </Text>
            <div className="relative w-[120px] m-auto pb-[12px]">
              <label
                htmlFor="profileImage"
                className="cursor-pointer flex flex-col items-center p-11 md:p-5 border-gray-200 border border-solid bg-gray-100 rounded-lg"
              >
                <Img
                  src="images/img_broken_image.svg"
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

            <Text className="text-[14px] font-normal">
              {t("affiliates.uploadYourImageSoItVisible")}
            </Text>
          </div>
        </div>
        <div className="w-[475px] md:w-full md:mt-6">
          <div className="h-full p-[24px] md:h-auto md:py-8 border-gray-400 border rounded">
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("affiliates.typeOfAffiliate")}
                mandatoryAsterisk="*"
              />
              <SelectBox
                size="small"
                required
                options={typeAffiliateSelect}
                value="Select"
                onSelect={(type, name) => {
                  console.log(type, name);
                }}
              />
            </div>
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("affiliates.category")}
                mandatoryAsterisk="*"
              />
              <SelectBox
                size="small"
                required
                options={categorySelect}
                value="Select"
                onSelect={(type, name) => {
                  console.log(type, name);
                }}
              />
            </div>
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("posted.title")}
                mandatoryAsterisk="*"
              />
              <Input
                placeholder={t("affiliates.egOffOnShopping")}
                className="fill"
                size="small"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-[4px]">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("posted.description")}
                  mandatoryAsterisk="*"
                />
                <Text className="text-[12px] font-normal">250</Text>
              </div>
              <EditorComponent className={"mb-6"} />
            </div>
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("affiliates.websiteURL")}
                mandatoryAsterisk="*"
              />
              {/* If you select online discount then dropdown will be visible. */}
              <SelectBox
                size="small"
                required
                options={categorySelect}
                value="Select"
                onSelect={(type, name) => {
                  console.log(type, name);
                }}
              />

              {/* If you select General Ads/Announcements then input field will appear. */}
              {/* <Input
                placeholder={t("affiliates.egOffOnShopping")}
                className="fill"
                size="small"
              /> */}
            </div>
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("affiliates.expiryDate")}
                mandatoryAsterisk="*"
              />
              <DatePickerComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddAffiliate;
