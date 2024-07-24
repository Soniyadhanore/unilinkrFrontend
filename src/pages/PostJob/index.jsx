import React from "react";
import { Text } from "components";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DetailHeader from "layout/DetailHeader";
import BasicInfo from "./PostJobdetailTab/BasicInfo";
import Schedule from "./PostJobdetailTab/Schedule";
import OtherInfo from "./PostJobdetailTab/OtherInfo";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const PostJob = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <DetailHeader buttonName={t("sidebar.postJob")} />
      <div className="text-center my-[24px]">
        <Text className="text-[18px] font-bold">{t("sidebar.postJob")}</Text>
      </div>
      <div className="flex md:flex-col justify-center items-start w-full gap-6 md:p-[18px]">
        <div className="w-[232px] md:w-full ">
          <div className="w-full max-w-[427px] border-gray-400 border rounded px-[16px] py-[24px]">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              TabIndicatorProps={{
                style: { display: "none" },
              }}
            >
              <Tab
                className="vertical-count-tab"
                label={
                  <>
                    <span className="round-cou active">
                      <CheckIcon />
                    </span>
                    <span className="font-normal text-gray-900_02 capitalize w-full flex pl-[36px] pt-[2px]">
                      {t("postJob.basicInfo")}
                    </span>
                  </>
                }
                {...a11yProps(0)}
              />
              <Tab
                className="vertical-count-tab"
                label={
                  <>
                    <span className="round-cou current">
                      <span>2</span>
                      {/* <CheckIcon /> */}
                    </span>
                    <span className="font-normal text-gray-900_02 capitalize w-full flex pl-[36px] pt-[2px]">
                      {t("posted.schedule")}
                    </span>
                  </>
                }
                {...a11yProps(1)}
              />
              <Tab
                className="vertical-count-tab"
                label={
                  <>
                    <span className="round-cou round-remove default">
                      <span>3</span>
                      {/* <CheckIcon /> */}
                    </span>
                    <span className="font-normal text-gray-900_02 capitalize w-full flex pl-[36px] pt-[2px]">
                      {t("postJob.otherInfo")}
                    </span>
                  </>
                }
                {...a11yProps(2)}
              />
            </Tabs>
          </div>
        </div>
        <div className="w-[708px] md:w-full md:mt-6 mb-5 tab-content">
          <div className="min-h-auto md:h-auto ">
            <TabPanel value={value} index={0}>
              <BasicInfo />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Schedule />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <OtherInfo />
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostJob;
