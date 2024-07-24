/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import {
  Button,
  CheckBox,
  DatePickerComponent,
  Img,
  Input,
  InputLabels,
  Radio,
  SelectBox,
  Text,
} from "components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Counter from "components/Counter";
const timingSelect = [
  { value: "10:00 AM", label: "10:00 AM" },
  { value: "10:30 AM", label: "10:30 AM" },
  { value: "11:00 AM", label: "11:00 AM" },
];
const AddShift = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [addWeeklyShift, setAddWeeklyShift] = useState(false);
  const [typeOfDatesShow, setTypeOfDates] = useState(false);
  const handleClose = () => {
    onClose(false);
  };
  const handleAddWeeklyShiftClose = () => {
    setAddWeeklyShift(false);
  };
  const handleAddWeeklyShift = () => {
    setAddWeeklyShift(true);
    handleClose();
  };
  // const handleTypeOfDatesShow = () => {
  //   setTypeOfDates(true);
  //   handleClose();
  // };
  const handleTypeOfDatesClose = () => {
    setTypeOfDates(false);
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
        <div className="w-full max-w-[588px] p-[24px]">
          <div className="flex justify-between mb-[12px]">
            <Text className="text-[18px] font-bold ">
              {t("posted.shift")} - 1
            </Text>
            <Img
              src="images/img_cancel_gray_900_02.svg"
              onClick={() => handleClose()}
              className="cursor-pointer"
            />
          </div>
          <Text className="text-gray-700">
            {t("postJob.setWeeklyShiftsChangesSavedWillApplyToAll")}
          </Text>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-5 md:gap-0 w-full mt-[24px]">
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("postJob.shiftName")}
                mandatoryAsterisk="*"
              />
              <Input
                className="fill"
                size="small"
                placeholder={t("postJob.egMorningShiftNightShiftShift")}
              />
            </div>
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("postJob.vacancies")}
                mandatoryAsterisk="*"
              />
              <Counter />
            </div>
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full mt-[28px]"
                labelText={t("postJob.startDate")}
                mandatoryAsterisk="*"
              />
              <DatePickerComponent className="!w-full" />
            </div>
            <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full mt-[28px]"
                labelText={t("postJob.endDate")}
                mandatoryAsterisk="*"
              />
              <DatePickerComponent />
            </div>

            {/* After Custom Date Field */}
            {/* <div className="w-full">
              <InputLabels
                className="flex flex-col gap-1 items-start justify-start w-full"
                labelText={t("postJob.selectDates")}
                mandatoryAsterisk="*"
              />
              <Input
                placeholder="Eg. 2, 8, 10, 15, 21, 25, 28"
                endAdornment={
                  <Img
                    className="h-[24px] w-[24px] md:mr-0 cursor-pointer relative right-[0px]"
                    src="images/Calendar.svg"
                    alt="info_one"
                    onClick={() => handleTypeOfDatesShow()}
                  />
                }
                className="fill"
                size="small"
              />
            </div> */}
          </div>
        </div>{" "}
        <div className="flex justify-end align-end px-[24px] pb-[24px]">
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] px-[13px] ml-[12px]"
            shape="round"
            color="black_900"
            variant="fill"
            onClick={() => handleAddWeeklyShift()}
          >
            {t("common.continue")}
          </Button>
        </div>
      </Dialog>
      <Dialog
        open={addWeeklyShift}
        onClose={handleAddWeeklyShiftClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className=" m-auto"
      >
        <div className="w-full max-w-[588px] p-[24px]">
          <div className="flex justify-between mb-[12px]">
            <Text className="text-[18px] font-bold">Morning Shift</Text>
            <Img
              src="images/img_cancel_gray_900_02.svg"
              onClick={() => setAddWeeklyShift(false)}
              className="cursor-pointer"
            />
          </div>
          <Text className="text-gray-700">
            {t("postJob.setWeeklyShiftsChangesSavedWillApplyToAll")}
          </Text>
          {/* Weekly Shift start */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-[24px]">
            <div className="flex">
              <CheckBox className="text-center mr-[8px] mt-[0px]" />
              <Text className="">{t("postJob.monday")}</Text>
            </div>
            <div className="col-span-2">
              <div className="flex gap-x-5 mb-[8px]">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <Img
                  src="images/img_delete_1.svg"
                  alt="Delete"
                  className="flex self-baseline m-[8px]"
                />
              </div>
              <div className="flex gap-x-5">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <Img
                  src="images/img_delete_1.svg"
                  alt="Delete"
                  className="flex self-baseline m-[8px]"
                />
              </div>
              <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
                <Img
                  src="images/img_icon_light_blue_900.svg"
                  alt="icon"
                  loading="lazy"
                />
                {t("common.addMore")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-[12px]">
            <div className="flex">
              <CheckBox className="text-center mr-[8px] mt-[0px]" />
              <Text className="">{t("postJob.tuesday")}</Text>
            </div>
            <div className="col-span-2">
              <div className="flex gap-x-5 mb-[8px]">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
              </div>
              <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
                <Img
                  src="images/img_icon_light_blue_900.svg"
                  alt="icon"
                  loading="lazy"
                />
                {t("common.addMore")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-[12px]">
            <div className="flex">
              <CheckBox className="text-center mr-[8px] mt-[0px]" />
              <Text className="">{t("postJob.wednesday")}</Text>
            </div>
            <div className="col-span-2">
              <div className="flex gap-x-5 mb-[8px]">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
              </div>
              <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
                <Img
                  src="images/img_icon_light_blue_900.svg"
                  alt="icon"
                  loading="lazy"
                />
                {t("common.addMore")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-[12px]">
            <div className="flex">
              <CheckBox className="text-center mr-[8px] mt-[0px]" />
              <Text className="">{t("postJob.thursday")}</Text>
            </div>
            <div className="col-span-2">
              <div className="flex gap-x-5 mb-[8px]">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
              </div>
              <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
                <Img
                  src="images/img_icon_light_blue_900.svg"
                  alt="icon"
                  loading="lazy"
                />
                {t("common.addMore")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-[12px]">
            <div className="flex">
              <CheckBox className="text-center mr-[8px] mt-[0px]" />
              <Text className="">{t("postJob.friday")}</Text>
            </div>
            <div className="col-span-2">
              <div className="flex gap-x-5 mb-[8px]">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
              </div>
              <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
                <Img
                  src="images/img_icon_light_blue_900.svg"
                  alt="icon"
                  loading="lazy"
                />
                {t("common.addMore")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-[12px]">
            <div className="flex">
              <CheckBox className="text-center mr-[8px] mt-[0px]" />
              <Text className="">{t("postJob.saturday")}</Text>
            </div>
            <div className="col-span-2">
              <div className="flex gap-x-5 mb-[8px]">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
              </div>
              <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
                <Img
                  src="images/img_icon_light_blue_900.svg"
                  alt="icon"
                  loading="lazy"
                />
                {t("common.addMore")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-[12px]">
            <div className="flex">
              <CheckBox className="text-center mr-[8px] mt-[0px]" />
              <Text className="">{t("postJob.sunday")}</Text>
            </div>
            <div className="col-span-2">
              <div className="flex gap-x-5 mb-[8px]">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
              </div>
              <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
                <Img
                  src="images/img_icon_light_blue_900.svg"
                  alt="icon"
                  loading="lazy"
                />
                {t("common.addMore")}
              </Button>
            </div>
          </div>
          {/* Weekly Shift end */}

          {/* Custom Shift Start */}
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-[24px]">
            <div className="flex">
              <CheckBox className="text-center mr-[8px] mt-[12px]" />
              <div className="w-full">
                <DatePickerComponent className="!w-full" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex gap-x-5 mb-[8px]">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <Img
                  src="images/img_delete_1.svg"
                  alt="Delete"
                  className="flex self-baseline m-[8px]"
                />
              </div>
              <div className="flex gap-x-5">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <Img
                  src="images/img_delete_1.svg"
                  alt="Delete"
                  className="flex self-baseline m-[8px]"
                />
              </div>
              <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
                <Img
                  src="images/img_icon_light_blue_900.svg"
                  alt="icon"
                  loading="lazy"
                />
                {t("common.addMore")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-[24px]">
            <div className="flex">
              <CheckBox className="text-center mr-[8px] mt-[12px]" />
              <div className="w-full">
                <DatePickerComponent className="!w-full" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex gap-x-5 mb-[8px]">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <Img
                  src="images/img_delete_1.svg"
                  alt="Delete"
                  className="flex self-baseline m-[8px]"
                />
              </div>
              <div className="flex gap-x-5">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <Img
                  src="images/img_delete_1.svg"
                  alt="Delete"
                  className="flex self-baseline m-[8px]"
                />
              </div>
              <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
                <Img
                  src="images/img_icon_light_blue_900.svg"
                  alt="icon"
                  loading="lazy"
                />
                {t("common.addMore")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-[24px]">
            <div className="flex">
              <CheckBox className="text-center mr-[8px] mt-[12px]" />
              <div className="w-full">
                <DatePickerComponent className="!w-full" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex gap-x-5 mb-[8px]">
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
                <SelectBox
                  size="small"
                  required
                  options={timingSelect}
                  value=""
                  className="!mb-[0px] w-full !max-w-[140px]"
                  onSelect={(type, name) => {
                    console.log(type, name);
                  }}
                />
              </div>
              <Button className="w-full text-light_blue-900 font-semibold underline flex items-center justify-left px-[0px] cursor-pointer !bg-white-A700">
                <Img
                  src="images/img_icon_light_blue_900.svg"
                  alt="icon"
                  loading="lazy"
                />
                {t("common.addMore")}
              </Button>
            </div>
          </div>

          {/* Custom Shift End */}
        </div>
        <div className="flex justify-end align-end px-[24px] pb-[24px]">
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] !px-[11px]"
            shape="round"
            color="gray_400"
            variant="outline"
          >
            {t("common.back")}
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

      <Dialog
        open={typeOfDatesShow}
        onClose={handleTypeOfDatesClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="m-auto"
      >
        <div className="w-full min-w-[376px] p-[24px]">
          <div className="flex justify-between mb-[12px]">
            <Text className="text-[18px] font-bold">
              {t("postJob.selectTypeOfDates")}
            </Text>
            <Img
              src="images/img_cancel_gray_900_02.svg"
              onClick={() => setTypeOfDates(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex justify-between ">
            <Radio label={t("postJob.dateRange")} />
            <Radio label={t("postJob.individualDate")} />
          </div>
        </div>
        <div className="border rounded-xl	mx-[24px] mb-[24px]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>
        <div className="flex justify-end align-end px-[24px] pb-[24px]">
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] !px-[11px]"
            shape="round"
            color="gray_400"
            variant="outline"
          >
            {t("common.back")}
          </Button>
          <Button
            className="cursor-pointer font-semibold text-center text-sm w-full max-w-[100px] px-[13px] ml-[12px]"
            shape="round"
            color="black_900"
            variant="fill"
            onClick={() => handleAddWeeklyShift()}
          >
            {t("common.ok")}
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default AddShift;
