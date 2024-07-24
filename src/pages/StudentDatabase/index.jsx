import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "layout/DashboardHeader";
import { Button, Img, SearchInputComponent, Text } from "components";
import { useTranslation } from "react-i18next";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableArrowDownUp from "components/TableArrowDownUp";
import StudentDatabaseFilter from "./StudentDatabaseFilter";
import { Chips } from "components/Chip";
const StudentDatabase = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [studentDatabaseFilterShow, setStudentDatabaseFilterShow] =
    useState(false);
  const studentDatabaseDrawer = (newOpen) => () => {
    setStudentDatabaseFilterShow(newOpen);
  };
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader />
        <div className="py-6 px-8 md:px-4 flex items-start justify-between gap-5 md:block">
          <div className="relative w-full">
            <div className="flex items-center gap-1">
              <Text className="text-gray-900_02 font-qanelas text-[18px] font-semibold">
                {t("sidebar.studentDatabase")}
              </Text>
            </div>
            <Text className="text-gray-900_02 font-qanelas  text-sm font-normal mb-3">
              Lorem ipsum dolor sit amet consectetur. Odio faucibus praesent.
            </Text>
            <div className="w-full">
              <div className="w-full flex justify-between !my-[20px]">
                <SearchInputComponent
                  placeholder={t("common.searchByNameDegree")}
                  startAdornment={
                    <Img
                      className="h-[24px] w-[24px] md:mr-0"
                      src="images/img_search.svg"
                      alt="img_search"
                    />
                  }
                  className="!mb-[0px] max-w-[240px] w-full search-input"
                />
                <div className="flex">
                  <Button
                    onClick={studentDatabaseDrawer(true)}
                    className="min-w-[82px] ml-[8px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] !p-[12px] text-sm bg-gray-100 text-gray-900_02"
                  >
                    {t("common.filter")}
                    <Img
                      src="images/img_iconly_lightoutline_filter.svg"
                      alt="Iconly/Light-Outline/Filter"
                      className="ml-[8px]"
                    />
                  </Button>
                </div>
              </div>
              <div className="w-full flex sm:block items-center justify-start gap-3">
                <Text className="text-[14px] sm:mb-[10px]">
                  Active filters :
                </Text>
                <div className="flex gap-3 sm:flex-wrap">
                  <Chips label="Specialized" />
                  <Chips label="Confirmed" />
                  <Chips label="Beja" />
                  <Chips label="Faro" />
                </div>
              </div>
              <div className="w-full">
                <TableContainer component={Paper} className="table-content">
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="!font-semibold w-[410px]">
                          <span className="flex items-center">
                            {t("studentDatabase.studentName")}{" "}
                            <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold w-[15%]">
                          <span className="flex items-center">
                            {t("common.faculty")} <TableArrowDownUp />
                          </span>
                        </TableCell>

                        <TableCell className="!font-semibold">
                          <span className="flex items-center">
                            {t("studentDatabase.degree")} <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold">
                          <span className="flex items-center">
                            {t("posted.areaWithWorkExperience")}{" "}
                            <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold">
                          <span className="flex items-center">
                            {t("studentDatabase.startYearOfDegree")}{" "}
                            <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold">
                          <span className="flex items-center">
                            {t("posted.preferredWorkLocation")}{" "}
                            <TableArrowDownUp />
                          </span>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        onClick={() => {
                          navigate("/student-profile");
                        }}
                        className="cursor-pointer"
                      >
                        <TableCell component="td" scope="row">
                          <div className="flex">
                            <Img
                              className="h-[40px] w-[40px] rounded-[50%] mr-[8px]"
                              src="images/img_ellipse_1561_40x40.png"
                              alt="circleimage_one"
                            />
                            <div>
                              <Text className="flex text-[14px] font-semibold">
                                Jenny Wilson{" "}
                                <Img
                                  className="ml-[3px]"
                                  src="images/img_tick_verify.svg"
                                />
                                <Img
                                  className="ml-[3px]"
                                  src="images/profile-2user.svg"
                                />
                                <span className="text-white-A700 bg-gradient-to-r from-blue-600 via-purple-400 to-purple-400 rounded py-[2px] px-[6px] text-[12px] ml-[2px] flex items-center">
                                  240{" "}
                                  <ErrorOutlineIcon className="w-[16px] h-[16px] ml-[4px]" />
                                </span>
                              </Text>
                              <Text className="text-[14px] font-normal block min-w-[262px]">
                                University of Algarve - Faculty of Economics
                              </Text>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>xyz</TableCell>
                        <TableCell>Communication - Digital Media</TableCell>
                        <TableCell>Hospitality</TableCell>
                        <TableCell>2022</TableCell>
                        <TableCell>Castelo Branco, Beja, Faro...</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="td" scope="row">
                          <div className="flex">
                            <Img
                              className="h-[40px] w-[40px] rounded-[50%] mr-[8px]"
                              src="images/img_ellipse_1561_40x40.png"
                              alt="circleimage_one"
                            />
                            <div>
                              <Text className="flex text-[14px] font-semibold">
                                Jenny Wilson{" "}
                                <Img
                                  className="ml-[3px]"
                                  src="images/img_tick_verify.svg"
                                />
                                <Img
                                  className="ml-[3px]"
                                  src="images/profile-2user.svg"
                                />
                                <span className="text-white-A700 bg-gradient-to-r from-blue-600 via-purple-400 to-purple-400 rounded py-[2px] px-[6px] text-[12px] ml-[2px] flex items-center">
                                  240{" "}
                                  <ErrorOutlineIcon className="w-[16px] h-[16px] ml-[4px]" />
                                </span>
                              </Text>
                              <Text className="text-[14px] font-normal block min-w-[262px]">
                                University of Algarve - Faculty of Economics
                              </Text>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>xyz</TableCell>
                        <TableCell>Communication - Digital Media</TableCell>
                        <TableCell>Hospitality</TableCell>
                        <TableCell>2022</TableCell>
                        <TableCell>Castelo Branco, Beja, Faro...</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="td" scope="row">
                          <div className="flex">
                            <Img
                              className="h-[40px] w-[40px] rounded-[50%] mr-[8px]"
                              src="images/img_ellipse_1561_40x40.png"
                              alt="circleimage_one"
                            />
                            <div>
                              <Text className="flex text-[14px] font-semibold">
                                Jenny Wilson{" "}
                                <Img
                                  className="ml-[3px]"
                                  src="images/img_tick_verify.svg"
                                />
                                <span className="text-white-A700 bg-gradient-to-r from-blue-600 via-purple-400 to-purple-400 rounded py-[2px] px-[6px] text-[12px] ml-[2px] flex items-center">
                                  240{" "}
                                  <ErrorOutlineIcon className="w-[16px] h-[16px] ml-[4px]" />
                                </span>
                              </Text>
                              <Text className="text-[14px] font-normal block min-w-[262px]">
                                University of Beira Interior
                              </Text>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>xyz</TableCell>
                        <TableCell>Communication - Digital Media</TableCell>
                        <TableCell>Hospitality</TableCell>
                        <TableCell>2022</TableCell>
                        <TableCell>Castelo Branco, Beja, Faro...</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="td" scope="row">
                          <div className="flex">
                            <Img
                              className="h-[40px] w-[40px] rounded-[50%] mr-[8px]"
                              src="images/img_ellipse_1561_40x40.png"
                              alt="circleimage_one"
                            />
                            <div>
                              <Text className="flex text-[14px] font-semibold">
                                Jenny Wilson{" "}
                                <Img
                                  className="ml-[3px]"
                                  src="images/img_tick_verify.svg"
                                />
                                <span className="text-white-A700 bg-gradient-to-r from-blue-600 via-purple-400 to-purple-400 rounded py-[2px] px-[6px] text-[12px] ml-[2px] flex items-center">
                                  240{" "}
                                  <ErrorOutlineIcon className="w-[16px] h-[16px] ml-[4px]" />
                                </span>
                              </Text>
                              <Text className="text-[14px] font-normal block min-w-[262px]">
                                Coimbra Higher Nursing School
                              </Text>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>xyz</TableCell>
                        <TableCell>Communication - Digital Media</TableCell>
                        <TableCell>Hospitality</TableCell>
                        <TableCell>2022</TableCell>
                        <TableCell>Castelo Branco, Beja, Faro...</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StudentDatabaseFilter
        open={studentDatabaseFilterShow}
        onClose={studentDatabaseDrawer(false)}
      />
    </>
  );
};

export default StudentDatabase;
