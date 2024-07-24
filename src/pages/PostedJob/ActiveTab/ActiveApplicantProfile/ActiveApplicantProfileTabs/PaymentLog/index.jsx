import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Alert } from "@mui/material";
import { Button, Img, SearchInputComponent, Text } from "components";
import AddPaymentMethod from "modals/AddPaymentMethod";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const PaymentLog = () => {
  const { t } = useTranslation();
  const [addPaymentMethodShow, setAddPaymentMethodShow] = useState(false);
  const handleAddPaymentMethodShow = () => {
    setAddPaymentMethodShow(true);
  };
  const handleAddPaymentMethodClose = () => {
    setAddPaymentMethodShow(false);
  };
  return (
    <>
      <div className="w-full flex justify-between !my-[20px]">
        <Alert
          severity="error"
          className="z-[999] !bg-deep_orange-50_01 fixed left-0 right-0 top-[24px] mx-auto w-full max-w-[632px] sm:max-w-[calc(100%_-_20px)] sm:mx-auto"
        >
          <Text className="font-semibold">Opps! No Payment Method</Text>
          <Text className="mb-[14px]">
            There is no payment method defined under your account. Please add in
            order to proceed.
          </Text>
          <Button
            className="cursor-pointer font-semibold text-center text-sm px-[24px]"
            shape="round"
            color="black_900"
            size="xl"
            variant="fill"
            onClick={() => handleAddPaymentMethodShow()}
          >
            {t("teams.addPaymentMethod")}
          </Button>
        </Alert>
        <SearchInputComponent
          placeholder={t("common.search")}
          startAdornment={
            <Img
              className="h-[24px] w-[24px] md:mr-0"
              src="images/img_search.svg"
              alt="img_search"
            />
          }
          className="!mb-[0px] max-w-[300px] w-full search-input"
        />
        <Button className="min-w-[82px] md:ml-[8px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] !p-[12px] text-sm bg-gray-100 text-gray-900_02">
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
                    {t("posted.paymentDate")}
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.amount")}
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.paymentBy")}
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("rolesAndPermission.paymentMethod")}
                  </span>
                </TableCell>
                <TableCell className="!font-semibold  w-[100px]">
                  <span className="flex items-center">
                    {t("posted.remark")}
                  </span>
                </TableCell>
                <TableCell className="!font-semibold  w-[100px]">
                  {" "}
                  {t("common.status")}
                </TableCell>
                <TableCell className="!font-semibold  w-[100px]"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td" scope="row">
                  23/02/2024
                </TableCell>
                <TableCell>€300,000.00</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell className="whitespace-nowrap">
                  XXXX XXXX XXXX 1234
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  This is for slot 1
                </TableCell>
                <TableCell>
                  {" "}
                  <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                    Pending{" "}
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Img
                    className="m-auto"
                    src="images/Download1.svg"
                    alt="Download"
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td" scope="row">
                  23/02/2024
                </TableCell>
                <TableCell>€300,000.00</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell className="whitespace-nowrap">
                  XXXX XXXX XXXX 1234
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  This is for slot 1
                </TableCell>
                <TableCell>
                  {" "}
                  <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                    Pending{" "}
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Img
                    className="m-auto"
                    src="images/Download1.svg"
                    alt="Download"
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td" scope="row">
                  23/02/2024
                </TableCell>
                <TableCell>€300,000.00</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell className="whitespace-nowrap">
                  XXXX XXXX XXXX 1234
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  This is for slot 1
                </TableCell>
                <TableCell>
                  {" "}
                  <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                    Pending{" "}
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Img
                    className="m-auto"
                    src="images/Download1.svg"
                    alt="Download"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <AddPaymentMethod
        open={addPaymentMethodShow}
        onClose={handleAddPaymentMethodClose}
      />
    </>
  );
};

export default PaymentLog;
