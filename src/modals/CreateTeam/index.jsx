/* eslint-disable react/prop-types */
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, Input, InputLabels, SelectBox, Text } from "components";
import { Chip } from "@mui/material";
const timingSelect = [
  { value: "10:00 AM", label: "Corina McCoy" },
  { value: "10:30 AM", label: "Johh Wick" },
  { value: "11:00 AM", label: "Sara Parker" },
];
const CreateTeam = ({ open, onClose }) => {
  const { t } = useTranslation();
  const handleClose = () => {
    onClose(false);
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className=" m-auto"
    >
      <div className="md:min-w-fit min-w-[380px] p-[24px]">
        <div className="flex justify-between mb-[12px]">
          <Text className="text-[18px] font-bold ">
            {t("teams.createTeam")}
          </Text>
          <Img
            src="images/img_cancel_gray_900_02.svg"
            onClick={() => handleClose()}
            className="cursor-pointer"
          />
        </div>
        <Text className="text-gray-700 text-[14px] font-normal">
          {t("teams.pleaseEnterTeamNameToCreateTheTeam")}
        </Text>
        <div className="w-full mt-[24px]">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("teams.teamName")}
          />
          <Input
            className="fill"
            size="small"
            placeholder={t("teams.egHrTeam")}
          />
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("teams.addStudents")}
          />
          <SelectBox
            searchInput
            size="small"
            required
            options={timingSelect}
            value=""
            className="!mb-[0px] w-full"
            onSelect={(type, name) => {
              console.log(type, name);
            }}
          />
          <div className="flex mt-[10px] gap-3">
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" onDelete={handleDelete} />
          </div>
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
        >
          {t("common.save")}
        </Button>
      </div>
    </Dialog>
  );
};

export default CreateTeam;
