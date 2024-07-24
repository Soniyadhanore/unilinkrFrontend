import React from "react";
import DashboardHeader from "layout/DashboardHeader";
import { useTranslation } from "react-i18next";
import { EmptyPage } from "components/EmptyPage";
const NoAffiliate = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader />
        <div className="py-6 px-8 md:px-4 ">
          <EmptyPage
            Title={t("affiliates.ourAffiliateProgram")}
            SubTitle="Need assistance? Our support team is here for you. Happy promoting!"
            EmptyButtonText={t("affiliates.addAffiliates")}
            EmptyImage="images/img_image_97.png"
            Checklist={[
              {
                text: "Begin by creating online discounts with unique codes, offline discounts",
              },
              { text: "Announcements for promotions or updates" },
              { text: "General ads tailored to your audience" },
              { text: "Craft compelling messages and visuals" },
              // Add more checklist items here if needed
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default NoAffiliate;
