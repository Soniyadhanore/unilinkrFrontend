/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Menu, MenuItem, InputBase } from "@mui/material";
import { Img, Text, SearchInputComponent, Button } from "components";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/system";
import DeleteChat from "modals/DeleteChat";
import AddTeam from "modals/AddTeam";
const CustomInput = styled(InputBase)({
  padding: "6px 12px",
  minHeight: "48px",
  border: "1px solid #E5E7EB",
  background: "#fff",
  borderRadius: "4px 0 0 4px",
  "& .MuiInputBase-input": {
    padding: "0",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#212121",
    "&::placeholder": {
      color: "#00000060",
    },
  },
});
const Chat = ({ show }) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [DeleteChatModalOpen, setDeleteChatModalOpen] = useState(false);
  const [AddTeamModalOpen, setAddTeamModalOpen] = useState(false);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickMore = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseMore = () => {
    setAnchorEl2(null);
  };
  return (
    <>
      <div
        className={`fixed bottom-0 right-0 z-[9] sm:min-w-full bg-white-A700 ${
          show === true ? "flex" : "hidden"
        }`}
      >
        <div className="min-w-[350px] max-w-[350px] sm:min-w-full w-full h-[550px] sm:h-full">
          <div className="h-full">
            <div className="flex justify-between items-center w-full mx-auto px-5 py-[15px] border border-gray-200">
              <div className="flex self-end justify-center">
                <Text className="!blue-gray-900_01 text-[18px] font-bold leading-[22.3px]">
                  {t("common.chat")}
                </Text>
              </div>
              <Img
                className="self-start h-[24px] w-[24px] cursor-pointer"
                src="images/img_close.svg"
                alt="close_one"
              />
            </div>
            <div className="py-3 px-6 flex items-center gap-2.5">
              <SearchInputComponent
                placeholder={t("common.search")}
                startAdornment={
                  <Img
                    className="h-[24px] w-[24px] md:mr-0"
                    src="images/img_search.svg"
                    alt="img_search"
                  />
                }
                className="!mb-[0px] sm:mb-4 max-w-[350px] sm:max-w-[100%] md:max-w-[200px] w-full search-input"
              />
              <Img
                className="self-start h-[24px] w-[24px] my-2 cursor-pointer"
                src="images/img_morevert.svg"
                alt="close_one"
                onClick={handleClick}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Blocked Users</MenuItem>
              </Menu>
            </div>
            <div className="h-[calc(100%-144px)] overflow-auto px-3 flex flex-col">
              <div className="p-3 flex items-center gap-3 rounded-xl hover:bg-gray-100 cursor-pointer">
                <Img
                  className="self-start h-10 w-10 cursor-pointer"
                  src="images/img_frame_10_40x40.png"
                  alt="close_one"
                />
                <div className="flex flex-col w-full gap-1">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-1">
                      <div className="text-sm	font-semibold">Kathy Pacheco</div>
                      <Img
                        className="self-start h-4 w-4"
                        src="images/img_tick_verify.svg"
                      />
                      <Img
                        className="self-start h-4 w-4"
                        src="images/img_teams.svg"
                      />
                    </div>
                    <div className="text-xs	text-gray-900_02 opacity-30	">
                      12m
                    </div>
                  </div>
                  <div className="text-sm	font-normal text-blacl-900 opacity-40	leading-[16.66px]">
                    message content comes here
                  </div>
                </div>
              </div>
              <div className="p-3 flex items-center gap-3 rounded-xl relative">
                <Img
                  className="self-start h-5 w-5 inset-y-0	absolute m-auto right-4"
                  src="images/img_vector_gray_900_01.svg"
                  alt="close_one"
                />
                <Img
                  className="self-start h-10 w-10 opacity-50"
                  src="images/img_frame_10_40x40.png"
                  alt="close_one"
                />
                <div className="flex flex-col w-full gap-1 opacity-50">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-1">
                      <div className="text-sm	font-semibold">Kathy Pacheco</div>
                      <Img
                        className="self-start h-4 w-4"
                        src="images/img_tick_verify.svg"
                      />
                      <Img
                        className="self-start h-4 w-4"
                        src="images/img_teams.svg"
                      />
                    </div>
                    <div className="text-xs	text-gray-900_02 opacity-30	">
                      12m
                    </div>
                  </div>
                  <div className="text-sm	font-normal text-blacl-900 opacity-40	leading-[16.66px]">
                    message content comes here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[350px] max-w-[350px] sm:min-w-full w-full h-[550px] sm:h-full overflow-auto">
          <div className="h-full">
            <div className="flex justify-between items-center w-full mx-auto px-4 py-3 border border-gray-200">
              <div className="flex self-end flex items-center gap-3 justify-center">
                <Img
                  className="self-start h-6 w-6 my-2 cursor-pointer"
                  src="images/arrow.svg"
                  alt="close_one"
                />
                <Img
                  className="self-start h-10 w-10"
                  src="images/img_frame_10_40x40.png"
                  alt="close_one"
                />
                <div className="flex flex-col w-full gap-1">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-1">
                      <div className="text-sm	font-semibold">Kathy Pacheco</div>
                      <Img
                        className="self-start h-4 w-4"
                        src="images/img_tick_verify.svg"
                      />
                    </div>
                  </div>
                  <div className="text-sm	font-normal text-blacl-900	leading-[16.66px]">
                    Frontend Developer
                  </div>
                </div>
              </div>
              <Img
                className="self-start h-[24px] w-[24px] my-2 cursor-pointer"
                src="images/img_morevert.svg"
                alt="close_one"
                onClick={handleClickMore}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleCloseMore}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleCloseMore}>View Application</MenuItem>
                <MenuItem onClick={() => setDeleteChatModalOpen(true)}>
                  Delete Chat
                </MenuItem>
                <MenuItem onClick={() => setAddTeamModalOpen(true)}>
                  Add to Team
                </MenuItem>
                <MenuItem onClick={handleCloseMore}>Block User</MenuItem>
              </Menu>
            </div>
            <div className="h-[calc(100%-130px)] overflow-auto p-4">
              <div className="flex flex-col justify-end gap-3 h-full">
                <div className="flex gap-3">
                  <Img
                    className="self-start h-10 w-10"
                    src="images/img_frame_10.png"
                    alt="close_one"
                  />
                  <div className="flex flex-col gap-2.5">
                    <div className="px-4 py-2.5 bg-gray-100 text-sm	leading-[16.66px] w-fit">
                      Hi
                    </div>
                    <div className="px-4 py-2.5 bg-gray-100 text-sm	leading-[16.66px] w-fit">
                      How are you?
                    </div>
                    <div className="text-xs	leading-[14.28px] text-gray-700">
                      08:22 PM
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="flex flex-col gap-2.5 items-end">
                    <div className="px-4 py-2.5 bg-blue-100 text-sm	leading-[16.66px] w-fit">
                      Hello
                    </div>
                    <div className="text-xs	leading-[14.28px] text-gray-700 flex items-center gap-1.5">
                      08:22 PM
                      <Img
                        className="self-start w-[9px] my-1"
                        src="images/img_chat_seen_tick.svg"
                        alt="close_one"
                      />
                    </div>
                  </div>
                  <Img
                    className="self-start h-10 w-10"
                    src="images/img_ellipse_1567.png"
                    alt="close_one"
                  />
                </div>
                <div className="flex gap-3">
                  <Img
                    className="self-start h-10 w-10"
                    src="images/img_frame_10.png"
                    alt="close_one"
                  />
                  <div className="flex flex-col gap-2.5">
                    <div className="px-4 py-2.5 bg-gray-100 text-sm	leading-[16.66px] w-fit">
                      Message conent goes here
                    </div>
                    <div className="text-xs	leading-[14.28px] text-gray-700">
                      08:22 PM
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="flex flex-col gap-2.5 items-end">
                    <div className="px-4 py-2.5 bg-blue-100 text-sm	leading-[16.66px] w-fit">
                      Message conent goes here
                    </div>
                    <div className="text-xs	leading-[14.28px] text-gray-700 flex items-center gap-1.5">
                      08:22 PM
                      <Img
                        className="self-start w-[9px] my-1"
                        src="images/img_chat_unseen_tick.svg"
                        alt="close_one"
                      />
                    </div>
                  </div>
                  <Img
                    className="self-start h-10 w-10"
                    src="images/img_ellipse_1567.png"
                    alt="close_one"
                  />
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="flex flex-col gap-2.5 items-end">
                    <div className="px-4 py-2.5 bg-blue-100 text-sm	leading-[16.66px] w-fit">
                      Message conent goes here
                    </div>
                    <div className="text-xs	leading-[14.28px] text-gray-700 flex items-center gap-1.5">
                      08:22 PM
                      <Img
                        className="self-start w-[9px] my-1"
                        src="images/img_chat_unseen_singletick.svg"
                        alt="close_one"
                      />
                    </div>
                  </div>
                  <Img
                    className="self-start h-10 w-10"
                    src="images/img_ellipse_1567.png"
                    alt="close_one"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 pb-4 flex items-center gap-4">
              <Img
                className="self-start h-6 w-6 my-3 p-0.5 cursor-pointer"
                src="images/img_sentiment_satisfied.svg"
                alt="sentiment_satisfied"
              />
              <div className="flex items-center w-full">
                <CustomInput
                  name="frame1000005714"
                  placeholder="Type a message"
                  className="placeholder:text-gray-700 text-left text-sm w-full mb-[0_!important] bg-gray-50"
                  wrapClassName="md:flex-1 md:w-full"
                  shape="round"
                  color="gray_50"
                  size="sm"
                  variant="fill"
                />
                <Button
                  color="black_900"
                  className="min-h-[48px] px-0 min-w-[48px] flex justify-center items-center py-3 border-t border-r border-b border-gray-200 rounded-r"
                >
                  <Img
                    className="self-start h-6 w-6"
                    src="images/img_send.svg"
                    alt="send"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteChat open={DeleteChatModalOpen} onClose={setDeleteChatModalOpen} />
      <AddTeam open={AddTeamModalOpen} onClose={setAddTeamModalOpen} />
    </>
  );
};

export default Chat;
