import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Button, Img, Text } from "components";
import AddShift from "modals/AddShift";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const AddCustomShift = () => {
  const { t } = useTranslation();
  const [addShift, setAddShift] = useState(false);
  const handleAddShift = () => {
    setAddShift(true);
  };
  const handleAddShiftClose = () => {
    setAddShift(false);
  };
  return (
    <>
      <Button
        onClick={() => handleAddShift()}
        className="w-full !h-[56px] sm:px-5 text-light_blue-900 font-semibold underline border-gray-400 border rounded flex items-center justify-center cursor-pointer !bg-white-A700"
      >
        <Img
          src="images/img_icon_light_blue_900.svg"
          alt="icon"
          loading="lazy"
        />
        {t("postJob.addCustomShift")}
      </Button>
      {/* After Add Weekly Shift  Show Table*/}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col self-stretch items-center gap-8">
          <div className="w-full gap-[19px] sm:pb-5 border-gray-400 border border-solid rounded">
            <div className="flex justify-between items-center gap-5 px-[20px] py-[8px] bg-gray-100 rounded md:relative">
              <div className="">
                <Text className="text-gray-900_02 self-start md:ml-0 text-lg font-semibold">
                  Morning Shift
                </Text>
                <div className="flex items-center gap-3 md:block">
                  <Text className="text-gray-900_02  text-sm font-normal !text-blue_gray-900_01">
                    Vacancies: 5
                  </Text>
                  <div className="h-[4px] w-[4px] bg-gray-900_02 rounded-[50%] md:hidden" />
                  <Text className="text-gray-900_02  text-sm font-normal !text-blue_gray-900_01">
                    01/03/2024 to 31/03/2024
                  </Text>
                </div>
              </div>
              <div className="flex md:absolute md:right-[10px] md:top-[10px]">
                <Img
                  className="self-start h-[20px] w-[20px] mr-3 md:mr-0"
                  src="images/img_edit.svg"
                  alt="edit_one"
                />
                <Img
                  className="self-start h-[20px] w-[20px] mr-3 md:mr-0"
                  src="images/img_duplicate_1.svg"
                  alt="duplicate_one"
                />
                <Img
                  className="self-start h-[20px] w-[20px]"
                  src="images/img_delete_1.svg"
                  alt="delete_one"
                />
              </div>
            </div>
            <div className="flex justify-end mt-[12px]">
              <div className="flex justify-evenly items-center w-[265px] md:w-full mr-3 gap-2 md:mx-[15px] border-gray-400 border border-solid rounded">
                <Img
                  className="h-[16px] w-[16px]"
                  src="images/img_iconly_light_arrow.svg"
                  alt="icon_one"
                />
                <div className="flex justify-center">
                  <Button className="!bg-white-A700 !text-gray-900_02 min-w-[77px] flex items-center justify-center text-center cursor-pointer rounded-[0px] h-[32px] px-[7px] text-sm text-gray-700_90 border-x-2">
                    This Week
                  </Button>
                  <Button className="!bg-white-A700 !text-gray-900_02 border-t border-b border-r min-w-[124px] flex items-center justify-center text-center cursor-pointer rounded-[0px] h-[32px] px-[7px] text-sm text-gray-700_90 ">
                    04 - 10 Mar, 2024
                  </Button>
                </div>
                <Img
                  className="h-[16px] w-[16px]"
                  src="images/img_icon_gray_900_02.svg"
                  alt="icon_three"
                />
              </div>
            </div>
            <div className="time-table">
              <TableContainer component={Paper} className="table-content">
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="!font-semibold !text-center whitespace-nowrap">
                        {t("postJob.mon")}, 04 Mar
                      </TableCell>
                      <TableCell className="!font-semibold !text-center whitespace-nowrap">
                        {t("postJob.tue")}, 05 Mar
                      </TableCell>
                      <TableCell className="!font-semibold !text-center whitespace-nowrap">
                        {t("postJob.wed")}, 06 Mar
                      </TableCell>
                      <TableCell className="!font-semibold !text-center whitespace-nowrap">
                        {t("postJob.thu")}, 07 Mar
                      </TableCell>
                      <TableCell className="!font-semibold !text-center whitespace-nowrap">
                        {t("postJob.fri")}, 08 Mar
                      </TableCell>
                      <TableCell className="!font-semibold !text-center whitespace-nowrap">
                        {" "}
                        {t("postJob.sat")}, 09 Mar
                      </TableCell>
                      <TableCell className="!font-semibold !text-center whitespace-nowrap">
                        {" "}
                        {t("postJob.sun")}, 10 Mar
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        className="!border-r !border-gray-200_02 !p-[4px] !border-b-[none]"
                        component="td"
                        scope="row"
                      >
                        <Text className="opacity-0 hover:opacity-100 flex justify-center bg-blue-50 text-[12px] font-normal w-full text-center rounded p-[0px] h-[16px]">
                          <Img
                            src="images/img_icon_light_blue_900.svg"
                            alt="icon"
                            className="w-[16px] [h-16px]"
                          />
                        </Text>
                      </TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]"></TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]">
                        <Text className="md:whitespace-nowrap bg-blue-50 text-[12px] font-normal w-full text-center rounded p-[8px]">
                          10pm-07am
                        </Text>
                      </TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]"></TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]">
                        {" "}
                        <Text className="md:whitespace-nowrap bg-blue-50 text-[12px] font-normal w-full text-center rounded p-[8px]">
                          10pm-07am
                        </Text>
                      </TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]"></TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]"></TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        className="!border-r !border-gray-200_02 !p-[4px]"
                        component="td"
                        scope="row"
                      >
                        <Text className="md:whitespace-nowrap bg-blue-50 text-[12px] font-normal w-full  text-center rounded p-[8px]">
                          10pm-07am
                        </Text>
                      </TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]"></TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]">
                        <Text className="md:whitespace-nowrap bg-blue-50 text-[12px] font-normal w-full text-center rounded p-[8px]">
                          10pm-07am
                        </Text>
                      </TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]">
                        {" "}
                        <Text className="md:whitespace-nowrap bg-blue-50 text-[12px] font-normal w-full text-center rounded p-[8px]">
                          10pm-07am
                        </Text>
                      </TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]"></TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]"></TableCell>
                      <TableCell className="!border-r !border-gray-200_02 !p-[4px]">
                        <Text className="md:whitespace-nowrap bg-blue-50 text-[12px] font-normal w-full text-center rounded p-[8px]">
                          10pm-07am
                        </Text>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
        <div>
          <Button
            onClick={() => handleAddShift()}
            className="w-full !h-[56px] sm:px-5 text-light_blue-900 font-semibold underline flex items-center justify-center cursor-pointer !bg-white-A700"
          >
            <Img
              src="images/img_icon_light_blue_900.svg"
              alt="icon"
              loading="lazy"
            />
            {t("postJob.addCustomShift")}
          </Button>
        </div>
      </div>
      <AddShift open={addShift} onClose={handleAddShiftClose} />
    </>
  );
};

export default AddCustomShift;
