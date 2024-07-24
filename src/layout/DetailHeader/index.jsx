/* eslint-disable no-extra-boolean-cast */

import React from "react";
import PropTypes from "prop-types";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Button, Img } from "components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
const options = ["Duplicate", "Delete"];
const ITEM_HEIGHT = 48;
const DetailHeader = ({
  buttonName,
  outlineButtonText,
  redDeleteButton,
  menuImg,
  closeUrl,
}) => {
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
    <div className="border-b border-gray-400">
      <div className="w-full mx-auto max-w-[1302px] p-3 border-gray-200_01 border-t border-solid bg-white-A700 flex justify-between items-center gap-5">
        <div>
          <Img
            src="images/img_cancel_black_900.svg"
            alt="Profile"
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              if (closeUrl) {
                navigate(`${closeUrl}`);
              }
            }}
          />
        </div>
        <div className="flex gap-5">
          {!!outlineButtonText ? (
            <Button
              className="cursor-pointer font-semibold text-center text-sm w-full max-w-[170px] whitespace-nowrap"
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
              className="cursor-pointer font-semibold text-center text-sm w-full max-w-[118px]"
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
DetailHeader.propTypes = {
  buttonName: PropTypes.string,
  outlineButtonText: PropTypes.string,
  redDeleteButton: PropTypes.string,
  menuImg: PropTypes.string,
  closeUrl: PropTypes.string,
};
export default DetailHeader;
