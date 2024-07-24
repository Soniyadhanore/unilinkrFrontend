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
import { InputAdornment } from "@mui/material";
import TableArrowDownUp from "components/TableArrowDownUp";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import DeleteModal from "modals/DeleteModal";
const RolesPermission = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDialogShow = () => {
    setDeleteDialog(true);
  };
  const handleCloseDialog = () => {
    setDeleteDialog(false);
  };
  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader />
        <div className="py-6 px-8 md:px-4 flex items-center gap-1">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-1">
                <Text className="text-gray-900_02 font-qanelas text-[18px] font-semibold">
                  {t("rolesAndPermission.roles&Permission")}
                </Text>
                <Img
                  className="h-[24px] w-[24px] cursor-pointer"
                  src="images/img_plus.svg"
                  alt="plus_one"
                  onClick={() => {
                    navigate("/create-role");
                  }}
                />
              </div>
              <Text className="text-gray-900_02 font-qanelas  text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur. Odio faucibus praesent.
              </Text>
            </div>
            <SearchInputComponent
              placeholder={t("common.search")}
              startAdornment={
                <InputAdornment position="start">
                  <Img
                    className="h-[24px] w-[24px] md:mr-0"
                    src="images/img_search.svg"
                    alt="img_search"
                  />
                </InputAdornment>
              }
              className="!my-[24px] max-w-[350px] w-full search-input"
            />
            <div className="w-full">
              <TableContainer component={Paper} className="table-content">
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="!font-semibold">
                        <span className="flex items-center">
                          {t("common.role")} <TableArrowDownUp />
                        </span>
                      </TableCell>
                      <TableCell className="!font-semibold">
                        <span className="flex items-center">
                          {t("rolesAndPermission.createdDate")}{" "}
                          <TableArrowDownUp />
                        </span>
                      </TableCell>
                      <TableCell className="!font-semibold">
                        <span className="flex items-center">
                          {t("common.status")} <TableArrowDownUp />
                        </span>
                      </TableCell>
                      <TableCell className="!font-semibold">
                        <span className="flex items-center">
                          {t("common.action")} <TableArrowDownUp />
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
                          navigate("/edit-and-view-role");
                        }}
                        className="cursor-pointer"
                      >
                        Administrator
                      </TableCell>
                      <TableCell>01/01/2024</TableCell>
                      <TableCell>
                        <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                          Active{" "}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div
                          className="flex gap-2 items-center cursor-pointer min-w-[170px] md:min-w-auto"
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
                            onClick={() => {
                              navigate("/edit-and-view-role");
                            }}
                          >
                            {t("common.edit")}
                          </MenuItem>
                          <MenuItem>{t("common.inactive")}</MenuItem>
                          <MenuItem onClick={handleDialogShow}>{t("common.delete")}</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="td"
                        scope="row"
                        onClick={() => {
                          navigate("/edit-and-view-role");
                        }}
                        className="cursor-pointer"
                      >
                        Administrator
                      </TableCell>
                      <TableCell>01/01/2024</TableCell>
                      <TableCell>
                        <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                          Inactive{" "}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div
                          className="flex gap-2 items-center cursor-pointer min-w-[170px] md:min-w-auto"
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
                            onClick={() => {
                              navigate("/edit-and-view-role");
                            }}
                          >
                            {t("common.edit")}
                          </MenuItem>
                          <MenuItem>{t("common.inactive")}</MenuItem>
                          <MenuItem onClick={handleDialogShow}>{t("common.delete")}</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="td"
                        scope="row"
                        onClick={() => {
                          navigate("/edit-and-view-role");
                        }}
                        className="cursor-pointer"
                      >
                        Administrator
                      </TableCell>
                      <TableCell>01/01/2024</TableCell>
                      <TableCell>
                        <Button className="w-[99px] h-[32px] cursor-default rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                          Active{" "}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div
                          className="flex gap-2 items-center cursor-pointer min-w-[170px] md:min-w-auto"
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
                            onClick={() => {
                              navigate("/edit-and-view-role");
                            }}
                          >
                            {t("common.edit")}
                          </MenuItem>
                          <MenuItem>{t("common.inactive")}</MenuItem>
                          <MenuItem onClick={handleDialogShow}>{t("common.delete")}</MenuItem>
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
      <DeleteModal
        open={deleteDialog}
        onClose={handleCloseDialog}
        headerText={t("rolesAndPermission.deleteRole")}
        contentText={t("rolesAndPermission.areYouSureYouWantToDeleteThisRole")}
      />
    </>
  );
};
export default RolesPermission;