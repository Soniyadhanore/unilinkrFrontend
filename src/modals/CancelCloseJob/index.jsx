/* eslint-disable react/prop-types */
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, Text } from "components";
const CancelCloseJob = ({ open, onClose }) => {
  const { t } = useTranslation();
  const handleClose = () => {
    onClose(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className=" m-auto"
      >
        <div className="w-full max-w-[400px] p-[24px]">
          <div className="flex justify-between mb-[12px]">
            <Text className="text-[18px] font-bold">
              {t("common.cancelCloseJob")}
            </Text>
            <Img
              src="images/img_cancel_gray_900_02.svg"
              onClick={() => handleClose()}
              className="cursor-pointer"
            />
          </div>
          <Text className="text-gray-700">
            Are you sure you want to cancel/close this job? You have
            applications received from student. As per the platform policy, a
            UniJob after having accepted workers if cancels job, they receives
            one strike
          </Text>
        </div>
        <div className="flex justify-end align-end px-[24px] pb-[24px]">
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] px-[13px]"
            shape="round"
            color="gray_400"
            variant="outline"
            onClick={() => handleClose()}
          >
            {t("common.close")}
          </Button>
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] px-[13px] ml-[12px] md:whitespace-nowrap"
            shape="round"
            color="black_900"
            variant="fill"
          >
            {t("common.yesCancel")}
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default CancelCloseJob;
