import React from "react";
import { Button, Img } from "components";
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
const JobCharges = () => {
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
                    {t("posted.postedJobDate")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.amount")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.paymentDate")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("common.status")} <TableArrowDownUp />
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
                <TableCell>01/01/2024</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>
                  <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                    Pending{" "}
                  </Button>
                </TableCell>
                <TableCell>
                  <Img
                    className="h-[20px] w-[20px]"
                    src="images/img_icon.svg"
                    alt="icon_one"
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="whitespace-nowrap"
              >
                <TableCell component="td" scope="row">
                  3565986540
                </TableCell>
                <TableCell>Hiring UX Designer on Urgent Basis</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>
                  <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                    Pending{" "}
                  </Button>
                </TableCell>
                <TableCell>
                  <Img
                    className="h-[20px] w-[20px]"
                    src="images/img_icon.svg"
                    alt="icon_one"
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="whitespace-nowrap"
              >
                <TableCell component="td" scope="row">
                  3565986540
                </TableCell>
                <TableCell>Hiring UX Designer on Urgent Basis</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>
                  <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                    Pending{" "}
                  </Button>
                </TableCell>
                <TableCell>
                  <Img
                    className="h-[20px] w-[20px]"
                    src="images/img_icon.svg"
                    alt="icon_one"
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="whitespace-nowrap"
              >
                <TableCell component="td" scope="row">
                  3565986540
                </TableCell>
                <TableCell>Hiring UX Designer on Urgent Basis</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>
                  <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                    Pending{" "}
                  </Button>
                </TableCell>
                <TableCell>
                  <Img
                    className="h-[20px] w-[20px]"
                    src="images/img_icon.svg"
                    alt="icon_one"
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="whitespace-nowrap"
              >
                <TableCell component="td" scope="row">
                  3565986540
                </TableCell>
                <TableCell>Hiring UX Designer on Urgent Basis</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>€120.00</TableCell>
                <TableCell>01/01/2024</TableCell>
                <TableCell>
                  <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                    Pending{" "}
                  </Button>
                </TableCell>
                <TableCell>
                  <Img
                    className="h-[20px] w-[20px]"
                    src="images/img_icon.svg"
                    alt="icon_one"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
export default JobCharges;