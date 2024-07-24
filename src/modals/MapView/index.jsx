/* eslint-disable react/prop-types */
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, Text } from "components";
const MapView = ({ open, onClose }) => {
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
          <Text className="text-[18px] font-bold ">{t("posted.mapView")}</Text>
          <Img
            src="images/img_cancel_gray_900_02.svg"
            onClick={() => handleClose()}
            className="cursor-pointer"
          />
        </div>
        <Img src="images/map.png" alt="map" />
        <div className="flex sm:flex-col justify-between items-center gap-5 mt-[24px]">
          <div className="flex flex-col items-start gap-[3px] sm:p-5">
            <Img
              className="h-[24px] w-[24px]"
              src="images/img_arrow.svg"
              alt="arrow_one"
            />
            <Text className="text-gray-900_02 text-base font-semibold">
              10:07 AM
            </Text>
            <Text className="text-gray-900_02 !text-gray-700 text-xs font-normal">
              27.56.195.98
            </Text>
          </div>
          <Img
            className="h-[16px] sm:w-full sm:h-auto"
            src="images/img_frame_427320002.svg"
            alt="image"
            loading="lazy"
          />
          <div className="flex flex-col items-end gap-[3px] sm:p-5">
            <Img
              className="h-[24px] w-[24px]"
              src="images/img_arrow_gray_900_02.svg"
              alt="arrow_three"
            />
            <Text className="text-gray-900_02 text-right text-base font-semibold">
              07:10 PM
            </Text>
            <Text className="text-gray-900_02 text-right text-xs font-normal">
              27.56.195.98
            </Text>
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
      </div>
    </Dialog>
  );
};

export default MapView;
