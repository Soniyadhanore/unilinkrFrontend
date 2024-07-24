/* eslint-disable react/prop-types */
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, Text } from "components";
const GiveOffer = ({ open, onClose }) => {
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
        className=" m-auto"
      >
        <div className="w-full max-w-[475px] p-[24px]">
          <div className="flex justify-between mb-[12px]">
            <Text className="text-[18px] font-bold ">
              {t("common.giveOffer")}
            </Text>
            <Img
              src="images/img_cancel_gray_900_02.svg"
              onClick={() => handleClose()}
              className="cursor-pointer"
            />
          </div>
          <Text className="text-gray-700 text-[14px] font-normal">
            Lorem ipsum dolor sit amet neque volutpat tellus nam uttempus.
          </Text>
          <Text className="text-[16px] font-semibold mt-[24px] mb-[12px]">
            Upload Offer Letter
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
    </React.Fragment>
  );
};

export default GiveOffer;
