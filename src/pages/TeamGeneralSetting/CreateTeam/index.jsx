import React from "react";
import {
  Button,
  CheckBox,
  Img,
  Input,
  InputLabels,
  SearchInputComponent,
  Text,
} from "components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const CreateTeam = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full pb-[24px] bg-white-A700">
      <div className="self-stretch py-[20px] px-[32px] border-gray-200 border-b border-solid bg-white-A700">
        <div className="w-full flex justify-between items-center">
          <Img
            className="h-[24px] w-[24px] cursor-pointer"
            src="images/img_cancel_gray_900_02.svg"
            alt="cancel_one"
            onClick={() => {
              navigate("/teams");
            }}
          />
          <Button className="sm:px-5 font-semibold min-w-[100px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] px-[20px] text-sm bg-black-900 text-white-A700">
            {t("common.save")}
          </Button>
        </div>
      </div>
      <div className="text-center my-[24px]">
        <Text className="text-[18px] font-bold">{t("teams.createTeam")}</Text>
        {/* Edit team  */}
        {/* <Text className="text-[18px] font-bold">{t("teams.editTeam")}</Text> */}
      </div>
      <div className="w-full max-w-[860px] flex flex-col self-center justify-center p-[24px] sm:p-5 border-gray-200 border bg-white-A700 rounded">
        <div className="w-full max-w-[320px]">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("teams.teamName")}
          />
          <Input
            className="fill"
            size="small"
            placeholder={t("rolesAndPermission.egAdminEmployee")}
          />
        </div>
        <Text className="text-[16px] font-semibold mb-[20px]">
          {t("teams.addStudent")}
        </Text>
        <div className="w-full flex justify-between">
          <SearchInputComponent
            placeholder="Search by student name"
            startAdornment={
              <Img
                className="h-[20px] w-[20px] md:mr-0"
                src="images/img_search.svg"
                alt="img_search"
              />
            }
            className="!mb-[0px] max-w-[240px] w-full search-input"
          />
          <div className="flex self-center">
            <CheckBox className="text-center mr-[8px] mt-[0px]" />
            <Text className="mt-[2px]">{t("teams.selectAll")}</Text>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between my-[16px]">
            <div>
              <Text className="font-semibold">Corina McCoy</Text>
              <Text className="font-normal">corinamccoy@gmail.com</Text>
            </div>
            <CheckBox className="text-center mr-[16px] mt-[0px]" />
          </div>
          <div className="w-full flex justify-between my-[16px]">
            <div>
              <Text className="font-semibold">John Wick</Text>
              <Text className="font-normal">johnwick@gmail.com</Text>
            </div>
            <CheckBox className="text-center mr-[16px] mt-[0px]" />
          </div>
          <div className="w-full flex justify-between my-[16px]">
            <div>
              <Text className="font-semibold">Sara Parker</Text>
              <Text className="font-normal">saraparker@gmail.com</Text>
            </div>
            <CheckBox className="text-center mr-[16px] mt-[0px]" />
          </div>
          <div className="w-full flex justify-between my-[16px]">
            <div>
              <Text className="font-semibold">Arlene McCoy</Text>
              <Text className="font-normal">arlenemccoy@gmail.com</Text>
            </div>
            <CheckBox className="text-center mr-[16px] mt-[0px]" />
          </div>

        </div>
      </div>
    </div>
  );
};
export default CreateTeam;
