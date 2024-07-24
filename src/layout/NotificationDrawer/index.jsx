/* eslint-disable react/prop-types */
import React from "react";
import Drawer from "@mui/material/Drawer";
import { Img, Text } from "components";
import { useTranslation } from "react-i18next";
const NotificationDrawer = ({ open, onClose }) => {
  const { t } = useTranslation();
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
        className="min-w-[440px] max-w-[440px] sm:min-w-full w-full h-full overflow-auto"
      >
        <div className="h-full">
          <div className="flex justify-between items-center w-full mx-auto px-[20px] py-[15px] md:p-5 ">
            <div className="flex self-end justify-center">
              <Text className="!blue-gray-900_01 text-[18px] font-bold leading-[22.3px]">
                {t("common.notification")}
              </Text>
            </div>
            <Img
              className="self-start h-[24px] w-[24px] cursor-pointer"
              src="images/img_close.svg"
              alt="close_one"
              onClick={onClose}
            />
          </div>
          <div className="h-[calc(100%-54px)] overflow-auto px-5 py-3">
            <div className="flex flex-col gap-px items-between bg-gray-200">
              <div className="flex gap-3.5 items-start bg-white-A700 py-4">
                <div className="w-full max-w-[40px] h-[40px]  rounded-full bg-gray-100 relative">
                  <Img
                    src="images/img_notification.svg"
                    alt="notification"
                    className="justify-center h-6 w-full md:w-6 md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute p-px"
                  />
                  <div className="h-[6px] w-[6px] right-[9px] top-2.5 m-auto bg-red-700 absolute rounded-[50%]" />
                </div>
                <div className="flex flex-col gap-2">
                  <Text className="text-sm font-normal leading-[16.66px]">
                    Lorem ipsum dolor sit amet consectetur. Aliquam nisl sem
                    pretium leo lorem id. Dolor mauris nunc diam.
                  </Text>
                  <Text className="text-xs font-normal leading-[14.28px] text-gray-700">
                    05/02/2024
                  </Text>
                </div>
              </div>
              <div className="flex gap-3.5 items-start bg-white-A700 py-4">
                <div className="w-full max-w-[40px] h-[40px] rounded-full bg-gray-100 relative">
                  <Img
                    src="images/img_notification.svg"
                    alt="notification"
                    className="justify-center h-6 w-full md:w-6 md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute p-px"
                  />
                  <div className="h-[6px] w-[6px] right-[9px] top-2.5 m-auto bg-red-700 absolute rounded-[50%]" />
                </div>
                <div className="flex flex-col gap-2">
                  <Text className="text-sm font-normal leading-[16.66px]">
                    Lorem ipsum dolor sit amet consectetur. Aliquam nisl sem
                    pretium leo lorem id. Dolor mauris nunc diam.
                  </Text>
                  <Text className="text-xs font-normal leading-[14.28px] text-gray-700">
                    05/02/2024
                  </Text>
                </div>
              </div>
              <div className="flex gap-3.5 items-start bg-white-A700 py-4">
                <div className="w-full max-w-[40px] h-[40px] rounded-full bg-gray-100 relative">
                  <Img
                    src="images/img_notification.svg"
                    alt="notification"
                    className="justify-center h-6 w-full md:w-6 md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute p-px"
                  />
                  <div className="h-[6px] w-[6px] right-[9px] top-2.5 m-auto bg-red-700 absolute rounded-[50%]" />
                </div>
                <div className="flex flex-col gap-2">
                  <Text className="text-sm font-normal leading-[16.66px]">
                    Lorem ipsum dolor sit amet consectetur. Aliquam nisl sem
                    pretium leo lorem id. Dolor mauris nunc diam.
                  </Text>
                  <Text className="text-xs font-normal leading-[14.28px] text-gray-700">
                    05/02/2024
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default NotificationDrawer;
