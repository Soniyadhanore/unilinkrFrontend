/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, Text, TextArea } from "components";
import { useDeleteAccount } from "../../hooks/useDeleteAccount";
const DeleteAccount = ({ open, onClose }) => {
  const { t } = useTranslation();

  //states
  let emptyObj = { reason: "", reasonError: "" };
  const [submitData, setSubmitData] = useState(emptyObj);

  //get custom hooks
  const { deleteAccount } = useDeleteAccount();

  //handle submit form
  const handleDeleteAccount = () => {
    console.log(submitData);
    if (!submitData?.reason) {
      setSubmitData({
        ...submitData,
        reasonError: "please add reason for deletion of account.",
      });
      return;
    }
    let data = {
      reason: submitData?.reason,
    };
    deleteAccount(data);
  };

  //close popup function
  const handleClose = () => {
    onClose(false);
    setSubmitData(emptyObj);
  };
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
            {t("other.deleteAccount")}
          </Text>
          <Img
            src="images/img_cancel_gray_900_02.svg"
            onClick={() => handleClose()}
            className="cursor-pointer"
          />
        </div>
        <Text className="text-gray-700 text-[14px] font-normal">
          {t("other.ifYouChooseToDeleteYourAccount")}
        </Text>
        <div className="w-full mt-[24px]">
          <div className="flex justify-between mt-[24px] mb-[4px] ">
            <Text className="text-[12px] font-semibold">
              {t("common.reason")}
            </Text>
            <Text className="text-[12px] font-normal">
              {submitData?.reason?.length}/250
            </Text>
          </div>
          <TextArea
            className="fill w-full max-w-[332px]"
            size="small"
            setTextAreaValue={(reason) => {
              if (reason.length > 250) return;
              setSubmitData({ ...submitData, reason, reasonError: "" });
            }}
            textAreaValue={submitData?.reason}
            errorText={submitData?.reasonError}
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
          disabled={!submitData?.reason}
          onClick={handleDeleteAccount}
        >
          {t("common.save")}
        </Button>
      </div>
    </Dialog>
  );
};

export default DeleteAccount;
