import React from "react";
import DashboardHeader from "layout/DashboardHeader";
import { Text } from "components";
import DashboardGrayBoxNew from "./DashboardGrayBoxNew";
import DetailBox from "./DetailBox";
import DashboardAffiliates from "./DashboardAffiliates";
// import { EmptyDashboardPage } from "components/EmptyDashboardPage";
const DashboardPage = () => {
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader title={"Dashboard"} />
        <div className="py-6 px-8 md:px-4">
          <div className="grid grid-cols-[minmax(auto,_1fr)_356px] md:grid-cols-1 gap-x-6">
            <div className="sm:mb-5">
              <div className="flex flex-cols justify-between mb-5">
                <Text className="text-[18px] font-semibold">Posted Jobs</Text>
                <Text className="underline text-light_blue-900 text-[14px] font-normal">
                  Show All
                </Text>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
                <DashboardGrayBoxNew
                  clicks="Active Jobs"
                  threehundred={10}
                  comparedto=""
                />
                <DashboardGrayBoxNew
                  clicks="New Applications"
                  threehundred="155"
                  arrowOne="images/img_arrow_light_green_100.svg"
                  textColor="text-light_green-900"
                  five="20%"
                />
                <DashboardGrayBoxNew
                  clicks="Impressions"
                  threehundred="3.2k"
                  arrowOne="images/img_arrow_light_green_100.svg"
                  textColor="text-light_green-900"
                  five="17%"
                />
                <DashboardGrayBoxNew
                  clicks="Likes"
                  threehundred="321"
                  arrowOne="images/img_arrow_red_100.svg"
                  arrowImageSrc="images/img_arrow_red_100.svg"
                  textColor="text-red-500"
                  five="8%"
                />
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <DetailBox
                  detailHeading="QA Automation Engineer (Senior)"
                  jid="JID-1553165"
                  detailType1="Lisbon"
                  detailType2="On-site"
                  detailType3="Full Time"
                  detailType4="Specialized"
                  description="Requires a experienced in QA automation engineer with expertise in scripting languages such as Python or Java and proficiency in test automation frameworks like Selenium or Appium."
                  statusText="Active"
                  className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
                />
                <DetailBox
                  detailHeading="Software Developer - Application"
                  jid="JID-1553165"
                  detailType1="Faro"
                  detailType2="On-site"
                  detailType3="Custom"
                  detailType4="Specialized"
                  description="Requires a experienced in QA automation engineer with expertise in scripting languages such as Python or Java and proficiency in test automation frameworks like Selenium or Appium."
                  statusText="Active"
                  className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
                />
                <DetailBox
                  detailHeading="QA Automation Engineer (Senior)"
                  jid="JID-1553165"
                  detailType1="Lisbon"
                  detailType2="On-site"
                  detailType3="Full Time"
                  detailType4="Specialized"
                  description="Requires a experienced in QA automation engineer with expertise in scripting languages such as Python or Java and proficiency in test automation frameworks like Selenium or Appium."
                  statusText="Pending"
                  className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
                />
                <DetailBox
                  detailHeading="Software Developer - Application"
                  jid="JID-1553165"
                  detailType1="Faro"
                  detailType2="On-site"
                  detailType3="Custom"
                  detailType4="Specialized"
                  description="Requires a experienced in QA automation engineer with expertise in scripting languages such as Python or Java and proficiency in test automation frameworks like Selenium or Appium."
                  statusText="Confirmed"
                  className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-cols justify-between">
                <Text className="text-[18px] font-semibold mb-5 md:mt-[20px]">
                  Affiliates
                </Text>
                <Text className="underline text-light_blue-900 text-[14px] font-normal">
                  Show All
                </Text>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <DashboardGrayBoxNew
                  clicks="Clicks"
                  threehundred={300}
                  arrowOne="images/img_arrow_light_green_100.svg"
                  textColor="text-light_green-900"
                  five="20%"
                  comparedto="Compared to last week"
                />
                <DashboardGrayBoxNew
                  clicks="Click through Rate (CTR)"
                  threehundred="55%"
                  arrowOne="images/img_arrow_light_green_100.svg"
                  textColor="text-light_green-900"
                  five="15%"
                />
                <DashboardGrayBoxNew
                  clicks="Likes"
                  threehundred="32.5%"
                  arrowOne="images/img_arrow_red_100.svg"
                  textColor="text-light_green-900"
                  five="5%"
                />
                <DashboardGrayBoxNew
                  clicks="Conversion Rate"
                  threehundred="3.2k"
                  arrowOne="images/img_arrow_red_100.svg"
                  arrowImageSrc="images/img_arrow_red_100.svg"
                  textColor="text-red-500"
                  five="17%"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-5 mt-5">
                <DashboardAffiliates
                  image="images/img_rectangle_34624255.png"
                  statusChips="Pending"
                  headingText="Upgrade Your Capture: Save 15% on Canon DSLRs"
                  categoryText="Entertainment"
                  typeText="Entertainment"
                  IDText="AF-46543"
                  className="font-semibold flex flex-col gap-0 p-[15px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
                />
                <DashboardAffiliates
                  image="images/img_rectangle_34624255.png"
                  statusChips="Pending"
                  headingText="Upgrade Your Capture: Save 15% on Canon DSLRs"
                  categoryText="Entertainment"
                  typeText="Entertainment"
                  IDText="AF-46543"
                  className="font-semibold flex flex-col gap-0 p-[15px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* <EmptyDashboardPage
            MainTitle="Hello Anna"
            MainSubTitle="Lorem ipsum dolor sit amet consectetur. Odio faucibus praesent."
            GrayBoxes={[
              {
                Title: "Active Jobs",
                EmptyImage: "images/img_empty.svg",
                SubTitle:
                  "Begin by creating online discounts with unique codes, offline discounts",
                EmptyButtonText: "Post Job",
              },
              {
                Title: "Active Affiliates",
                EmptyImage: "images/img_empty_blue_gray_800.svg",
                SubTitle:
                  "Begin by creating online discounts with unique codes, offline discounts",
                EmptyButtonText: "Add Affiliates",
              },
            ]}
          /> */}
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
