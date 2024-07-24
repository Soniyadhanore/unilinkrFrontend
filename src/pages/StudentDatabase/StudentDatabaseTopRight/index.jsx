import React from "react";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
const StudentDataBaseTopRight = () => {
  const { t } = useTranslation();
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
        >
          <span className="flex items-center justify-center">
            <Img
              className="filter brightness-0 invert mr-[8px] h-[20px] w-[20px] cursor-pointer"
              src="images/img_message.svg"
              alt="message_one"
              loading="lazy"
            />
            {t("studentDatabase.getInTouch")}
          </span>
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
      </div>
    </>
  );
};
export default StudentDataBaseTopRight;
