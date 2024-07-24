/* eslint-disable react/prop-types */
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Text, InputLabels, SelectBox } from "components";
import { Dialog } from "@mui/material";
const optionSelect = [
  { value: "Option1", label: "Option 1" },
  { value: "Option2", label: "Option 2" },
  { value: "Option3", label: "Option 3" },
];
const AddTeam = ({ open, onClose }) => {
  const { t } = useTranslation();
  const handleClose = () => {
    onClose(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="m-auto"
      >
        <div className="w-full max-w-[400px] p-[24px] pb-0">
          <div className="flex justify-between mb-[12px]">
            <Text className="text-[18px] font-bold">{t("chat.addToTeam")}</Text>
          </div>
          <Text className="text-gray-700">
            {t("chat.pleaseSelectTeamNameToAddStudentToTeam")}
          </Text>
          <div className="w-full mt-6">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("chat.teamName")}
            />
            <SelectBox
              size="small"
              required
              options={optionSelect}
              value=""
              onSelect={(type, name) => {
                console.log(type, name);
              }}
            />
          </div>
        </div>
        <div className="flex justify-end align-end px-[24px] pb-[24px]">
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] !px-[11px]"
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
          >
            {t("common.save")}
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default AddTeam;
