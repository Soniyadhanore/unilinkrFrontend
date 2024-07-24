import React from "react";
import { Divider } from "@mui/material";
import { Button, Text } from "components";
import PastJobsFeedback from "pages/PostedJob/OpenTab/OpenApplicantProfile/PastJobsFeedback";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="gap-5 p-[20px] mt-[20px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg">
        <Text className="uppercase text-gray-700 text-[12px] font-normal mb-[10px]">
          {t("posted.about")}
        </Text>
        <Text className="text-[14px] font-normal">
          {` Hi, I'm Bessie! Originally from a small town near Porto, I ventured to
          Lisbon to pursue my passion for Business Management. Growing up, my
          parents instilled in me the values of hard work and education. Now, as
          a university student, I'm eager to apply what I've learned in the
          classroom to the real world.`}{" "}
        </Text>
        <Divider variant="middle" className="!mx-[0] !my-[20px]" />
        <Text className="uppercase text-gray-700 text-[12px] font-normal mb-[10px]">
          {t("posted.education")}
        </Text>
        <Text className="text-[14px] font-normal">
          MBA, University of Lisbon, 2021-24
        </Text>
        <Divider variant="middle" className="!mx-[0] !my-[20px]" />
        <Text className="uppercase text-gray-700 text-[12px] font-normal mb-[10px]">
          {t("posted.areaWithWorkExperience")}
        </Text>
        <div className="flex gap-4 flex-wrap">
          <Button className="min-w-[88px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 h-[40px] px-[35px] text-sm bg-gray-100 text-gray-900_02 ">
            Hospitality
          </Button>
          <Button className="min-w-[88px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02  h-[40px] px-[35px] text-sm bg-gray-100 text-gray-900_02 ">
            Events/Festivals
          </Button>
          <Button className="min-w-[88px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02  h-[40px] px-[35px] text-sm bg-gray-100 text-gray-900_02 ">
            Tourism
          </Button>
        </div>
        <Divider variant="middle" className="!mx-[0] !my-[20px]" />
        <Text className="uppercase text-gray-700 text-[12px] font-normal mb-[10px]">
          {t("posted.spokenLanguage")}
        </Text>
        <div className="flex gap-4 flex-wrap">
          <Button className="min-w-[88px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 h-[40px] px-[35px] text-sm bg-gray-100 text-gray-900_02 ">
            English - Intermediate
          </Button>
          <Button className="min-w-[88px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02  h-[40px] px-[35px] text-sm bg-gray-100 text-gray-900_02 ">
            Portuguese - Advance
          </Button>
        </div>
        <Divider variant="middle" className="!mx-[0] !my-[20px]" />
        <Text className="uppercase text-gray-700 text-[12px] font-normal mb-[10px]">
          {t("posted.preferredWorkLocation")}
        </Text>
        <div className="flex gap-4 flex-wrap">
          <Button className="min-w-[88px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 h-[40px] px-[35px] text-sm bg-gray-100 text-gray-900_02 ">
            Beja
          </Button>
          <Button className="min-w-[88px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02  h-[40px] px-[35px] text-sm bg-gray-100 text-gray-900_02 ">
            Faro
          </Button>
          <Button className="min-w-[88px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02  h-[40px] px-[35px] text-sm bg-gray-100 text-gray-900_02 ">
            Castelo Branco
          </Button>
        </div>
      </div>
      <PastJobsFeedback />
    </>
  );
};

export default About;
