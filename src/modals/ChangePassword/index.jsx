/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, InputLabels, InputPassword, Text } from "components";
import { useChangePassword } from "hooks/useChangePassword";
const ChangePassword = ({ open, onClose }) => {
  const { t } = useTranslation();

  //sates
  let emptyData = {
    currentPassword: "",
    currentPasswordError: "",
    newPassword: "",
    newPasswordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
  };
  const [formData, setFormData] = useState(emptyData);
  const [disabledBtn, setDisabledBtn] = useState(true);

  //get custom hooks
  const { changePassword, allErrors } = useChangePassword();

  //handle submit form
  const handleChangePassword = () => {
    changePassword(formData);
  };

  //set error
  useEffect(() => {
    if (allErrors) {
      setFormData(allErrors);
    }
  }, [allErrors]);

  //close popup
  const handleClose = () => {
    onClose(false);
    setFormData(emptyData);
  };
  //disabled btn
  useEffect(() => {
    if (
      formData?.currentPassword &&
      formData?.newPassword &&
      formData?.confirmPassword
    ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [formData]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className=" m-auto"
    >
      <div className="w-full max-w-[380px] p-[24px]">
        <div className="flex justify-between mb-[12px]">
          <Text className="text-[18px] font-bold ">
            {t("other.changePassword")}
          </Text>
          <Img
            src="images/img_cancel_gray_900_02.svg"
            onClick={() => handleClose()}
            className="cursor-pointer"
          />
        </div>
        <Text className="text-gray-700 text-[14px] font-normal">
          {t("other.pleaseEnterYourNewPassword")}
        </Text>
        <div className="w-full mt-[24px]">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("other.currentPassword")}
          />
          <InputPassword
            className="fill"
            size="small"
            error={formData?.currentPasswordError ? true : false}
            errorText={formData?.currentPasswordError}
            password={formData?.currentPassword}
            setPassword={(value) => {
              let currentPassword = value;
              setFormData({
                ...formData,
                currentPassword,
                currentPasswordError: "",
              });
            }}
          />
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("other.newPassword")}
          />
          <InputPassword
            className="fill"
            size="small"
            error={formData?.newPasswordError ? true : false}
            errorText={formData?.newPasswordError}
            password={formData?.newPassword}
            setPassword={(value) => {
              let newPassword = value;
              setFormData({
                ...formData,
                newPassword,
                newPasswordError: "",
              });
            }}
          />
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("other.reEnterPassword")}
          />
          <InputPassword
            className="fill"
            size="small"
            error={formData?.confirmPasswordError ? true : false}
            errorText={formData?.confirmPasswordError}
            password={formData?.confirmPassword}
            setPassword={(value) => {
              let confirmPassword = value;
              setFormData({
                ...formData,
                confirmPassword,
                confirmPasswordError: "",
              });
            }}
          />
        </div>
      </div>

      <div className="flex justify-end align-end px-[24px] pb-[24px]">
        <Button
          className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] px-[13px]"
          shape="round"
          color="gray_400"
          variant="outline"
          onClick={() => handleClose()}
        >
          {t("common.cancel")}
        </Button>
        <Button
          className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] px-[13px] ml-[12px]"
          shape="round"
          color="black_900"
          variant="fill"
          onClick={handleChangePassword}
          disabled={disabledBtn}
        >
          {t("common.save")}
        </Button>
      </div>
    </Dialog>
  );
};

export default ChangePassword;
