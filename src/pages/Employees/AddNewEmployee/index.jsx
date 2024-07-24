import React from "react";
import {
  Button,
  Img,
  Input,
  InputLabels,
  PhoneInputComponent,
  SelectBox,
  Text,
} from "components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import Alert from "@mui/material/Alert";
// import CheckIcon from "@mui/icons-material/Check";
const roleSelect = [
  {
    value: "Employee",
    label: "Employee",
  },
  { value: "Other", label: "Other" },
];
const AddNewEmployee = () => {
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
              navigate("/employees");
            }}
          />
          <Button className="sm:px-5 font-semibold min-w-[100px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] px-[20px] text-sm bg-black-900 text-white-A700">
            {t("common.save")}
          </Button>
        </div>
      </div>
      {/* <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
        className="z-[999] !bg-gray-100 fixed left-0 right-0 top-[24px] mx-auto w-full max-w-[382px]"
      >
        {t("alertMessages.successEmployeeHasBeenSuccessfullyAdded")}
      </Alert> */}
      <div className="text-center my-[24px]">
        <Text className="text-[18px] font-bold">
          {t("employees.addNewEmployee")}
        </Text>
      </div>
      <div className="w-full max-w-[475px] flex flex-col self-center justify-center p-[24px] sm:p-5 border-gray-200 border bg-white-A700 rounded">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("common.firstName")}
              mandatoryAsterisk="*"
            />
            <Input className="fill" size="small" />
          </div>
          <div className="w-full">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("common.lastName")}
              mandatoryAsterisk="*"
            />
            <Input className="fill" size="small" />
          </div>
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("common.emailAddress")}
            mandatoryAsterisk="*"
          />
          <Input className="fill" size="small" />
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("common.contactPersonMobile")}
            mandatoryAsterisk="*"
          />
          <PhoneInputComponent
            className="fill"
            size="small"
            value={"351"}
            country={"pt"}
            onChange={(value, data) => {
              let mobileNumber = value;
              let countryCode = data?.dialCode;
              console.log(mobileNumber, countryCode);
            }}
          />
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("common.designation")}
            mandatoryAsterisk="*"
          />
          <Input className="fill" size="small" />
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("common.role")}
          />
          <SelectBox
            size="small"
            required
            options={roleSelect}
            value=""
            onSelect={(type, name) => {
              console.log(type, name);
            }}
          />
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("employees.branchFranchiseeName")}
            mandatoryAsterisk="*"
          />
          <Input className="fill" size="small" />
        </div>
      </div>
    </div>
  );
};
export default AddNewEmployee;
