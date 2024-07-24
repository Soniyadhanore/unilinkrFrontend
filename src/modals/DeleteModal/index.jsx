/* eslint-disable react/prop-types */
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Text } from "components";
const DeleteModal = ({ open, onClose, headerText, contentText }) => {
  const { t } = useTranslation();
  const handleClose = () => {
    onClose(false);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="!rounded-xl"
      >
        <div className="w-full min-w-[380px] sm:min-w-fit">
          <div className="p-[24px]">
            <Text className="text-[18px] font-bold mb-[12px]">
              {headerText}
            </Text>
            <Text className="text-gray-700">{contentText}</Text>
          </div>
          <div className="flex justify-end align-end px-[24px] pb-[24px] md:px-[10px] gap-3 ">
            <Button
              className="cursor-pointer font-semibold text-center text-sm md:px-[20px]"
              shape="round"
              color="gray_400"
              variant="outline"
              onClick={handleClose}
            >
              {t("common.cancel")}
            </Button>
            <Button
              className="cursor-pointer font-semibold text-center text-sm md:px-[20px]"
              shape="round"
              color="black_900"
              variant="fill"
              onClick={() => handleClose()}
            >
              {t("common.delete")}
            </Button>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteModal;
