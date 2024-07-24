import React from "react";
import { useState } from "react";
import { Button, Img, SearchInputComponent } from "components";
import { InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DetailBox from "../../DetailBox";
import FilterJob from "../../FilterJob";
const ActiveTabContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <div className="w-full flex justify-between !my-[16px]">
        <SearchInputComponent
          placeholder={t("common.searchByJobIdName")}
          startAdornment={
            <InputAdornment position="start">
              <Img
                className="h-[24px] w-[24px] md:mr-0"
                src="images/img_search.svg"
                alt="img_search"
              />
            </InputAdornment>
          }
          className="!mb-[0px] max-w-[240px] w-full search-input"
        />
        <Button
          onClick={toggleDrawer(true)}
          className="min-w-[82px] md:ml-[8px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] !p-[12px] text-sm bg-gray-100 text-gray-900_02"
        >
          {t("common.filter")}
          <Img
            src="images/img_iconly_lightoutline_filter.svg"
            alt="Iconly/Light-Outline/Filter"
            className="ml-[8px]"
          />
        </Button>
      </div>
      <div className="w-full flex flex-col gap-6 mt-5">
        <DetailBox
          detailHeading="QA Automation Engineer (Senior)"
          jid="JID-1553165"
          detailType1="Lisbon"
          detailType2="On-site"
          detailType3="Full Time"
          detailType4="Specialized"
          description="Requires a experienced in QA automation engineer with expertise in scripting languages such as Python or Java and proficiency in test automation frameworks like Selenium or Appium."
          className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
          onClick={() => {
            navigate("/active-job-detail");
          }}
        />
        <DetailBox
          detailHeading="QA Automation Engineer (Senior)"
          jid="JID-1553165"
          detailType1="Lisbon"
          detailType2="On-site"
          detailType3="Full Time"
          detailType4="Specialized"
          description="Requires a experienced in QA automation engineer with expertise in scripting languages such as Python or Java and proficiency in test automation frameworks like Selenium or Appium."
          className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
        />
        <DetailBox
          detailHeading="Software Developer - Application"
          jid="JID-1553165"
          detailType1="Braga"
          detailType2="Remote"
          detailType3="Weekly"
          detailType4="Non-Specialized"
          description="Requires a experienced in QA automation engineer with expertise in scripting languages such as Python or Java and proficiency in test automation frameworks like Selenium or Appium."
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
          className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
        />
        <DetailBox
          detailHeading="Frontend Developer"
          jid="JID-1553165"
          detailType1="Braga"
          detailType2="Remote"
          detailType3="Weekly"
          detailType4="Non-Specialized"
          description="Requires a experienced in QA automation engineer with expertise in scripting languages such as Python or Java and proficiency in test automation frameworks like Selenium or Appium."
          statusText="Pending"
          className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
        />
      </div>
      <FilterJob open={open} onClose={toggleDrawer(false)} />
    </>
  );
};

export default ActiveTabContent;
