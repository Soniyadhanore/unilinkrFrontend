/* eslint-disable react/no-unescaped-entities */
import { Button, Img, Text } from "components";
import DetailHeader from "layout/DetailHeader";
import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";
import EffectivenessChart from "../AffiliateCharts/EffectivenessChart";
import CommissionChart from "../AffiliateCharts/CommissionChart";
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
const AffiliateDetails = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* <DetailHeader
        redDeleteButton={t("affiliates.deleteOffer")}
        outlineButtonText={t("affiliates.runDummyAPI")}
      /> */}
      {/* After active Affiliate Details */}
      <DetailHeader
        buttonName={t("common.edit")}
        outlineButtonText={t("affiliates.expireOffer")}
        menuImg="images/img_morevert.svg"
      />
      <div className="text-center my-[24px]">
        <Text className="text-[18px] font-bold">
          {t("affiliates.affiliateDetails")}
        </Text>
      </div>
      <div className=" w-full max-w-[980px] m-auto flex flex-col justify-center items-start w-full gap-6 md:p-[18px]">
        <div className="flex md:block border-gray-400 border rounded-lg px-[16px] py-[24px] text-center">
          <Img
            src="images/img_rectangle_34624255.png"
            alt="images"
            className="mr-[24px] w-[120px] h-[120px]"
          />
          <div className="flex items-baseline flex-col w-[78%] md:w-full gap-1.5 md:mt-[15px]">
            <Text className="text-[18px] font-bold md:text-left" as="h6">
              Upgrade Your Capture: Save 15% on Canon DSLRs
            </Text>
            <div className="flex flex-wrap items-center gap-3 sm:gap-y-1">
              <Text as="p">Online</Text>
              <div className="h-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
              <Text as="p">Entertainment</Text>
              <div className="h-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
              <div className="flex">
                <Text as="p">Expired on 29/02/2024</Text>
              </div>
              <div className="h-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
              <div className="flex">
                <Text as="p">www.cannon.com</Text>
              </div>
              <div className="h-[4px] w-[4px] bg-gray-700 rounded-[50%]" />
              <div className="flex">
                <Text as="p">AF-46543</Text>
              </div>
            </div>
            <Text as="p" className="!text-gray-700 text-left">
              Indulge in a delectable experience with McDonald's exclusive
              offer! Unveiling a sensational 50% discount, with savings of up to
              €250, on our sumptuous Big Burgers. Elevate your meal by placing a
              minimum order of €500 and savor the irresistible flavors.
            </Text>
            <div></div>
          </div>
          <div className="flex justify-center md:justify-end md:w-full">
            <Button
              size="md"
              shape="round"
              className="min-w-[63px] cursor-default"
            >
              Pending
            </Button>
          </div>
        </div>
        <Text className="w-full p-[20px] font-normal bg-gray-100 text-gray-700">
          {t("affiliates.noteYourAffiliateIsStillPendingForAdminApproval")}
        </Text>
        <div className="w-full">
          <Tabs
            className="black-tabs"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label={t("posted.effectiveness")} {...a11yProps(0)} />
            <Tab label={t("affiliates.commission")} {...a11yProps(1)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <EffectivenessChart />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <CommissionChart />
          </CustomTabPanel>
        </div>
      </div>
    </>
  );
};
export default AffiliateDetails;
