import React from "react";
import { Button, Text } from "components";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SubmitFeedback from "modals/SubmitFeedback/SubmitFeedback";
const CloseJobDetailTopBox = () => {
  const { t } = useTranslation();
  const [submitFeedbackShow, setSubmitFeedbackShow] = useState(false);
  const handleSubmitFeedback = () => {
    setSubmitFeedbackShow(true);
  };
  const handleSubmitFeedbackClose = () => {
    setSubmitFeedbackShow(false);
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
          onClick={() => handleSubmitFeedback()}
        >
          {t("posted.submitReview")}
        </Button>
        <Button
          className="cursor-pointer font-semibold text-center text-sm w-full "
          shape="round"
          color="black_900"
          size="xl"
          variant="outline"
        >
          {t("posted.duplicate")}
        </Button>
      </div>
      <SubmitFeedback
        open={submitFeedbackShow}
        onClose={handleSubmitFeedbackClose}
      />
    </>
  );
};

export default CloseJobDetailTopBox;
