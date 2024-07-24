/* eslint-disable no-extra-boolean-cast */

import React from "react";
import PropTypes from "prop-types";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Button, Text } from "components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTranslation } from "react-i18next";
const options = ["Duplicate", "Delete"];
const ITEM_HEIGHT = 48;
const DetailFooter = ({
  buttonName,
  outlineButtonText,
  redDeleteButton,
  menuImg,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="border-b border-gray-400 mt-[15px] ">
      <div className="w-full mx-auto max-w-full p-3 px-[32px] border-gray-200_01 border-t border-solid bg-white-A700 flex justify-between items-center ">
        <Text className="text-light_blue-900 font-semibold underline mr-[17px]">
          {t("common.skipForNow")}
        </Text>
        <div className="flex gap-5">
          {!!outlineButtonText ? (
            <Button
              className="cursor-pointer font-semibold text-center text-sm w-full min-w-[170px]"
              shape="round"
              color="black_900"
              size="xl"
              variant="outline"
            >
              {outlineButtonText}
            </Button>
          ) : null}
          {!!redDeleteButton ? (
            <Button
              className="cursor-pointer font-semibold text-center text-sm w-full min-w-[118px]"
              shape="round"
              color="red_700"
              size="xl"
              variant="fill"
            >
              {redDeleteButton}
            </Button>
          ) : null}
          {!!buttonName ? (
            <Button className="sm:px-5 font-semibold min-w-[110px] flex items-center justify-center text-center cursor-pointer rounded-lg h-[40px] px-[35px] text-sm bg-black-900 text-white-A700">
              {buttonName}
            </Button>
          ) : null}
          {!!menuImg ? (
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                className="transform rotate-0"
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
          ) : null}
        </div>
      </div>
    </div>
  );
};
DetailFooter.propTypes = {
  buttonName: PropTypes.string,
  outlineButtonText: PropTypes.string,
  redDeleteButton: PropTypes.string,
  menuImg: PropTypes.string,
};
export default DetailFooter;
