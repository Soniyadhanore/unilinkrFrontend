import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "layout/DashboardHeader";
import { Img, Text } from "components";
import OpenTabContent from "./OpenTab/OpenTabContent";
import ActiveTabContent from "./ActiveTab/ActiveTabContent";
import CloseTabContent from "./ClosedTab/CloseTabContent";
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
const PostedJob = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader />
        <div className="py-6 px-8 md:px-4 flex items-start justify-between gap-5 md:block">
          <div className="relative w-full">
            {/* alert start */}
            <div className="flex justify-start items-center gap-5 p-3 bg-blue-50 rounded-lg mb-3">
              <Text className="self-start font-semibold">Unilinkr</Text>
              <Text as="p" className="self-end">
                Lorem ipsum dolor sit amet consectetur. Odio faucibus praesent.
              </Text>
              <Img
                src="images/img_cancel_16.svg"
                alt="cancelsixteen"
                className="h-[24px] w-[24px] mr-1 sm:mr-0 rotate-[45deg] cursor-pointer absolute right-2"
              />
            </div>
            {/* alert start */}
            {/* <div className="flex justify-center items-center w-full gap-[18px] p-3 bg-deep_orange-50_01 rounded-lg fixed top-[80px] max-w-[772px] mx-auto left-0 right-0 z-[9]">
              <div className="flex justify-center items-start gap-3 flex-1">
                <Img
                  src="images/img_error.svg"
                  alt="error_one"
                  className="h-[24px] w-[24px]"
                />
                <div className="flex flex-col gap-0.5 md:p-5 flex-1 pr-5">
                  <Text className="text-[14px] font-semibold">
                    Opps! Something went wrong
                  </Text>
                  <Text className="text-[14px]">
                    You cannot post a new job until &#123;mention
                    duration&#125;. Your account have 2 strikes which represents
                    that previously the policies & rules are not followed.If you
                    wish to post a job, please contact our support team via
                    ticket.
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_cancel_16.svg"
                alt="cancelsixteen"
                className="h-[24px] w-[24px] rotate-[45deg] cursor-pointer absolute right-2"
              />
            </div> */}
            {/* alert end */}
            <div className="flex items-center gap-1">
              <Text className="text-gray-900_02 font-qanelas text-[18px] font-semibold">
                Posted Job
              </Text>
              <Img
                className="h-[24px] w-[24px] cursor-pointer"
                src="images/img_plus.svg"
                alt="plus_one"
                onClick={() => {
                  navigate("");
                }}
              />
            </div>

            <Text className="text-gray-900_02 font-qanelas  text-sm font-normal mb-3">
              Lorem ipsum dolor sit amet consectetur. Odio faucibus praesent.
            </Text>
            <div className="w-full">
              <Tabs
                className="black-tabs"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Open" {...a11yProps(0)} />
                <Tab label="Active" {...a11yProps(1)} />
                <Tab label="Closed" {...a11yProps(2)} />
              </Tabs>
              <CustomTabPanel value={value} index={0}>
                <OpenTabContent />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <ActiveTabContent />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <CloseTabContent />
              </CustomTabPanel>
            </div>
          </div>
          <div className="sticky top-[84px] max-w-[270px] w-full md:max-w-full rounded bg-gray-100 py-5 px-4 md:mt-[20px]">
            <Text className="text-[16px] font-semibold mb-4">Manage Jobs</Text>
            <Text className="text-sm mb-4">
              Save time and resources with Manage Jobs. Empowering businesses,
              it transforms recruitment processes with intuitive solutions.{" "}
            </Text>
            <Text className="text-sm mb-4">
              To post online affiliates, please reach Unilinkr admin at
              admin@unilinkr.com. Review our affiliate policies
            </Text>
            <Text className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur. Odio faucibus praesent
              scelerisque ut blandit at.{" "}
            </Text>
            <Text className="text-sm mb-4">
              Donec cursus facilisi arcu lorem. Commodo aliquet ut in velit
              sollicitudin imperdiet.{" "}
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

export default PostedJob;
