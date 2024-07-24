import { Button, Img } from "components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const RolesHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="self-stretch py-[20px] px-[32px] border-gray-200 border-b border-solid bg-white-A700">
      <div className="w-full flex justify-between items-center">
        <Img
          className="h-[24px] w-[24px] cursor-pointer"
          src="images/img_cancel_gray_900_02.svg"
          alt="cancel_one"
          onClick={() => {
            navigate("/roles-and-permission");
          }}
        />
        <Button className="sm:px-5 font-semibold min-w-[100px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] px-[20px] text-sm bg-black-900 text-white-A700">
          {t("common.save")}
        </Button>
      </div>
    </div>
  );
};
export default RolesHeader;
