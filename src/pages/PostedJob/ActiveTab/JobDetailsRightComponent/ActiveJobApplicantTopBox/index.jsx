import React from "react";
import { Button, Text } from "components";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CancelOfferToStudent from "modals/CancelOfferToStudent";
import MakePayment from "modals/MakePayment";
const ActiveJobApplicantTopBox = () => {
  const { t } = useTranslation();
  const [cancelOffer, setCancelOffer] = useState(false);
  const [makePayment, setMakePayment] = useState(false);
  const handleCancelOffer = () => {
    setCancelOffer(true);
  };
  const handleCancelOfferClose = () => {
    setCancelOffer(false);
  };
  const handleMakePayment = () => {
    setMakePayment(true);
  };
  const handleMakePaymentClose = () => {
    setMakePayment(false);
  };
  return (
    <>
      <div className="border-gray-200 border border-solid bg-white-A700 rounded-lg py-5 px-4 mb-[24px]">
        <Text className="text-[14px] font-semibold mb-4">
          Lorem ipsum dolor sit amet cons
        </Text>
        <Text className="text-sm mb-4">
          Lorem ipsum dolor sit amet neque volutpat tellus nam uttempus.
        </Text>
        <Button
          className="cursor-pointer font-semibold text-center text-sm w-full mb-[12px]"
          shape="round"
          color="black_900"
          size="xl"
          variant="fill"
          onClick={() => handleMakePayment()}
        >
          {t("posted.makePayment")}
        </Button>
        <Button
          className="cursor-pointer font-semibold text-center text-sm w-full mb-[20px]"
          shape="round"
          color="black_900"
          size="xl"
          variant="outline"
        >
          {t("common.downloadCV")}
        </Button>
        <Divider>{t("common.or")}</Divider>
        <Text
          className="text-sm font-semibold text-gray-700 text-center mt-[20px] opacity-60	cursor-pointer"
          onClick={() => handleCancelOffer()}
        >
          {t("posted.cancelOfferToStudent")}
        </Text>
      </div>
      <CancelOfferToStudent
        open={cancelOffer}
        onClose={handleCancelOfferClose}
      />
      <MakePayment open={makePayment} onClose={handleMakePaymentClose} />
    </>
  );
};

export default ActiveJobApplicantTopBox;
