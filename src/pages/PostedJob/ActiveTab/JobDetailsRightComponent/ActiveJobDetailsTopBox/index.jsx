import React from "react";
import { Button, Text } from "components";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import RequestJobCancellation from "modals/RequestJobCancellation";
const ActiveJobDetailsTopBox = () => {
  const { t } = useTranslation();
  const [requestJobCancellationShow, setRequestJobCancellation] =
    useState(false);
  const handleRequestJobCancellationShow = () => {
    setRequestJobCancellation(true);
  };
  const handleRequestJobCancellationClose = () => {
    setRequestJobCancellation(false);
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
          className="cursor-pointer font-semibold text-center text-sm w-full md:w-auto sm:w-full mb-[20px]"
          shape="round"
          color="black_900"
          size="xl"
          variant="outline"
        >
          {t("posted.duplicate")}
        </Button>
        <Divider>{t("common.or")}</Divider>
        <Text
          className="underline text-sm font-semibold text-gray-700 text-center mt-[20px] opacity-60	cursor-pointer"
          onClick={() => handleRequestJobCancellationShow()}
        >
          {t("posted.requestJobCancellation")}
        </Text>
      </div>
      <RequestJobCancellation
        open={requestJobCancellationShow}
        onClose={handleRequestJobCancellationClose}
      />
    </>
  );
};

export default ActiveJobDetailsTopBox;
