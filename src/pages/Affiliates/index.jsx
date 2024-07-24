import React from "react";
import DashboardHeader from "layout/DashboardHeader";
import { Img, SearchInputComponent, SelectBox, Text } from "components";
import { useTranslation } from "react-i18next";
import ManageAffiliatesBox from "./ManageAffiliatesBox";
import { useNavigate } from "react-router-dom";
const typeSelect = [
  {
    value: "Option",
    label: "Type",
  },
  {
    value: "Option1",
    label: "One",
  },
  {
    value: "Option2",
    label: "Two",
  },
  { value: "Option3", label: "Three" },
];
const statusSelect = [
  {
    value: "Option",
    label: "Status",
  },
  {
    value: "Option1",
    label: "Open",
  },
  {
    value: "Option2",
    label: "Resolved",
  },
  { value: "Option3", label: "Pending" },
];
const ManageAffiliates = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader />
        <div className="py-6 px-8 md:px-4 flex flex-row sm:flex-col items-start justify-between gap-5">
          <div className="relative w-full">
            <div className="flex items-center gap-1">
              <Text className="text-gray-900_02 font-qanelas text-[18px] font-semibold">
                {t("affiliates.manageAffiliates")}
              </Text>
              <Img
                className="h-[24px] w-[24px] cursor-pointer"
                src="images/img_plus.svg"
                alt="plus_one"
                onClick={() => {
                  navigate("/add-affiliate");
                }}
              />
            </div>
            <Text className="text-gray-900_02 font-qanelas  text-sm font-normal mb-[20px]">
              Lorem ipsum dolor sit amet consectetur. Odio faucibus praesent.
            </Text>
            <div className="w-full">
              <div className="w-full flex flex-row sm:flex-col justify-between items-start">
                <SearchInputComponent
                  placeholder={t("common.searchByAffiliateName")}
                  startAdornment={
                    <Img
                      className="h-[24px] w-[24px] md:mr-0"
                      src="images/img_search.svg"
                      alt="img_search"
                    />
                  }
                  className="!mb-[0px] sm:mb-4 max-w-[350px] sm:max-w-[100%] md:max-w-[200px] w-full search-input"
                />
                <div className="flex items-center gap-4 sm:w-[100%] md:mt-[22px]">
                  <div className="w-[110px] sm:w-[100%]">
                    <SelectBox
                      size="small"
                      options={typeSelect}
                      value="Option"
                      onSelect={(type, name) => {
                        console.log(type, name);
                      }}
                    />
                  </div>
                  <div className="w-[110px] sm:w-[100%]">
                    <SelectBox
                      size="small"
                      options={statusSelect}
                      value="Option"
                      onSelect={(type, name) => {
                        console.log(type, name);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                <ManageAffiliatesBox
                  image="images/img_rectangle_34624255.png"
                  statusChips="Pending"
                  headingText="Upgrade Your Capture: Save 15% on Canon DSLRs"
                  categoryText="Entertainment"
                  typeText="Entertainment"
                  IDText="AF-46543"
                  className="flex flex-col gap-0 p-[15px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
                  onClick={() => {
                    navigate("/affiliate-details");
                  }}
                />
                <ManageAffiliatesBox
                  image="images/img_rectangle_34624255.png"
                  statusChips="Pending"
                  headingText="Upgrade Your Capture: Save 15% on Canon DSLRs"
                  categoryText="Entertainment"
                  typeText="Entertainment"
                  IDText="AF-46543"
                  className="flex flex-col gap-0 p-[15px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
                />
                <ManageAffiliatesBox
                  image="images/img_rectangle_34624255.png"
                  statusChips="Pending"
                  headingText="Upgrade Your Capture: Save 15% on Canon DSLRs"
                  categoryText="Entertainment"
                  typeText="Entertainment"
                  IDText="AF-46543"
                  className="flex flex-col gap-0 p-[15px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
                />
                <ManageAffiliatesBox
                  image="images/img_rectangle_34624255.png"
                  statusChips="Pending"
                  headingText="Upgrade Your Capture: Save 15% on Canon DSLRs"
                  categoryText="Entertainment"
                  typeText="Entertainment"
                  IDText="AF-46543"
                  className="flex flex-col gap-0 p-[15px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="sticky top-[84px] max-w-[270px] w-full sm:max-w-full rounded bg-gray-100 py-5 px-4">
            <Text className="text-[16px] font-semibold mb-4">
              {t("affiliates.ourAffiliateProgram")}
            </Text>
            <Text className="text-sm mb-4">
              {t("affiliates.youCanPostAnnouncementType")}
            </Text>
            <Text className="text-sm mb-4">
              {t("affiliates.toPostOnlineAffiliatesPleaseReach")}
            </Text>
            <Text className="text-sm mb-4">
              Donec cursus facilisi arcu lorem. Commodo aliquet ut in velit
              sollicitudin imperdiet.
            </Text>
            <Text className="text-sm mb-4">
              Fringilla aliquam tempus fermentum leo.
            </Text>
            <Img
              src="images/robot-wih-laptop.svg"
              alt="img6233_one"
              className="justify-center h-[160px] w-[160px] mx-auto mb-2 object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAffiliates;
