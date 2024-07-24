/* eslint-disable react/prop-types */
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, Input, InputLabels, SelectBox, Text } from "components";
import EditorComponent from "components/Editor";
const paymentSelect = [
  {
    value: "Option1",
    label: "Option",
  },
  {
    value: "Option",
    label: "Option",
  },
  { value: "Option", label: "Option" },
  { value: "Option", label: "Option" },
];
const RaiseDispute = ({ open, onClose }) => {
  const { t } = useTranslation();
  const handleClose = () => {
    onClose(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className=" m-auto"
    >
      <div className="w-full max-w-[475px] p-[24px]">
        <div className="flex justify-between mb-[12px]">
          <Text className="text-[18px] font-bold ">
            {t("posted.raiseDispute")}
          </Text>
          <Img
            src="images/img_cancel_gray_900_02.svg"
            onClick={() => handleClose()}
            className="cursor-pointer"
          />
        </div>
        <Text className="text-gray-700 text-[14px] font-normal">
          {t(
            "posted.sinceYourJobIsInActiveModeToCancelTheJobSendRequestToUnilinkrAdminWithReason"
          )}
        </Text>
        <div className="w-full mt-[24px]">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("posted.type")}
            mandatoryAsterisk="*"
          />
          <SelectBox
            size="small"
            required
            options={paymentSelect}
            value="Option1"
            onSelect={(type, name) => {
              console.log(type, name);
            }}
          />
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("rolesAndPermission.job")}
            mandatoryAsterisk="*"
          />
          <SelectBox
            size="small"
            required
            options={paymentSelect}
            value="Option1"
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
          <Input className="fill" size="small" placeholder="Enter title" />
        </div>
        <div className="flex justify-between mt-[24px] mb-[4px] ">
          <Text className="text-[12px] font-semibold">
            {t("posted.description")}
          </Text>
          <Text className="text-[12px] font-normal">300</Text>
        </div>
        <EditorComponent />
      </div>
      <div className="flex justify-end align-end px-[24px] pb-[24px]">
        <Button
          className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] px-[13px]"
          shape="round"
          color="gray_400"
          variant="outline"
          onClick={() => handleClose()}
        >
          {t("common.cancel")}
        </Button>
        <Button
          className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] px-[13px] ml-[12px]"
          shape="round"
          color="black_900"
          variant="fill"
        >
          {t("common.submit")}
        </Button>
      </div>
    </Dialog>
  );
};

export default RaiseDispute;
