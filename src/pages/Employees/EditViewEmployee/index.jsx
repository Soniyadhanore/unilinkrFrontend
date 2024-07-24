import React, { useState } from "react";
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
import DeleteModal from "modals/DeleteModal";
// import Alert from "@mui/material/Alert";
// import CheckIcon from "@mui/icons-material/Check";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
const roleSelect = [
  {
    value: "Employee",
    label: "Employee",
  },
  { value: "Other", label: "Other" },
];
const EditViewEmployee = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [deleteDialog, setDeleteDialog] = useState(false);
  const handleDialogShow = () => {
    setDeleteDialog(true);
  };
  const handleCloseDialog = () => {
    setDeleteDialog(false);
  };
  return (
    <>
      <div className="flex flex-col items-center w-full pb-[24px] bg-white-A700">
        <div className="self-stretch py-[20px] px-[32px] sm:px-[10px] border-gray-200 border-b border-solid bg-white-A700">
          <div className="w-full flex justify-between items-center">
            <Img
              className="h-[24px] w-[24px] cursor-pointer"
              src="images/img_cancel_gray_900_02.svg"
              alt="cancel_one"
              onClick={() => {
                navigate("/employees");
              }}
            />
            <div className="flex">
              {/* <Switch className="switch-btn" defaultChecked /> */}
              <Button className="sm:px-[8px] font-semibold md:min-w-fit min-w-[100px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] py-[11px] border-gray-400 border text-sm !bg-white-A700 text-gray-700_90 ml-[20px] sm:ml-[6px]">
                <ForwardToInboxIcon className="mobile-hidden" />
                <span className="mobile-show">
                  {t("common.resendPasswordLink")}{" "}
                </span>
              </Button>
              <Button
                onClick={handleDialogShow}
                className="sm:px-[8px] font-semibold md:min-w-fit min-w-[100px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] text-sm !bg-red-700 text-white-A700 ml-[20px] sm:ml-[6px]"
              >
                <img
                  className="w-[24px] h-[24px] hidden md:block filter-white"
                  src="images/img_delete_1.svg"
                  alt="img_delete_1"
                  loading="lazy"
                />
                <span className="md:hidden">{t("common.delete")}</span>
              </Button>
              <Button className="sm:px-[8px] font-semibold md:min-w-fit min-w-[100px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] text-sm bg-black-900 text-white-A700 ml-[20px] sm:ml-[6px]">
                {t("common.save")}
              </Button>
            </div>
          </div>
        </div>
        {/* Alert message */}
        {/* <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" className="absolute top-[24px] mx-[10px]">
          {t("alertMessages.successResetPasswordLinkHasBeenSuccessfullySent")}
        </Alert> */}
        <div className="text-center my-[24px]">
          <Text className="text-[18px] font-bold">
            {t("employees.editViewEmployee")}
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
              mandatoryAsterisk="*"
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
      <DeleteModal
        open={deleteDialog}
        onClose={handleCloseDialog}
        headerText={t("common.deleteEmployee")}
        contentText={t("common.areYouSureYouWantToDeleteThisEmployee")}
      />
    </>
  );
};
export default EditViewEmployee;
