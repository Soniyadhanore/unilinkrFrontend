import React from "react";
import PropTypes from "prop-types";
import DashboardHeader from "layout/DashboardHeader";
import { Text } from "components";
import { useTranslation } from "react-i18next";
import { Tab, Tabs } from "@mui/material";
import JobCharges from "./TransactionTab/JobCharges";
import StudentPayment from "./TransactionTab/StudentPayment";
import AffiliateCommission from "./TransactionTab/AffiliateCommission";
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
const GeneralSettingTransaction = () => {
  const { t } = useTranslation();
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
            <div className="w-full max-w-[772px]">
              <div className="flex items-center gap-1">
                <Text className="text-gray-900_02 font-qanelas text-[18px] font-semibold">
                  {t("teams.transaction")}
                </Text>
              </div>
              <Text className="text-gray-900_02 font-qanelas  text-sm font-normal mb-3">
                {t(
                  "teams.viewAndTrackFinancialTransactionsForTransparencyAndRecordKeepingPurposes"
                )}
              </Text>
            </div>
            <div className="w-full">
              <Tabs
                className="black-tabs"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label={t("teams.jobCharges")} {...a11yProps(0)} />
                <Tab label={t("teams.studentPayment")} {...a11yProps(1)} />
                <Tab label={t("teams.affiliateCommission")} {...a11yProps(2)} />
              </Tabs>
              <CustomTabPanel value={value} index={0}>
                <JobCharges />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <StudentPayment />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <AffiliateCommission />
              </CustomTabPanel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralSettingTransaction;
