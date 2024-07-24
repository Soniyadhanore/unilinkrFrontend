/* eslint-disable react/prop-types */
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import { Button, Img, InputLabels, SelectBox, Text } from "components";
import { Rating } from "@mui/material";
import EditorComponent from "components/Editor";
const studentSelect = [
  {
    value: "Option",
    label: "Option",
  },
  {
    value: "Option",
    label: "Option",
  },
  { value: "Option", label: "Option" },
  { value: "Option", label: "Option" },
];
const SubmitFeedback = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [ratingvalue, setRatingValue] = React.useState(0);
  const handleClose = () => {
    onClose(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="m-auto"
    >
      <div className="w-full min-w-[475px] p-[24px]">
        <div className="flex justify-between mb-[12px]">
          <Text className="text-[18px] font-bold ">
            {t("posted.submitFeedback")}
          </Text>
          <Img
            src="images/img_cancel_gray_900_02.svg"
            onClick={() => handleClose()}
            className="cursor-pointer"
          />
        </div>
        <div className="bg-gray-100 p-[12px] rounded ">
          <Text className="text-[16px] font-semibold mb-[8px]">
            Frontend Developer
          </Text>
          <Text className="text-gray-900_02 text-[14px] font-normal">
            JID-1553165
          </Text>
        </div>
        <div className="w-full mt-[24px]">
          <InputLabels
            className="flex flex-col gap-1 items-start justify-start w-full"
            labelText={t("posted.students")}
          />
          <SelectBox
            size="small"
            required
            options={studentSelect}
            value=""
            onSelect={(type, name) => {
              console.log(type, name);
            }}
          />
        </div>
        <div className="text-[16px] font-semibold">
          <Text className="text-[16px] font-semibold mb-[16px]">
            {t("posted.rateStudentFor")}
          </Text>
          <div className="flex mb-[5px]">
            <Text className="font-semibold">
              {t("posted.workDedicationQuality")}
            </Text>
            <Img
              className="ml-[10px] h-[20px] w-[20px]"
              src="images/img_frame_1171276186.svg"
              alt="image"
            />
          </div>
          <Rating
            name="simple-controlled"
            value={ratingvalue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
          <div className="flex mb-[5px] mt-[16px]">
            <Text className="font-semibold">{t("posted.punctuality")}</Text>
          </div>
          <Rating
            name="simple-controlled"
            value={ratingvalue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
          <div className="flex mb-[5px] mt-[16px]">
            <Text className="font-semibold">
              {t("posted.personalRelations")}
            </Text>
          </div>
          <Rating
            name="simple-controlled"
            value={ratingvalue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
          <div className="flex justify-between mt-[24px] mb-[4px] ">
            <Text className="text-[12px] font-semibold">
              {t("posted.review")}
            </Text>
            <Text className="text-[12px] font-normal">300</Text>
          </div>
          <EditorComponent className={"mb-6"} />
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
          {t("common.submit")}
        </Button>
      </div>
    </Dialog>
  );
};

export default SubmitFeedback;
