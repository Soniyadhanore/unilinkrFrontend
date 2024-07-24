import { API_ROUTES } from "common/Enum";
import globalRequest from "prototype/globalRequest";
import { useDispatch } from "react-redux";
import { changeLoader } from "../redux/reducers/loader";
import { setSnackbar } from "../redux/reducers/snackbar";
import { useState } from "react";

export const useChangeLanguage = () => {
  const dispatch = useDispatch();

  //states
  const [prevLanguage, setPrevLanguage] = useState("en");

  //get language
  const getLanguage = async () => {
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.GET_SELECTED_LANGUAGE,
        "get",
        {},
        {},
        true
      );
      if (res?.status === "SUCCESS") {
        setPrevLanguage(res?.data?.selected_lang);
      }
    } catch (err) {
      console.error("error", err?.response?.data);
    } finally {
      dispatch(changeLoader(false));
    }
  };

  //change language
  const changeLanguage = async (data) => {
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.CHANGE_LANGUAGE,
        "post",
        data,
        {},
        true
      );
      if (res?.status === "SUCCESS") {
        //set to local storage
        dispatch(
          setSnackbar({
            isOpen: true,
            message: res?.message,
            state: "success",
          })
        );
        getLanguage();
      }
    } catch (err) {
      console.error("error", err?.response?.data);
      dispatch(
        setSnackbar({
          isOpen: true,
          message: err?.response?.data?.message,
          state: "error",
        })
      );
    } finally {
      dispatch(changeLoader(false));
    }
  };

  return { changeLanguage, getLanguage, prevLanguage };
};
