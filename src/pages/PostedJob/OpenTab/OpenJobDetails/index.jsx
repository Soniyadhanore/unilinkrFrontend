import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslation } from "react-i18next";
import DashboardHeader from "layout/DashboardHeader";
import DetailBox from "../../DetailBox";
import Information from "../OpenJobDetailsTab/Information";
import Applications from "../OpenJobDetailsTab/Applications";
import JobDetailsListRight from "../OpenJobDetailsRightComponent/JobDetailsListRight";
import JobDetailBottomBox from "../OpenJobDetailsRightComponent/JobDetailsBottomBox";
import Effectiveness from "../OpenJobDetailsTab/Effectiveness";
import Shortlisted from "../OpenJobDetailsTab/Shortlisted";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

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
const OpenJobDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader title={
            <span>
              <ArrowBackIosIcon
                className="!w-[20px] cursor-pointer"
                onClick={() => {
                  navigate("/posted-job");
                }}
              />{" "}
              Job Detail
            </span>
          }/>
        <div className="py-6 px-8 md:px-4 flex items-start justify-between gap-5 md:block">
          <div className="relative w-full flex flex-col gap-6">
            <DetailBox
              detailHeading="QA Automation Engineer (Senior)"
              jid="JID-1553165"
              detailType1="Lisbon"
              detailType2="On-site"
              detailType3="Full Time"
              detailType4="Specialized"
              className="flex md:flex-col justify-between items-start gap-5 p-5 border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg"
            />
            <div className="w-full">
              <Tabs
                className="black-tabs"
                value={value}
                onChange={handleChange}
                variant="scrollable"
                aria-label="scrollable auto tabs example"
                scrollButtons={'auto'}
              >
                <Tab label={t("posted.information")} {...a11yProps(0)} />
                <Tab label={t("posted.applications")} {...a11yProps(1)} />
                <Tab label={t("posted.effectiveness")} {...a11yProps(2)} />
                <Tab label={t("posted.shortlisted")} {...a11yProps(3)} />
              </Tabs>
              <CustomTabPanel value={value} index={0}>
                <Information />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Applications />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Effectiveness />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
               <Shortlisted />
              </CustomTabPanel>
            </div>
          </div>
          <div className="max-w-[270px] md:max-w-full sm:max-w-full sticky top-[84px] md:mt-[20px]">
            <JobDetailsListRight />
            <JobDetailBottomBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenJobDetails;
