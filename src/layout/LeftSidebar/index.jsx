import React from "react";
import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import { Button, Img, Text } from "components";
import {
  DashboardSVG,
  HelpSVG,
  ManageAffiliatesSVG,
  PostedJobSVG,
  StudentDatabaseSVG,
  TeamSvg,
} from "assets/images";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
const LeftSidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [active_link, set_active_link] = useState("");
  const ref = useRef(null);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  useEffect(() => {
    set_active_link(location.pathname);
  }, [location]);
  return (
    <>
      <div
        ref={ref}
        className={`sidebar fixed top-[0] left-0 w-[240px] h-screen bg-gray-900 z-[100] text-center flex justify-start items-center flex-col pt-[10px]  px-4 ${
          isActive ? "collapse-sidebar" : ""
        }`}
      >
        <MenuIcon
          className="collapse-icon absolute right-[-40px] top-[17px] cursor-pointer"
          onClick={toggleClass}
        />
        <div className="flex items-start w-full mb-7">
          <Img
            src="images/sidebar-logo.svg"
            alt="vector_one"
            className=" h-[32px] cursor-pointer"
          />
        </div>
        <List className="flex flex-col gap-2 pt-0 w-full max-h-[100vh_-_80px]">
          <ListItem
            className={
              active_link === "/dashboard"
                ? "sidebar-a activeLink"
                : "sidebar-a"
            }
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <DashboardSVG />
            <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.dashboard")}
            </span>
          </ListItem>
          <ListItem
            className={
              active_link === "/posted-job"
                ? "sidebar-a activeLink"
                : "sidebar-a"
            }
            onClick={() => {
              navigate("/posted-job");
            }}
          >
            <PostedJobSVG />
            <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.postedJob")}
            </span>
          </ListItem>
          <ListItem
            className={
              active_link === "/teams" ? "sidebar-a activeLink" : "sidebar-a"
            }
            onClick={() => {
              navigate("/teams");
            }}
          >
            <TeamSvg />
            <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.teams")}
            </span>
          </ListItem>
          <ListItem
            className={
              active_link === "/manage-affiliates"
                ? "sidebar-a activeLink"
                : "sidebar-a"
            }
            onClick={() => {
              navigate("/manage-affiliates");
            }}
          >
            <ManageAffiliatesSVG />
            <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.manageAffiliates")}
            </span>
          </ListItem>
          <ListItem
            className={
              active_link === "/student-database"
                ? "sidebar-a activeLink"
                : "sidebar-a"
            }
            onClick={() => {
              navigate("/student-database");
            }}
          >
            <StudentDatabaseSVG />
            <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.studentDatabase")}
            </span>
          </ListItem>
          <ListItem
            className={
              active_link === "/help" ? "sidebar-a activeLink" : "sidebar-a"
            }
            onClick={() => {
              navigate("/help");
            }}
          >
            <HelpSVG />
            <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.help")}
            </span>
          </ListItem>
        </List>
        <div className="mt-auto w-full pb-4">
          <Button
            variants={"outline"}
            className="!p-0 w-full rounded-[12px] relative bg-transparent light_blue_800_01_deep_purple_A100_border"
          >
            <span className="flex items-center justify-center bg-[#111827] rounded-[12px] relative  w-full z-[1] h-[38px] w-[206px] px-6">
              <Img
                src="images/img_nav_icons_7.png"
                alt="navicons"
                className="h-[20px] w-[20px] object-cover"
              />
              <Text
                className="self-center !text-transparent text-center bg-gradient bg-clip-text my-0 mx-auto"
                onClick={() => {
                  navigate("/post-job");
                }}
              >
                {t("sidebar.postJob")}
              </Text>
            </span>
          </Button>
          <Button
            variants={"outline"}
            className="!p-0 w-full rounded-[12px] relative bg-transparent light_blue_800_01_deep_purple_A100_border mt-2.5"
            onClick={() => {
              navigate("/add-affiliate");
            }}
          >
            <span className="flex items-center justify-center bg-[#111827] rounded-[12px] relative  w-full z-[1] h-[38px] w-[206px] px-6">
              <Img
                src="images/img_nav_icons_8.png"
                alt="navicons"
                className="w-[20px] object-cover"
              />
              <Text className="self-center !text-transparent text-center bg-gradient bg-clip-text my-0 mx-auto">
                {t("sidebar.addAffiliate")}
              </Text>
            </span>
          </Button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default LeftSidebar;
