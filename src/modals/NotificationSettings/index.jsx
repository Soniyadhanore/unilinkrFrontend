/* eslint-disable react/prop-types */
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, CheckBox, Img, Text } from "components";
const NotificationSettings = ({ open, onClose }) => {
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
      <div className="w-full max-w-[380px] p-[24px]">
        <div className="flex justify-between mb-[12px]">
          <Text className="text-[18px] font-bold ">
            {t("notificationSettings.notificationSettings")}
          </Text>
          <Img
            src="images/img_cancel_gray_900_02.svg"
            onClick={() => handleClose()}
            className="cursor-pointer"
          />
        </div>
        <Text className="text-gray-700 text-[14px] font-normal">
          {t(
            "notificationSettings.stayInformedWitTimelyAlertsAndUpdatesAboutImportantEventsActivitiesAndMessages"
          )}
        </Text>
        <div>
          <Text className="text-[16px] font-semibold mt-[24px]">
            {t("notificationSettings.emailNotifications")}
          </Text>
          <Text className="text-gray-700 text-[14px] font-normal mt-[8px]">
            {t(
              "notificationSettings.pleaseSelectWhichTypeOfNotificationsYouWantToReceiveOnEmail"
            )}
          </Text>
          <div className="flex flex-col gap-4 mt-[20px]">
            <CheckBox
              checked
              className="text-[14px] flex items-center gap-2"
              label="Job Approved"
            />
            <CheckBox
              checked
              className="text-[14px] flex items-center gap-2"
              label="Job Rejected"
            />
            <CheckBox
              checked
              className="text-[14px] flex items-center gap-2"
              label="New Application Received"
            />
            <CheckBox
              checked
              className="text-[14px] flex items-center gap-2"
              label="Student Clocks in"
            />
          </div>
          <Text className="text-[16px] font-semibold mt-[24px]">
            {t("notificationSettings.webNotifications")}
          </Text>
          <Text className="text-gray-700 text-[14px] font-normal mt-[8px]">
            {t(
              "notificationSettings.pleaseSelectWhichTypeOfNotificationsYouWantToReceiveOnWeb"
            )}
          </Text>
          <div className="flex flex-col gap-4 mt-[20px]">
            <CheckBox
              checked
              className="text-[14px] flex items-center gap-2"
              label="Job Approved"
            />
            <CheckBox
              checked
              className="text-[14px] flex items-center gap-2"
              label="Job Rejected"
            />
            <CheckBox
              checked
              className="text-[14px] flex items-center gap-2"
              label="New Application Received"
            />
            <CheckBox
              checked
              className="text-[14px] flex items-center gap-2"
              label="Student Clocks in"
            />
          </div>
        </div>
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
          {t("common.save")}
        </Button>
      </div>
    </Dialog>
  );
};

export default NotificationSettings;
