import React from "react";
import { Button, Text } from "components";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CancelCloseJob from "modals/CancelCloseJob";
import DeleteModal from "modals/DeleteModal";
const JobDetailsListRight = () => {
  const { t } = useTranslation();
  const [cancelCloseJobShow, setCancelCloseJobShow] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const handleCancelCloseShow = () => {
    setCancelCloseJobShow(true);
  };
  const handleCancelCloseDialog = () => {
    setCancelCloseJobShow(false);
  };
  const handleDialogShow = () => {
    setDeleteDialog(true);
  };
  const handleCloseDialog = () => {
    setDeleteDialog(false);
  };
  return (
    <>
      <div className="border-gray-200 border border-solid bg-white-A700 rounded-lg py-5 px-4 mb-[24px]">
        <Text className="text-[14px] font-semibold mb-4">
          Lorem ipsum dolor sit amet cons
        </Text>
        <Text className="text-sm mb-4">
          Lorem ipsum dolor sit amet neque volutpat tellus nam uttempus.
        </Text>
        <Button
          className="cursor-pointer font-semibold text-center text-sm w-full mb-[12px]"
          shape="round"
          color="black_900"
          size="xl"
          variant="fill"
        >
          {t("common.edit")}
        </Button>
        <Button
          className="cursor-pointer font-semibold text-center text-sm w-full mb-[20px]"
          shape="round"
          color="black_900"
          size="xl"
          variant="outline"
        >
          {t("posted.duplicate")}
        </Button>
        <Divider>{t("common.or")}</Divider>
        <Text
          className="text-sm font-semibold text-gray-700 text-center mt-[20px] opacity-60	cursor-pointer"
          onClick={() => handleCancelCloseShow()}
        >
          {t("common.cancelCloseJob")}
        </Text>
        <Text
          className="underline text-sm font-semibold text-gray-700 text-center mt-[20px] opacity-60	cursor-pointer"
          onClick={() => handleDialogShow()}
        >
          {t("common.delete")}
        </Text>
      </div>
      <CancelCloseJob
        open={cancelCloseJobShow}
        onClose={handleCancelCloseDialog}
      />
      <DeleteModal
        open={deleteDialog}
        onClose={handleCloseDialog}
        headerText={t("common.deleteJob")}
        contentText={t("common.areYouSureYouWantToDeleteThisJob")}
      />
    </>
  );
};

export default JobDetailsListRight;
