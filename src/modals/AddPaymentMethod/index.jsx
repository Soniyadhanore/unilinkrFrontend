/* eslint-disable react/prop-types */
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, Input, InputLabels, Text } from "components";
const AddPaymentMethod = ({ open, onClose }) => {
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
            {t("teams.addPaymentMethod")}
          </Text>
          <Img
            src="images/img_cancel_gray_900_02.svg"
            onClick={() => handleClose()}
            className="cursor-pointer"
          />
        </div>
        <Text className="text-gray-700 text-[14px] font-normal">
          {t("teams.pleaseEnterBelowDetailToAddPaymentMethod")}
        </Text>
        <div className="w-full mt-[24px]">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("teams.cardHolderName")}
           
          />
          <Input className="fill" size="small" placeholder="Eg. John Wick"/>
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("teams.cardNumber")}
           
          />
          <Input className="fill" size="small" placeholder="0000 0000 0000 0000"/>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("teams.expirationDate")}
             
            />
            <Input className="fill" size="small" placeholder="MM / YYYY"/>
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("teams.cardCodeCVV")}
            />
            <Input className="fill" size="small" placeholder="..."/>
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

export default AddPaymentMethod;
