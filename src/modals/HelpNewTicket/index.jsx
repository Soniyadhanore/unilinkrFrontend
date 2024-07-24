/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Input, InputLabels, SelectBox, Text } from "components";
import EditorComponent from "components/Editor";
import { useHelps } from "hooks/useHelps";
import { getTextLengthOfTextEditor } from "common/HelperFunctions";
const jobIdSelect = [
  {
    value: "",
    label: "Select Job ID",
  },
  {
    value: "Option1",
    label: "Option",
  },
  {
    value: "Option2",
    label: "Option",
  },
  { value: "Option3", label: "Option" },
  { value: "Option4", label: "Option" },
];
const HelpNewTicket = ({ open, onClose, getHelpsList }) => {
  const { t } = useTranslation();
  const handleClose = () => {
    onClose(false);
  };

  //integration
  const [formData, setFormData] = useState({
    type_id: "",
    job_id: "",
    title: "",
    message: "",
  });

  // get custom hooks
  const {
    getCategoryTypeList,
    categoryList,
    createHelp,
    helpsAndSupportErrors,
  } = useHelps();

  //set errors
  useEffect(() => {
    if (helpsAndSupportErrors) {
      setFormData(helpsAndSupportErrors);
    }
  }, [helpsAndSupportErrors]);

  useEffect(() => {
    getCategoryTypeList();
  }, []);

  // handleSubmit
  const handleSubmitForm = () => {
    createHelp(formData, handleClose, getHelpsList);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="m-auto"
    >
      <div className="w-full max-w-[380px] p-[24px]">
        <div className="flex flex-col justify-between mb-6">
          <Text className="text-[18px] font-bold mb-2">
            {t("helpSupport.help_NewTicket")}
          </Text>
          <Text className="text-[14px] text-gray-700 ">
            {t("helpSupport.pleaseEnterBelowDetailToCreateATicket")}
          </Text>
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("posted.type")}
            mandatoryAsterisk="*"
          />
          <SelectBox
            size="small"
            required
            options={categoryList || []}
            value={formData?.type_id}
            onSelect={(type_id, name) => {
              console.log(type_id, name);
              setFormData({
                ...formData,
                type_id,
                type_idError: "",
              });
            }}
            error={formData?.type_idError}
          />
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("posted.jobID")}
          />
          <SelectBox
            size="small"
            options={jobIdSelect}
            value={formData?.job_id}
            onSelect={(job_id, name) => {
              console.log(job_id, name);
              setFormData({
                ...formData,
                job_id,
                job_idError: "",
              });
            }}
            error={formData?.job_idError}
          />
        </div>
        <div className="w-full">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("posted.title")}
            mandatoryAsterisk="*"
          />
          <Input
            className="fill"
            size="small"
            placeholder="Eg. HR Team"
            value={formData?.title}
            onChange={(title) => {
              console.log("totle", title);
              if (title?.length > 80) return;
              setFormData({
                ...formData,
                title,
                titleError: "",
              });
            }}
            error={formData?.titleError}
          />
        </div>
        <div className="text-[16px] font-semibold relative">
          <div className="flex justify-between mb-[4px] ">
            <InputLabels
              className="flex flex-col gap-1 items-start justify-start w-full"
              labelText={t("posted.description")}
              mandatoryAsterisk="*"
            />
            <Text className="text-[12px] font-normal">
              {" "}
              <span style={{ color: formData?.messageError ? "red" : "" }}>
                {getTextLengthOfTextEditor(formData?.message)}
              </span>
              /300
            </Text>
          </div>
          <EditorComponent
            className={"mb-6"}
            value={formData?.message}
            onChange={(value) => {
              let message = value;
              let count = getTextLengthOfTextEditor(message);
              if (count > 300) {
                setFormData({
                  ...formData,
                  message,
                  messageError: "Max characters limit should be less than 300.",
                });
              } else {
                setFormData({
                  ...formData,
                  message,
                  messageError: "",
                });
              }
            }}
            error={formData?.messageError}
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
          onClick={handleSubmitForm}
        >
          {t("common.submit")}
        </Button>
      </div>
    </Dialog>
  );
};
export default HelpNewTicket;
