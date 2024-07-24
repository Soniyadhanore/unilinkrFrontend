/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";
import NotificationSettings from "modals/NotificationSettings";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import { useLogout } from "hooks/useLogout";
export default function ProfileHeader() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationSettingsShow, setNotificationSettingsShow] =
    useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <header className="py-3 pl-[32px] md:pl-[15px] pr-8 md:pl-12 md:pr-4 border-gray-200 border-b border-solid bg-white-A700 z-[9]">
        <div className="flex justify-between items-center gap-5">
          <Img
            src="images/Logo.svg"
            alt="Logo"
            className="w-[118px] object-cover"
          />
          <div className="flex justify-center items-center gap-5">
            <div className="w-full min-w-[120px]">
              <Button
                className="cursor-pointer font-semibold text-center text-sm w-full "
                shape="round"
                color="black_900"
                size="xl"
                variant="fill"
              >
                <AddIcon className="w-[20px] h-[20px] mb-[2px]" />
                {t("common.createJob")}
              </Button>
            </div>
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
            >
              <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
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
          </div>
        </div>
      </header>
      <NotificationSettings
        open={notificationSettingsShow}
        onClose={handleNotificationSettingsClose}
      />
    </>
  );
}
