import React from "react";
import DashboardHeader from "layout/DashboardHeader";
import { useTranslation } from "react-i18next";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "components";
import { Divider } from "@mui/material";
import PastJobsFeedback from "pages/PostedJob/OpenTab/OpenApplicantProfile/PastJobsFeedback";
import JobDetailBottomBox from "pages/PostedJob/OpenTab/OpenJobDetailsRightComponent/JobDetailsBottomBox";
import StudentDatabaseProfileComponent from "../StudentDatabaseProfileComponent";
import StudentDataBaseTopRight from "../StudentDatabaseTopRight";
const StudentProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader
          title={
            <span>
              <ArrowBackIosIcon
                className="!w-[20px] cursor-pointer"
                onClick={() => {
                  navigate("/student-database");
                }}
              />{" "}
              {t("studentDatabase.studentProfile")}
            </span>
          }
        />
        <div className="py-6 px-8 md:px-4">
          <div className="flex items-start justify-between gap-5 md:block">
            <div className="w-full">
              <StudentDatabaseProfileComponent />
              <div className="gap-5 p-[20px] mt-[20px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg">
                <Text className="uppercase text-gray-700 text-[12px] font-normal mb-[10px]">
                  {t("posted.about")}
                </Text>
                <Text className="text-[14px] font-normal">
                  {` Hi, I'm Bessie! Originally from a small town near Porto, I
                  ventured to Lisbon to pursue my passion for Business
                  Management. Growing up, my parents instilled in me the values
                  of hard work and education. Now, as a university student, I'm
                  eager to apply what I've learned in the classroom to the real
                  world.`}{" "}
                </Text>
                <Divider variant="middle" className="!mx-[0] !my-[20px]" />
                <Text className="uppercase text-gray-700 text-[12px] font-normal mb-[10px]">
                  {t("posted.education")}
                </Text>
                <Text className="text-[14px] font-normal">
                  MBA, University Institute of Lisbon, 2021-24
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
            </div>
            <div className="max-w-[270px] md:max-w-full sm:max-w-full sticky top-[84px] md:mt-[20px]">
              <StudentDataBaseTopRight />
              <JobDetailBottomBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
