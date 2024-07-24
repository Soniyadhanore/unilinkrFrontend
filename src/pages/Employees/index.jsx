import React, { useState } from "react";
import DashboardHeader from "layout/DashboardHeader";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SearchInputComponent } from "components/SearchInput";
import {
  //  Alert, 
  InputAdornment, Menu, MenuItem } from "@mui/material";
import TableArrowDownUp from "components/TableArrowDownUp";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FilterEmployee from "./FilterEmployee";
// import CheckIcon from "@mui/icons-material/Check";
const Employees = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [rightFilterEmployee, setRightFilterEmployee] = useState(false);
  const toggleRightFilter = () => {
    setRightFilterEmployee(!rightFilterEmployee);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader />

        <div className="py-6 px-8 md:px-4 flex items-center gap-1">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start gap-1">
              {/* Alert Message */}
              {/* <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="success"
                className="z-[999] !bg-gray-100 fixed left-0 right-0 top-[24px] mx-auto w-full max-w-[382px]"
              >
                Success! Employee has been successfully Inactive.
              </Alert>
              <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="success"
                className="z-[999] !bg-gray-100 fixed left-0 right-0 top-[24px] mx-auto w-full max-w-[382px]"
              >
                Success! Reset password link has been successfully sent.
              </Alert> */}
              <div className="flex items-center gap-1">
                <Text className="text-gray-900_02 font-qanelas text-[18px] font-semibold">
                  {t("employees.employees")}
                </Text>
                <Img
                  className="h-[24px] w-[24px] cursor-pointer"
                  src="images/img_plus.svg"
                  alt="plus_one"
                  onClick={() => {
                    navigate("/add-new-employee");
                  }}
                />
              </div>
              <Text className="text-gray-900_02 font-qanelas  text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur. Odio faucibus praesent.
              </Text>
            </div>
            <div className="w-full flex justify-between !my-[24px]">
              <SearchInputComponent
                placeholder={t("common.searchByNameEmail")}
                startAdornment={
                  <InputAdornment position="start">
                    <Img
                      className="h-[24px] w-[24px] md:mr-0"
                      src="images/img_search.svg"
                      alt="img_search"
                    />
                  </InputAdornment>
                }
                className="!mb-[0px] max-w-[350px] w-full search-input"
              />
              <Button
                onClick={toggleRightFilter}
                className="min-w-[82px] md:ml-[8px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] !p-[12px] text-sm bg-gray-100 text-gray-900_02"
              >
                {t("common.filter")}
                <Img
                  src="images/img_iconly_lightoutline_filter.svg"
                  alt="Iconly/Light-Outline/Filter"
                  className="ml-[8px]"
                />
              </Button>
            </div>
            <div className="w-full">
              <TableContainer component={Paper} className="table-content">
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="!font-semibold">
                        <span className="flex items-center">
                          {t("employees.employeeName")} <TableArrowDownUp />
                        </span>
                      </TableCell>
                      <TableCell className="!font-semibold">
                        <span className="flex items-center">
                          {t("common.emailAddress")} <TableArrowDownUp />
                        </span>
                      </TableCell>
                      <TableCell className="!font-semibold">
                        <span className="flex items-center">
                          {t("common.role")} <TableArrowDownUp />
                        </span>
                      </TableCell>
                      <TableCell className="!font-semibold">
                        <span className="flex items-center">
                          {t("common.branch")} <TableArrowDownUp />
                        </span>
                      </TableCell>
                      <TableCell className="!font-semibold">
                        <span className="flex items-center">
                          {t("common.status")} <TableArrowDownUp />
                        </span>
                      </TableCell>
                      <TableCell className="!font-semibold">
                        <span className="flex items-center">
                          {" "}
                          {t("common.action")} 
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="td"
                        scope="row"
                        onClick={() => {
                          navigate("/editandview-employee");
                        }}
                      >
                        <div className="flex cursor-pointer">
                          <div className="text-gray-900_02 flex justify-center items-center mr-[12px] h-[40px] min-w-[40px] w-[40px] bg-gray-100 rounded-[50%] text-sm font-semibold">
                            EG
                          </div>
                          <Text className="text-sm font-semibold flex self-center whitespace-nowrap">
                            Erick Gibson
                          </Text>
                        </div>
                      </TableCell>
                      <TableCell>erickdgibson@rhyta.com</TableCell>
                      <TableCell>Employee</TableCell>
                      <TableCell className="whitespace-nowrap">
                        Lisbon Branch-1
                      </TableCell>
                      <TableCell>
                        <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                          Pending{" "}
                          <ErrorOutlineIcon className="w-[16px] h-[16px] ml-[8px]" />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div
                          className="flex gap-2 items-center cursor-pointer min-w-[170px] md:min-w-fit"
                          id="basic-button"
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <div className="flex border p-[8px] rounded">
                            <Text className="!text-blue_gray-900_01 mr-[8px]">
                              Actions
                            </Text>
                            <Img
                              src="images/img_arrow_down.svg"
                              alt="arrowDown"
                              className="mt-[5px]"
                            />
                          </div>
                        </div>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                          className="mt-[2px]"
                        >
                          <MenuItem>{t("common.resendPasswordLink")}</MenuItem>
                          <MenuItem>{t("common.inactive")}</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="td" scope="row"  onClick={() => {
                          navigate("/editandview-employee");
                        }}>
                        <div className="flex cursor-pointer">
                          <div className="text-gray-900_02 flex justify-center items-center mr-[12px] h-[40px] min-w-[40px] w-[40px] bg-gray-100 rounded-[50%] text-sm font-semibold">
                            RC
                          </div>
                          <Text className="text-sm font-semibold flex self-center whitespace-nowrap">
                            Robert Campbell
                          </Text>
                        </div>
                      </TableCell>
                      <TableCell>robertcampbell@armyspy.com</TableCell>
                      <TableCell>Employee</TableCell>
                      <TableCell>Lisbon Branch-1</TableCell>
                      <TableCell>
                        <Button className="w-[99px] h-[32px] cursor-pointer rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                          Active{" "}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div
                          className="flex gap-2 items-center cursor-pointer min-w-[170px] md:min-w-fit"
                          id="basic-button"
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <div className="flex border p-[8px] rounded">
                            <Text className="!text-blue_gray-900_01 mr-[8px]">
                              Actions
                            </Text>
                            <Img
                              src="images/img_arrow_down.svg"
                              alt="arrowDown"
                              className="mt-[5px]"
                            />
                          </div>
                        </div>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                          className="mt-[2px]"
                        >
                          <MenuItem>{t("common.resendPasswordLink")}</MenuItem>
                          <MenuItem>{t("common.inactive")}</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
      <FilterEmployee open={rightFilterEmployee} onClose={toggleRightFilter} />
    </>
  );
};

export default Employees;
