import React from "react";
import { useTranslation } from "react-i18next";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableArrowDownUp from "components/TableArrowDownUp";
import TransactionSearch from "../../TransactionSearch";
const StudentPayment = () => {
  const { t } = useTranslation();
  return (
    <>
      <TransactionSearch />
      <div className="w-full">
        <TableContainer component={Paper} className="table-content">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="whitespace-nowrap">
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("teams.transactionID")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold w-[340px] md:w-full">
                  <span className="flex items-center">
                    {t("rolesAndPermission.job")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.shift")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.student")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.amount")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("teams.netPayable")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.paymentDate")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="whitespace-nowrap"
              >
                <TableCell component="td" scope="row">
                  3565986540
                </TableCell>
                <TableCell>Hiring UX Designer on Urgent Basis</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>Courtney Henry</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>01/01/2024</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="whitespace-nowrap"
              >
                <TableCell component="td" scope="row">
                  3565986540
                </TableCell>
                <TableCell>Hiring UX Designer on Urgent Basis</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>Courtney Henry</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>01/01/2024</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="whitespace-nowrap"
              >
                <TableCell component="td" scope="row">
                  3565986540
                </TableCell>
                <TableCell>Hiring UX Designer on Urgent Basis</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>Courtney Henry</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>01/01/2024</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="whitespace-nowrap"
              >
                <TableCell component="td" scope="row">
                  3565986540
                </TableCell>
                <TableCell>Hiring UX Designer on Urgent Basis</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>Courtney Henry</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>01/01/2024</TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="whitespace-nowrap"
              >
                <TableCell component="td" scope="row">
                  3565986540
                </TableCell>
                <TableCell>Hiring UX Designer on Urgent Basis</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>Courtney Henry</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>01/01/2024</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default StudentPayment;
