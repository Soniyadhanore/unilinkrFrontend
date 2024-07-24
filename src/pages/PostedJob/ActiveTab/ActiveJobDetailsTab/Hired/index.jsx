import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Button, Img, SearchInputComponent, Text } from "components";
import TableArrowDownUp from "components/TableArrowDownUp";
import React from "react";
import { useTranslation } from "react-i18next";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
const options = [
  "Chat",
  "Clock-in/out Logs",
  "Add to Another Team",
  "Payment Logs",
  "Make Payment",
  "Raise Dispute",
];
const ITEM_HEIGHT = 48;
const Hired = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="w-full flex justify-between !my-[20px]">
        <SearchInputComponent
          placeholder={t("posted.searchByStudentNameOrEmailId")}
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
          <Table aria-label="simple table" className="manage-table">
            <TableHead>
              <TableRow>
                <TableCell className="!font-semibold whitespace-nowrap">
                  <span className="flex items-center">
                    {t("postJob.studentWorkerName")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.hiredDate")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.applicantType")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold">
                  <span className="flex items-center">
                    {t("posted.offer")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold  w-[100px]">
                  <span className="flex items-center">
                    {t("posted.schedule")} <TableArrowDownUp />
                  </span>
                </TableCell>
                <TableCell className="!font-semibold  w-[100px]"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  onClick={() => {
                    navigate("/active-applicant-profile");
                  }}
                >
                  <Text className="text-[14px] font-semibold">
                    Jenny Wilson
                  </Text>
                  <Text className="text-[14px] font-normal block min-w-[262px]">
                    jennywil2435@yahoo.com
                  </Text>
                </TableCell>
                <TableCell component="td" scope="row">
                  25/01/2024
                </TableCell>
                <TableCell>Public</TableCell>
                <TableCell className="underline">Joboffer.pdf</TableCell>
                <TableCell className="whitespace-nowrap">
                  Morning Shift
                </TableCell>
                <TableCell>
                  <div>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                      className="transform rotate-90"
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          selected={option === "Pyxis"}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
export default Hired;
