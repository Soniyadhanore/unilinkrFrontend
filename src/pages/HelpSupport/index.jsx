import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DashboardHeader from "layout/DashboardHeader";
import { Img, Text } from "components";
import JobApprovalHelp from "./JobApprovalHelp";
import HelpNewTicket from "modals/HelpNewTicket";
import { useHelps } from "hooks/useHelps";
const HelpSupport = () => {
  const { t } = useTranslation();

  //states
  const [HelpNewTicketDialog, setHelpNewTicketDialog] = useState(false);

  // get custom hooks
   // get custom hooks
   const {getHelpsList, helpsList } =
   useHelps();

  const handleDialogShow = () => {
    setHelpNewTicketDialog(true);
  };
  const handleCloseDialog = () => {
    setHelpNewTicketDialog(false);
  };
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader />
        <div className="py-6 px-8 md:px-4 flex flex-row sm:flex-col items-start justify-between gap-5">
          <div className="relative w-full">
            <div className="flex items-center gap-1">
              <Text className="text-gray-900_02 font-qanelas text-[18px] font-semibold">
                {t("sidebar.help")}
              </Text>
              <Img
                className="h-[24px] w-[24px] cursor-pointer"
                src="images/img_plus.svg"
                alt="plus_one"
                onClick={() => {
                  handleDialogShow();
                }}
              />
            </div>
            <Text className="text-gray-900_02 font-qanelas  text-sm font-normal mb-3">
              Lorem ipsum dolor sit amet consectetur. Odio faucibus praesent.
            </Text>
            <div className="w-full">
              <JobApprovalHelp getHelpsList={getHelpsList} helpsList={helpsList}  />
            </div>
          </div>
          <div className="sticky top-[84px] max-w-[270px] w-full sm:max-w-full rounded bg-gray-100 py-5 px-4">
            <Text className="text-[16px] font-semibold mb-4">
              {t("helpSupport.raiseATicket")}
            </Text>
            <Text className="text-sm mb-4">
              {t(
                "helpSupport.beginByCreatingOnlineDiscountsWithUniqueCodesOfflineDiscountsPromotionalOrUpdateAnnouncements"
              )}
            </Text>
            <Text className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur. Odio faucibus praesent
              scelerisque ut blandit at.
            </Text>
            <Text className="text-sm mb-4">
              Donec cursus facilisi arcu lorem. Commodo aliquet ut in velit
              sollicitudin imperdiet.
            </Text>
            <Text className="text-sm mb-4">
              Fringilla aliquam tempus fermentum leo.
            </Text>
            <Img
              src="images/robot-wih-laptop.svg"
              alt="img6233_one"
              className="justify-center h-[160px] w-[160px] mx-auto mb-2 object-cover "
            />
          </div>
        </div>
      </div>
      <HelpNewTicket open={HelpNewTicketDialog} onClose={handleCloseDialog} getHelpsList={getHelpsList} />
    </>
  );
};
export default HelpSupport;
