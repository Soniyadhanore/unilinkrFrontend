/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, Text } from "components";
const CancelOfferToStudent = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [AlternateModal, setAlternateModal] = useState(false);
  const handleClose = () => {
    onClose(false);
  };
  const handleAlternateModal = () => {
    setAlternateModal(true);
    handleClose();
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
              {t("posted.cancelOfferToStudent")}
            </Text>
            <Img
              src="images/img_cancel_gray_900_02.svg"
              onClick={() => handleClose()}
              className="cursor-pointer"
            />
          </div>
          <Text className="text-gray-700">
            {t(
              "posted.areYouSureYouWantToCancelTheOfferThatStudentHasAccepted"
            )}
          </Text>
          <Text className="text-gray-700">
            {t("posted.youMayChooseOtherApplicantsIfYouWantToKeepTheJobActive")}
          </Text>
        </div>
        <div className="flex justify-end align-end px-[24px] pb-[24px]">
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[128px] !px-[11px]"
            shape="round"
            color="gray_400"
            variant="outline"
            onClick={() => handleClose()}
          >
            {t("posted.noCancelOffer")}
          </Button>
          <Button
            className="whitespace-nowrap cursor-pointer font-semibold text-center text-sm w-full max-w-[167px] px-[13px] ml-[12px]"
            shape="round"
            color="black_900"
            variant="fill"
            onClick={() => handleAlternateModal()}
          >
            {t("posted.yesCancelProceed")}
          </Button>
        </div>
      </Dialog>
      <Dialog
        open={AlternateModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className=" m-auto"
      >
        <div className="w-full max-w-[400px] p-[24px]">
          <div className="flex justify-between mb-[12px]">
            <Text className="text-[18px] font-bold">
              {t("posted.alternateStudent")}
            </Text>
            <Img
              src="images/img_cancel_gray_900_02.svg"
              onClick={() => setAlternateModal(false)}
              className="cursor-pointer"
            />
          </div>
          <Text className="text-gray-700">
            {t(
              "posted.hereAreTheListOfShortlistedApplicantWhichYouMayConsiderToGiveOffer"
            )}
          </Text>
        </div>
        <div className="flex justify-end align-end px-[24px] pb-[24px]">
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[128px] !px-[11px]"
            shape="round"
            color="gray_400"
            variant="outline"
            onClick={() => setAlternateModal(false)}
          >
            {t("common.cancel")}
          </Button>
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[167px] px-[13px] ml-[12px]"
            shape="round"
            color="black_900"
            variant="fill"
          >
            {t("posted.sendOffer")}
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default CancelOfferToStudent;
