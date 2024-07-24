import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Received from "../../AcriveApplicationTabs/Received";
import UnderReview from "../../AcriveApplicationTabs/UnderReview";
import ContactedByChat from "../../AcriveApplicationTabs/ContactedByChat";
import OfferGiven from "../../AcriveApplicationTabs/OfferGiven";
import Rejection from "../../AcriveApplicationTabs/Rejection";
import OfferCancelled from "../../AcriveApplicationTabs/OfferCancelled";
import OfferDeclined from "../../AcriveApplicationTabs/OfferDeclined";
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
const Applications = () => {
  const { t } = useTranslation();
  const [value, setValueUnder] = React.useState(0);
  const handleChangeUnder = (event, newValue) => {
    setValueUnder(newValue);
  };
  return (
    <div className="w-full">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="bottom-tabs"
          value={value}
          onChange={handleChangeUnder}
          variant="scrollable"
          aria-label="basic tabs example"
        >
          <Tab label={t("posted.20Received")} {...a11yProps(0)} />
          <Tab label={t("posted.16UnderReview")} {...a11yProps(1)} />
          <Tab label={t("posted.8ContactedByChat")} {...a11yProps(2)} />
          <Tab label={t("posted.4OfferGiven")} {...a11yProps(3)} />
          <Tab label={t("posted.2Rejected")} {...a11yProps(4)} />
          <Tab label={t("posted.1OfferCancelled")} {...a11yProps(5)} />
          <Tab label={t("posted.1OfferDeclined")} {...a11yProps(6)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Received />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UnderReview />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ContactedByChat />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <OfferGiven />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Rejection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <OfferCancelled />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <OfferDeclined />
      </CustomTabPanel>
    </div>
  );
};

export default Applications;
