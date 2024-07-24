// For This page Use active profile and close profile
import React from "react";
import DashboardHeader from "layout/DashboardHeader";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import ProfileComponent from "pages/PostedJob/OpenTab/OpenApplicantProfile/ProfileComponent";
import { useState } from "react";
import About from "./ActiveApplicantProfileTabs/About";
import ActiveJobApplicantTopBox from "../JobDetailsRightComponent/ActiveJobApplicantTopBox";
import ActiveJobApplicantBottomBox from "../JobDetailsRightComponent/ActiveJobApplicantBottomBox";
import PaymentLog from "./ActiveApplicantProfileTabs/PaymentLog";
import ClockInOutLogs from "./ActiveApplicantProfileTabs/ClockInOutLogs";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ActiveApplicantProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader
          title={
            <span>
              <ArrowBackIosIcon
                className="!w-[20px]"
                onClick={() => {
                  navigate("/open-job-detail");
                }}
              />{" "}
              {t("posted.applicantProfile")}
            </span>
          }
        />
        <div className="py-6 px-8 md:px-4">
          <div className="flex items-start justify-between gap-5 md:block">
            <div className="w-full">
              <ProfileComponent />
              <div className="w-full mt-[20px]">
                <Tabs
                  className="black-tabs"
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label={t("posted.profile")} {...a11yProps(0)} />
                  <Tab label={t("posted.paymentLogs")} {...a11yProps(1)} />
                  <Tab label={t("posted.clockInOutLogs")} {...a11yProps(2)} />
                </Tabs>
                <CustomTabPanel value={value} index={0}>
                  <About />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <PaymentLog />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <ClockInOutLogs />
                </CustomTabPanel>
              </div>
            </div>
            <div className="w-[270px]  md:w-auto sticky top-[84px] md:mt-[20px]">
              <ActiveJobApplicantTopBox />
              <ActiveJobApplicantBottomBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveApplicantProfile;
