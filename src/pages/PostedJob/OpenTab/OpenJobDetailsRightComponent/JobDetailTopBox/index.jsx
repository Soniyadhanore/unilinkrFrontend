import React from "react";
import { Button, Text } from "components";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import GiveOffer from "modals/GiveOffer";
import { useState } from "react";
const JobDetailTop = () => {
  const { t } = useTranslation();
  const [giveOfferShow, setGiveOfferShow] = useState(false);
  const handleGiveOfferShow = () => {
    setGiveOfferShow(true);
  };
  const handleGiveOfferClose = () => {
    setGiveOfferShow(false);
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
          onClick={() => handleGiveOfferShow()}
        >
          {t("common.giveOffer")}
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
        <Text className="text-sm font-semibold text-gray-700 text-center mt-[20px]">
          {t("common.rejectApplication")}
        </Text>
      </div>
      <GiveOffer open={giveOfferShow} onClose={handleGiveOfferClose} />
    </>
  );
};

export default JobDetailTop;