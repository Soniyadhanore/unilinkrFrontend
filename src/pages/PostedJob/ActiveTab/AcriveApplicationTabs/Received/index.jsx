import React from "react";
import { Img, Text } from "components";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import TableArrowDownUp from "components/TableArrowDownUp";
import SearchFilter from "pages/PostedJob/SearchFilter";
const Received = () => {
  const { t } = useTranslation();
  return (
    <>
      <SearchFilter />
      <div className="w-full">
        <TableContainer component={Paper} className="table-content">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.applicationId")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.student")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.appliedDateTime")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.applicantType")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold  w-[100px]">
                  <span className="flex items-center">
                    {t("posted.schedule")} <TableArrowDownUp />
                  </span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td" scope="row">
                  54321
                </TableCell>
                <TableCell>
                  <Text className="text-[14px] font-semibold">
                    Jenny Wilson
                  </Text>
                  <Text className="text-[14px] font-normal block min-w-[262px]">
                    jennywil2435@yahoo.com
                  </Text>
                </TableCell>
                <TableCell>25/01/2024, 10:00 AM</TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Morning Shift</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td" scope="row">
                  54321
                </TableCell>
                <TableCell>
                  <Text className="flex text-[14px] font-semibold">
                    Jenny Wilson{" "}
                    <Img className="ml-[3px]" src="images/profile-2user.svg" />
                  </Text>
                  <Text className="text-[14px] font-normal block min-w-[262px]">
                    jennywil2435@yahoo.com
                  </Text>
                </TableCell>
                <TableCell>25/01/2024, 10:00 AM</TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Morning Shift</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Received;