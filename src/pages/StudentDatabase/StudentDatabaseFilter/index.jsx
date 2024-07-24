/* eslint-disable react/prop-types */
import React from "react";
import Drawer from "@mui/material/Drawer";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
import { Divider } from "@mui/material";
const StudentDatabaseFilter = ({ open, onClose }) => {
  const { t } = useTranslation();
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div role="presentation" className="w-[320px] h-full">
        <div className="h-full">
          <div className="flex justify-between items-center w-full mx-auto px-[20px] py-[15px] md:p-5 ">
            <div className="flex self-end justify-center">
              <Text className="!blue-gray-900_01 text-[18px] font-bold">
                {t("common.filters")}
              </Text>
            </div>
            <Img
              onClick={onClose}
              className="self-start h-[24px] w-[24px] cursor-pointer"
              src="images/img_close.svg"
              alt="close_one"
            />
          </div>
          <div className="flex flex-col items-between h-[90%]">
            <div>
              <div className="flex flex-col bg-white-A700 self-start w-full mx-auto max-w-[280px] mt-[12px]">
                <Text className="text-sm font-semibold">
                  {t("studentDatabase.whereAvailableToWork")}
                </Text>
                <div className="flex my-[16px] flex-wrap gap-[8px]">
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100">
                    Açores
                  </Button>
                  <Button className="min-w-[96px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02">
                    Aveiro
                  </Button>
                  <Button className="min-w-[96px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02">
                    Beja
                  </Button>
                  <Button className="min-w-[96px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02">
                    Porto
                  </Button>
                  <Button className="min-w-[96px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02">
                    Bragança
                  </Button>
                  <Button className="min-w-[96px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02">
                    Faro
                  </Button>{" "}
                  <Button className="min-w-[96px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 text-gray-900_02">
                    Guarda
                  </Button>
                </div>
              </div>
              <Text className="text-sm ml-[20px] underline cursor-pointer mb-[16px]">
                {t("common.showMore")}
              </Text>
              <Divider variant="middle" />
              <div className="flex flex-col bg-white-A700 self-start w-full mx-auto max-w-[280px] mt-[16px]">
                <Text className="text-sm font-semibold">
                  {t("studentDatabase.areaswithExperience")}
                </Text>
                <div className="flex my-[16px] flex-wrap gap-[8px]">
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100">
                    Hospitality
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100">
                    Tourism
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100">
                    Sales
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100">
                    Events/Festivals
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100">
                    Tutoring
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100">
                    Catering
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100">
                    Industrial
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100">
                    Promoter
                  </Button>
                </div>
              </div>
              <Text className="text-sm ml-[20px] underline cursor-pointer mb-[16px]">
                {t("common.showMore")}
              </Text>
              <Divider variant="middle" />
              <div className="flex flex-col bg-white-A700 self-start w-full mx-auto max-w-[280px] mt-[16px]">
                <Text className="text-sm font-semibold">
                  {t("studentDatabase.areaOfStudy")}
                </Text>
                <div className="flex my-[16px] flex-wrap gap-[8px]">
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 mr-[8px]">
                    Hospitality and Tourism
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-2 text-sm bg-gray-100 mr-[8px]">
                    Humanities
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 mr-[8px]">
                    Natural Sciences
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-2 text-sm bg-gray-100 mr-[8px]">
                    Social Sciences
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-gray-100 mr-[8px]">
                    Formal Sciences
                  </Button>
                  <Button className="min-w-[39px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-2 text-sm bg-gray-100 mr-[8px]">
                    Business Related
                  </Button>
                </div>
              </div>
              <Divider className="!my-[16px]" />
            </div>
            <div className="flex self-end justify-end gap-3 p-3 mt-auto">
              <Button className="sm:px-5 font-semibold min-w-[80px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm border-black-900 border border-solid text-gray-900_02">
                Reset
              </Button>
              <Button className="mr-2 font-semibold min-w-[102px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[32px] px-6 text-sm bg-black-900 text-white-A700">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default StudentDatabaseFilter;
