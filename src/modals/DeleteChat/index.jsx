/* eslint-disable react/prop-types */
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Text } from "components";
import { Dialog } from "@mui/material";
const DeleteChat = ({ open, onClose }) => {
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
        className="m-auto"
      >
        <div className="w-full max-w-[400px] p-[24px]">
          <div className="flex justify-between mb-[12px]">
            <Text className="text-[18px] font-bold">
              {t("chat.deleteChat")}
            </Text>
          </div>
          <Text className="text-gray-700">
            {t("chat.areYouSureYouWantToDeleteThisChat")}
          </Text>
        </div>
        <div className="flex justify-end align-end px-[24px] pb-[24px]">
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] !px-[11px]"
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
            {t("common.delete")}
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteChat;
