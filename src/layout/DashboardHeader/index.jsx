import React, { useState } from "react";
/* eslint-disable react/prop-types */
import { Menu, MenuItem } from "@mui/material";
import { Img, Text } from "components";
import NotificationDrawer from "layout/NotificationDrawer";
import { useNavigate } from "react-router-dom";
import NotificationSettings from "modals/NotificationSettings";
import Chat from "layout/Chat";
import { useLogout } from "hooks/useLogout";
export default function DashboardHeader({ title }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notification, setNotification] = useState(false);
  const [chat, setChat] = useState(false);
  const toggleChat = () => {
    setChat(!chat);
  };
  const toggleNotification = () => {
    setNotification(!notification);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [notificationSettingsShow, setNotificationSettingsShow] =
    useState(false);
  const handleNotificationSettingsShow = () => {
    setNotificationSettingsShow(true);
  };
  const handleNotificationSettingsClose = () => {
    setNotificationSettingsShow(false);
  };

  // get custom hook to logout
  const { logOut } = useLogout();

  return (
    <>
      <header className="fixed left-0 right-0 top-0 py-3 pl-[272px] md:pl-14 pr-8 md:pl-12 md:pr-4 border-gray-200 border-b border-solid bg-white-A700 z-[9]">
        <div className="flex justify-between items-center gap-5">
          <h6 className="text-18 font-semibold">{title}</h6>
          <div className="flex justify-center items-center gap-5">
            <div
              className="flex gap-2 items-center cursor-pointer min-w-[170px] md:min-w-fit"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Img
                src="images/img_ellipse_1567.png"
                alt="circleimage"
                className="h-[32px] w-[32px] ml-2 rounded-[50%]"
              />
              <div className="relative md:hidden">
                <h6 className="!text-blue_gray-900_01">Anna Silva</h6>
                <Text size="s" as="p" className="!text-blue_gray-900_01">
                  TechSolutions
                </Text>
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
              className="mt-3"
            >
              <MenuItem
                onClick={() => {
                  navigate("/company-profile");
                }}
              >
                Edit Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/general-setting-transaction");
                }}
              >
                Transactions
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/saved-payment-method");
                }}
              >
                Saved Payment Method
              </MenuItem>
              <MenuItem onClick={() => handleNotificationSettingsShow()}>
                Notifications
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/general-setting-other");
                }}
              >
                Others
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/employees");
                }}
              >
                Employees
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/roles-and-permission");
                }}
              >
                Roles & Permissions
              </MenuItem>
              <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
            <Img
              src="images/img_message.svg"
              alt="message_one"
              className="h-[24px] w-[24px] cursor-pointer"
              onClick={toggleChat}
            />
            <div
              className="h-[24px] w-[24px] relative cursor-pointer"
              onClick={toggleNotification}
            >
              <Img
                src="images/img_notification.svg"
                alt="notification"
                className="justify-center h-[24px] w-full md:w-[24px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
              <div className="h-[6px] w-[6px] right-[8%] top-[8%] m-auto bg-red-700 absolute rounded-[50%]" />
            </div>
          </div>
        </div>
      </header>
      <NotificationDrawer open={notification} onClose={toggleNotification} />
      <NotificationSettings
        open={notificationSettingsShow}
        onClose={handleNotificationSettingsClose}
      />
      <Chat show={chat} />
    </>
  );
}
