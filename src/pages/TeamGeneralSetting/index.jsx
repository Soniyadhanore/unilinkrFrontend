import React, { useState } from "react";
import DashboardHeader from "layout/DashboardHeader";
import { Button, Img, SearchInputComponent, Text } from "components";
import { useTranslation } from "react-i18next";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import {
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import TableArrowDownUp from "components/TableArrowDownUp";
import CreateTeam from "modals/CreateTeam";
import { useNavigate } from "react-router-dom";
import DeleteModal from "modals/DeleteModal";
import Collapse from "@mui/material/Collapse";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Teams = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [hrTeamOpen, setHrTeamOpen] = React.useState(false);
  const [digitalMarketingTeamOpen, setDigitalMarketingTeamOpen] =
    React.useState(false);
  const [accountTeamOpen, setAccountTeamOpen] = React.useState(false);
  const [createTeamShow, setCreateTeamShow] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteStudentDialog, setDeleteStudentDialog] = useState(false);

  const handleCreateTeamShow = () => {
    setCreateTeamShow(true);
  };
  const handleCreateTeamClose = () => {
    setCreateTeamShow(false);
  };
  const handleDialogShow = () => {
    setDeleteDialog(true);
  };
  const handleCloseDialog = () => {
    setDeleteDialog(false);
  };
  const handleDeleteStudentDialogShow = () => {
    setDeleteStudentDialog(true);
  };
  const handleDeleteStudentDialogClose = () => {
    setDeleteStudentDialog(false);
  };

  return (
    <>
      <div className="main-container pl-[240px] md:pl-0 pt-[60px]">
        <DashboardHeader />
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          className="z-[999] !bg-gray-100 fixed left-0 right-0 top-[24px] mx-auto w-full max-w-[382px] sm:max-w-[calc(100%_-_20px)] sm:mx-auto"
        >
          {t("alertMessages.successInviteLinkHasBeenSuccessfullySend")}
        </Alert>
        <div className="py-6 px-8 md:px-4 flex items-start justify-between gap-5 md:block">
          <div className="relative w-full">
            <div className="w-full max-w-[772px]">
              <div className="flex items-center gap-1">
                <Text className="text-gray-900_02 font-qanelas text-[18px] font-semibold">
                  {t("sidebar.teams")}
                </Text>
                <Img
                  className="h-[24px] w-[24px] cursor-pointer"
                  src="images/img_plus.svg"
                  alt="plus_one"
                  onClick={() => {
                    navigate("/create-team");
                  }}
                />
              </div>
              <Text className="text-gray-900_02 font-qanelas  text-sm font-normal mb-3">
                {t("teams.youCanCreateTeamsForPostJobs")}
              </Text>
            </div>
            <div className="w-full">
              <div className="w-full flex justify-between !my-[20px]">
                <SearchInputComponent
                  placeholder={t("common.search")}
                  startAdornment={
                    <Img
                      className="h-[24px] w-[24px] md:mr-0"
                      src="images/img_search.svg"
                      alt="img_search"
                    />
                  }
                  className="!mb-[0px] max-w-[240px] w-full search-input"
                />
              </div>
              <div className="w-full">
                <TableContainer component={Paper}>
                  <Table
                    aria-label="collapsible table"
                    style={{ minWidth: "1228px" }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell className="!font-semibold w-[25%]">
                          <span className="flex items-center">
                            {t("studentDatabase.studentName")}{" "}
                            <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold w-[15%]">
                          <span className="flex items-center">
                            {t("studentDatabase.degree")} <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold w-[15%]">
                          <span className="flex items-center">
                            {t("posted.areaWithWorkExperience")}{" "}
                            <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold w-[10%]">
                          <span className="flex items-center">
                            {t("studentDatabase.startYearOfDegree")}{" "}
                            <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold w-[15%]">
                          <span className="flex items-center">
                            {t("posted.preferredWorkLocation")}{" "}
                            <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="!font-semibold w-[10%]">
                          <span className="flex items-center">
                            {t("common.status")} <TableArrowDownUp />
                          </span>
                        </TableCell>
                        <TableCell className="w-[10%]"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <div className="w-[25%]">
                            <div className="flex items-center gap-3">
                              <Text className=" text-[16px] font-semibold self-center whitespace-nowrap">
                                {t("teams.salesTeam")}
                              </Text>
                              <Img
                                src="images/img_edit.svg"
                                alt="Edit"
                                className="w-[24px] h-[24px]"
                                onClick={() => handleCreateTeamShow()}
                              />
                              <Img
                                src="images/img_delete_1.svg"
                                alt="img_delete_1"
                                className="w-[24px] h-[24px]"
                                onClick={handleDialogShow}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[10%]">&nbsp;</TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[10%]">&nbsp;</TableCell>
                        <TableCell>
                          <div className="text-right">
                            <IconButton
                              aria-label="expand row"
                              size="small"
                              onClick={() => setOpen(!open)}
                            >
                              {open ? <RemoveIcon /> : <AddIcon />}
                            </IconButton>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ padding: 0 }} colSpan={7}>
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <TableBody className="!table w-full">
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                                className="cursor-pointer"
                              >
                                <TableCell
                                  component="td"
                                  scope="row"
                                  className="w-[25%]"
                                  onClick={() => {
                                    navigate("/student-profile");
                                  }}
                                >
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
                                        jennywil2435@yahoo.com
                                      </Text>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell className="w-[15%]">
                                  Communication - Digital Media
                                </TableCell>
                                <TableCell className="w-[15%]">
                                  Hospitality
                                </TableCell>

                                <TableCell className="w-[10%]">2022</TableCell>
                                <TableCell className="w-[15%]">
                                  Castelo Branco, Beja, Faro...
                                </TableCell>
                                <TableCell className="w-[10%]">
                                  <Button className="w-[99px] h-[32px] cursor-pointer rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                                    Invite Sent{" "}
                                  </Button>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center justify-end gap-3">
                                    <InputAdornment position="start">
                                      <Tooltip
                                        title="Resend Invite"
                                        placement="top"
                                      >
                                        <Img
                                          src="images/Resend-Invite.svg"
                                          alt="Resend-Invite"
                                          className="w-[24px] h-[24px]"
                                        />
                                      </Tooltip>
                                    </InputAdornment>
                                    <Img
                                      src="images/img_delete_1.svg"
                                      alt="img_delete_1"
                                      className="w-[24px] h-[24px]"
                                      onClick={handleDeleteStudentDialogShow}
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <div className="w-[25%]">
                            <div className="flex items-center gap-3">
                              <Text className=" text-[16px] font-semibold self-center whitespace-nowrap">
                                {t("teams.hrTeam")}
                              </Text>
                              <Img
                                src="images/img_edit.svg"
                                alt="Edit"
                                className="w-[24px] h-[24px]"
                                onClick={() => handleCreateTeamShow()}
                              />
                              <Img
                                src="images/img_delete_1.svg"
                                alt="img_delete_1"
                                className="w-[24px] h-[24px]"
                                onClick={handleDialogShow}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[10%]">&nbsp;</TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[10%]">&nbsp;</TableCell>
                        <TableCell>
                          <div className="text-right">
                            <IconButton
                              aria-label="expand row"
                              size="small"
                              onClick={() => setHrTeamOpen(!open)}
                            >
                              {hrTeamOpen ? <RemoveIcon /> : <AddIcon />}
                            </IconButton>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ padding: 0 }} colSpan={7}>
                          <Collapse
                            in={hrTeamOpen}
                            timeout="auto"
                            unmountOnExit
                          >
                            <TableBody className="!table w-full">
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                                className="cursor-pointer"
                              >
                                <TableCell
                                  component="td"
                                  scope="row"
                                  className="w-[25%]"
                                  onClick={() => {
                                    navigate("/student-profile");
                                  }}
                                >
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
                                        jennywil2435@yahoo.com
                                      </Text>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell className="w-[15%]">
                                  Communication - Digital Media
                                </TableCell>
                                <TableCell className="w-[15%]">
                                  Events/Festivals
                                </TableCell>

                                <TableCell className="w-[10%]">2022</TableCell>
                                <TableCell className="w-[15%]">
                                  Castelo Branco, Beja, Faro...
                                </TableCell>
                                <TableCell className="w-[10%]">
                                  <Button className="w-[99px] h-[32px] cursor-pointer rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                                    Invite Sent{" "}
                                  </Button>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center justify-end gap-3">
                                    <InputAdornment position="start">
                                      <Tooltip
                                        title="Resend Invite"
                                        placement="top"
                                      >
                                        <Img
                                          src="images/Resend-Invite.svg"
                                          alt="Resend-Invite"
                                          className="w-[24px] h-[24px]"
                                        />
                                      </Tooltip>
                                    </InputAdornment>
                                    <Img
                                      src="images/img_delete_1.svg"
                                      alt="img_delete_1"
                                      className="w-[24px] h-[24px]"
                                      onClick={handleDeleteStudentDialogShow}
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <div className="w-[25%]">
                            <div className="flex items-center gap-3">
                              <Text className=" text-[16px] font-semibold self-center whitespace-nowrap">
                                {t("teams.digitalMarketingTeam")}
                              </Text>
                              <Img
                                src="images/img_edit.svg"
                                alt="Edit"
                                className="w-[24px] h-[24px]"
                                onClick={() => handleCreateTeamShow()}
                              />
                              <Img
                                src="images/img_delete_1.svg"
                                alt="img_delete_1"
                                className="w-[24px] h-[24px]"
                                onClick={handleDialogShow}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[10%]">&nbsp;</TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[10%]">&nbsp;</TableCell>
                        <TableCell>
                          <div className="text-right">
                            <IconButton
                              aria-label="expand row"
                              size="small"
                              onClick={() => setDigitalMarketingTeamOpen(!open)}
                            >
                              {digitalMarketingTeamOpen ? (
                                <RemoveIcon />
                              ) : (
                                <AddIcon />
                              )}
                            </IconButton>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ padding: 0 }} colSpan={7}>
                          <Collapse
                            in={digitalMarketingTeamOpen}
                            timeout="auto"
                            unmountOnExit
                          >
                            <TableBody className="!table w-full">
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                                className="cursor-pointer"
                              >
                                <TableCell
                                  component="td"
                                  scope="row"
                                  className="w-[25%]"
                                  onClick={() => {
                                    navigate("/student-profile");
                                  }}
                                >
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
                                        jennywil2435@yahoo.com
                                      </Text>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell className="w-[15%]">
                                  Communication - Digital Media
                                </TableCell>
                                <TableCell className="w-[15%]">
                                  Catering
                                </TableCell>

                                <TableCell className="w-[10%]">2022</TableCell>
                                <TableCell className="w-[15%]">
                                  Castelo Branco, Beja, Faro...
                                </TableCell>
                                <TableCell className="w-[10%]">
                                  <Button className="w-[99px] h-[32px] cursor-pointer rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                                    Invite Sent{" "}
                                  </Button>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center justify-end gap-3">
                                    <InputAdornment position="start">
                                      <Tooltip
                                        title="Resend Invite"
                                        placement="top"
                                      >
                                        <Img
                                          src="images/Resend-Invite.svg"
                                          alt="Resend-Invite"
                                          className="w-[24px] h-[24px]"
                                        />
                                      </Tooltip>
                                    </InputAdornment>
                                    <Img
                                      src="images/img_delete_1.svg"
                                      alt="img_delete_1"
                                      className="w-[24px] h-[24px]"
                                      onClick={handleDeleteStudentDialogShow}
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <div className="w-[25%]">
                            <div className="flex items-center gap-3">
                              <Text className=" text-[16px] font-semibold self-center whitespace-nowrap">
                                {t("teams.accountTeam")}
                              </Text>
                              <Img
                                src="images/img_edit.svg"
                                alt="Edit"
                                className="w-[24px] h-[24px]"
                                onClick={() => handleCreateTeamShow()}
                              />
                              <Img
                                src="images/img_delete_1.svg"
                                alt="img_delete_1"
                                className="w-[24px] h-[24px]"
                                onClick={handleDialogShow}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[10%]">&nbsp;</TableCell>
                        <TableCell className="w-[15%]">&nbsp;</TableCell>
                        <TableCell className="w-[10%]">&nbsp;</TableCell>
                        <TableCell>
                          <div className="text-right">
                            <IconButton
                              aria-label="expand row"
                              size="small"
                              onClick={() => setAccountTeamOpen(!open)}
                            >
                              {accountTeamOpen ? <RemoveIcon /> : <AddIcon />}
                            </IconButton>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ padding: 0 }} colSpan={7}>
                          <Collapse
                            in={accountTeamOpen}
                            timeout="auto"
                            unmountOnExit
                            style={{ overflow: "auto" }}
                          >
                            <TableBody className="!table w-full md:w-fit">
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                                className="cursor-pointer"
                              >
                                <TableCell
                                  component="td"
                                  scope="row"
                                  className="w-[25%]"
                                  onClick={() => {
                                    navigate("/student-profile");
                                  }}
                                >
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
                                        jennywil2435@yahoo.com
                                      </Text>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell className="w-[15%]">
                                  Communication - Digital Media
                                </TableCell>
                                <TableCell className="w-[15%]">
                                  Events/Festivals
                                </TableCell>

                                <TableCell className="w-[10%]">2022</TableCell>
                                <TableCell className="w-[15%]">
                                  Castelo Branco, Beja, Faro...
                                </TableCell>
                                <TableCell className="w-[10%]">
                                  <Button className="w-[99px] h-[32px] cursor-pointer rounded-lg px-[0px] text-sm bg-gray-100 text-gray-900_02">
                                    Invite Sent{" "}
                                  </Button>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center justify-end gap-3">
                                    <InputAdornment position="start">
                                      <Tooltip
                                        title="Resend Invite"
                                        placement="top"
                                      >
                                        <Img
                                          src="images/Resend-Invite.svg"
                                          alt="Resend-Invite"
                                          className="w-[24px] h-[24px]"
                                        />
                                      </Tooltip>
                                    </InputAdornment>
                                    <Img
                                      src="images/img_delete_1.svg"
                                      alt="img_delete_1"
                                      className="w-[24px] h-[24px]"
                                      onClick={handleDeleteStudentDialogShow}
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Collapse>
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
      <CreateTeam open={createTeamShow} onClose={handleCreateTeamClose} />
      <DeleteModal
        open={deleteDialog}
        onClose={handleCloseDialog}
        headerText={t("teams.deleteTeam")}
        contentText={t("teams.areYouSureYouWantToDeleteThisTeam")}
      />
      <DeleteModal
        open={deleteStudentDialog}
        onClose={handleDeleteStudentDialogClose}
        headerText={t("common.deleteStudent")}
        contentText={t("common.areYouSureYouWantToDeleteStudent")}
      />
    </>
  );
};

export default Teams;
