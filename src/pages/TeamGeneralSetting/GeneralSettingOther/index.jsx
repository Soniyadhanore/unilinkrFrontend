import React, { useEffect, useState } from "react";
import DashboardHeader from "layout/DashboardHeader";
import { SelectBox, Text } from "components";
import { useTranslation } from "react-i18next";
import ChangePassword from "modals/ChangePassword";
import DeleteAccount from "modals/DeleteAccount";
import { useChangeLanguage } from "hooks/useChangeLanguage";
const languageSelect = [
  {
    value: "english",
    label: "English",
  },
  {
    value: "portuguese",
    label: "Portuguese",
  },
];
const GeneralSettingOther = () => {
  const { t } = useTranslation();
  const [changePasswordShow, setChangePasswordShow] = useState(false);
  const [deleteAccountShow, setDeleteAccountShow] = useState(false);

  //get custom hook
  const { changeLanguage, getLanguage, prevLanguage } = useChangeLanguage();
  //change language function
  const handleChangeLanguage = (lang) => {
    let data = {
      language: lang,
    };
    changeLanguage(data);
  };

  //get previous language
  useEffect(() => {
    getLanguage();
  }, []);

  const handleChangePasswordShow = () => {
    setChangePasswordShow(true);
  };
  const handleChangePasswordClose = () => {
    setChangePasswordShow(false);
  };
  const handleDeleteAccountShow = () => {
    setDeleteAccountShow(true);
  };
  const handleDeleteAccountClose = () => {
    setDeleteAccountShow(false);
  };
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader />
        <div className="py-6 px-8 md:px-4 flex items-start justify-between gap-5 md:block">
          <div className="relative w-full">
            <div className="w-full max-w-[772px]">
              <div className="flex items-center gap-1">
                <Text className="text-gray-900_02 text-[18px] font-semibold">
                  {t("other.other")}
                </Text>
              </div>
              <Text className="text-gray-900_02  text-sm font-normal">
                {t("other.customizeAdditionalPreferencesAndSettingsLike")}
              </Text>
            </div>
            <div className="w-full max-w-[545px] mt-[52px]">
              <div className="flex justify-between">
                <div>
                  <Text className="text-gray-900_02 text-[16x] font-semibold mb-[12px]">
                    {t("other.preferredLanguage")}
                  </Text>
                  <Text className="text-gray-900_02  text-sm font-normal">
                    {t("other.youCanChooseYourPreferredLanguage")}
                  </Text>
                </div>
                <div className="self-center">
                  <SelectBox
                    size="small"
                    options={languageSelect}
                    value={prevLanguage}
                    className="!mb-[0px] w-full !min-w-[140px]"
                    onSelect={(lang) => {
                      handleChangeLanguage(lang);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-[42px] md:block">
                <div>
                  <Text className="text-gray-900_02 text-[16x] font-semibold mb-[12px]">
                    {t("other.changePassword")}
                  </Text>
                  <Text className="text-gray-900_02  text-sm font-normal">
                    {t("other.youCanChangeYourPasswordFromHere")}
                  </Text>
                </div>
                <div className="self-center">
                  <Text
                    className="underline text-light_blue-900 font-semibold cursor-pointer md:mt-[4px]"
                    onClick={() => handleChangePasswordShow()}
                  >
                    {t("other.clickHereToChange")}
                  </Text>
                </div>
              </div>
              <div className="flex justify-between mt-[42px] md:block">
                <div>
                  <Text className="text-gray-900_02 text-[16x] font-semibold mb-[12px]">
                    {t("other.deleteAccount")}
                  </Text>
                  <Text className="text-gray-900_02  text-sm font-normal w-full max-w-[365px]">
                    {t("other.ifYouChooseToDeleteYourAccountThenAllYourData")}
                  </Text>
                </div>
                <div className="self-center">
                  <Text
                    className="underline text-light_blue-900 font-semibold cursor-pointer md:mt-[4px]"
                    onClick={() => handleDeleteAccountShow()}
                  >
                    {t("other.clickHereToDelete")}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChangePassword
        open={changePasswordShow}
        onClose={handleChangePasswordClose}
      />
      <DeleteAccount
        open={deleteAccountShow}
        onClose={handleDeleteAccountClose}
      />
    </>
  );
};

export default GeneralSettingOther;
