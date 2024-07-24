import React, { useState } from "react";
import DashboardHeader from "layout/DashboardHeader";
import { Img, Text } from "components";
import { useTranslation } from "react-i18next";
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
import AddPaymentMethod from "modals/AddPaymentMethod";
import { Menu, MenuItem } from "@mui/material";
const SavedPaymentMethod = () => {
  const { t } = useTranslation();
  const [addPaymentMethodShow, setAddPaymentMethodShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleAddPaymentMethodShow = () => {
    setAddPaymentMethodShow(true);
  };
  const handleAddPaymentMethodClose = () => {
    setAddPaymentMethodShow(false);
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
        <div className="py-6 px-8 md:px-4 flex items-start justify-between gap-5 md:block">
          <div className="relative w-full">
            <div className="w-full max-w-[772px]">
              <div className="flex items-center gap-1">
                <Text className="text-gray-900_02 font-qanelas text-[18px] font-semibold">
                  {t("teams.savedPaymentMethod")}
                </Text>
                <Img
                  className="h-[24px] w-[24px] cursor-pointer"
                  src="images/img_plus.svg"
                  alt="plus_one"
                  onClick={() => handleAddPaymentMethodShow()}
                />
              </div>
              <Text className="text-gray-900_02 font-qanelas  text-sm font-normal">
                {t(
                  "teams.manageAndSecurelyStorePreferredPaymentMethodsForConvenientTransactions"
                )}
              </Text>
            </div>
            <div className="w-full mt-[24px]">
              <div className="w-full">
                <TableContainer component={Paper} className="table-content">
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow className="md:whitespace-nowrap">
                        <TableCell className="!font-semibold min-w-[200px]">
                          <span className="flex items-center">
                            {t("teams.cardNumber")} <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold">
                          <span className="flex items-center">
                            {t("affiliates.expiryDate")} <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        className="cursor-pointer md:whitespace-nowrap"
                      >
                        <TableCell component="td" scope="row">
                          <div className="flex">
                            <Img
                              className="h-[24px] w-[37px] mr-[8px]"
                              src="images/visa.svg"
                              alt="circleimage_one"
                            />
                            <div>
                              <Text className="text-[14px]">
                                XXXX XXXX XXXX 1234
                              </Text>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>01/2024 <span className="text-[14px] text-red-700">(Expired)</span></TableCell>
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
                            <MenuItem
                              onClick={() => handleAddPaymentMethodShow()}
                            >
                              {t("common.edit")}
                            </MenuItem>
                            <MenuItem>{t("common.delete")}</MenuItem>
                          </Menu>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        className="cursor-pointer md:whitespace-nowrap"
                      >
                        <TableCell component="td" scope="row">
                          <div className="flex">
                            <Img
                              className="h-[24px] w-[37px] mr-[8px]"
                              src="images/visa.svg"
                              alt="circleimage_one"
                            />
                            <div>
                              <Text className="text-[14px]">
                                XXXX XXXX XXXX 1234
                              </Text>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>05/2024</TableCell>
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
                            <MenuItem
                              onClick={() => handleAddPaymentMethodShow()}
                            >
                              {t("common.edit")}
                            </MenuItem>
                            <MenuItem>{t("common.delete")}</MenuItem>
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
      </div>
      <AddPaymentMethod
        open={addPaymentMethodShow}
        onClose={handleAddPaymentMethodClose}
      />
    </>
  );
};

export default SavedPaymentMethod;
