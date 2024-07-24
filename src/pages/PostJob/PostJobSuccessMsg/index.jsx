import React from "react";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const PostJobSuccessMsg = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] md:px-[22px]">
      <div className="flex flex-col items-center justify-center w-full gap-[15px] bg-white-A700">
        <div className="w-[64px] flex items-center justify-center text-center cursor-pointer rounded-[50%] h-[64px] px-[11px] bg-light_green-900">
          <Img src="images/img_checkbox.svg" alt="testImg" />
        </div>
        <div className="flex flex-col items-center w-[38%] md:w-full gap-9">
          <div className="flex flex-col self-stretch items-center gap-[7px]">
            <Text className="text-gray-900_02 !text-blue_gray-900_01 text-2xl font-semibold md:text-[22px]">
              {t("posted.jobID")} - 1234576767
            </Text>
            <Text className="text-gray-900_02 !text-gray-700 text-center text-sm font-normal">
              {t("postJob.yourJobHasBeenAddedSuccessfully")}
            </Text>
          </div>
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[180px]"
            shape="round"
            color="black_900"
            size="xl"
            variant="outline"
            onClick={() => {
              navigate("/posted-job");
            }}
          >
            {t("postJob.goToPostedJob")}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PostJobSuccessMsg;
