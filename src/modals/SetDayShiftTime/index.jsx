/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, SelectBox, Text } from "components";
const timingSelect = [
  { value: "10:00 AM", label: "10:00 AM" },
  { value: "10:30 AM", label: "10:30 AM" },
  { value: "11:00 AM", label: "11:00 AM" },
];
const SetDayShiftTime = ({ open, onClose }) => {
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
        <div className="w-full max-w-[440px] p-[24px]">
          <div className="flex justify-between mb-[12px]">
            <Text className="text-[18px] font-bold">
              Morning Shift - Mon, 04 March
            </Text>
            <Img
              src="images/img_cancel_gray_900_02.svg"
              onClick={() => handleClose()}
              className="cursor-pointer"
            />
          </div>
          <Text className="text-gray-700">
            {t("postJob.YouAreEditingThisDay")}{" "}
            <span>{t("postJob.shiftEdit")}</span>
          </Text>
          <div className=" mt-[24px]">
            <div className="flex gap-x-5 mb-[8px]">
              <SelectBox
                size="small"
                required
                options={timingSelect}
                value=""
                className="!mb-[0px] w-full"
                onSelect={(type, name) => {
                  console.log(type, name);
                }}
              />
              <SelectBox
                size="small"
                required
                options={timingSelect}
                value=""
                className="!mb-[0px] w-full"
                onSelect={(type, name) => {
                  console.log(type, name);
                }}
              />
              <Img
                src="images/img_delete_1.svg"
                alt="Delete"
                className="flex self-baseline m-[8px]"
              />
            </div>
            <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
              <Img
                src="images/img_icon_light_blue_900.svg"
                alt="icon"
                loading="lazy"
              />
              {t("common.addMore")}
            </Button>
          </div>
        </div>
        <div className="flex justify-end align-end px-[24px] pb-[24px]">
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] !px-[11px]"
            shape="round"
            color="gray_400"
            variant="outline"
          >
            {t("common.back")}
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
    </>
  );
};

export default SetDayShiftTime;
