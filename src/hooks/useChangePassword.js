import { API_ROUTES } from "common/Enum";
import globalRequest from "prototype/globalRequest";
import { useDispatch } from "react-redux";
import { changeLoader } from "../redux/reducers/loader";
import { setSnackbar } from "../redux/reducers/snackbar";
import { validatePassword } from "common/HelperFunctions";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLogout } from "./useLogout";

export const useChangePassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [allErrors, setAllError] = useState(null);
  const { logOut } = useLogout();

  const handleErrors = (data) => {
    let error = false;
    let errObj = { ...data };
    // Validate password
    if (!data.newPassword) {
      errObj.newPasswordError = t("errorMessages.passwordIsRequired");
      error = true;
    } else if (!validatePassword(data.newPassword)) {
      errObj.newPasswordError = t("errorMessages.inValidPasswordFormat");
      error = true;
    }
    // Validate confirm password
    if (!data.confirmPassword) {
      errObj.confirmPasswordError = t(
        "errorMessages.confirmPasswordIsRequired"
      );
      error = true;
    } else if (data.newPassword !== data.confirmPassword) {
      errObj.confirmPasswordError = t("errorMessages.passwordsDoNotMatch");
      error = true;
    }
    return { error, errObj };
  };

  const changePassword = async (formData) => {
    let { error, errObj } = handleErrors(formData);
    if (error) {
      setAllError(errObj);
      return;
    } else {
      setAllError(null);
    }
    let data = {
      oldPassword: formData?.currentPassword,
      newPassword: formData?.newPassword,
    };
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.CHANGE_PASSWORD,
        "post",
        data,
        {},
        true
      );
      if (res?.status === "SUCCESS") {
        dispatch(
          setSnackbar({
            isOpen: true,
            message: res?.message
              ? res.message
              : t(
                  "alertMessages.successYourPasswordHasBeenSuccessfullyChanged"
                ),
            state: "success",
          })
        );
        //logout user after change password
        logOut(false);
      }
      if (res?.status == "FAILURE") {
        let failureError = { ...formData, currentPasswordError: res?.message };
        setAllError(failureError);
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

  return { changePassword, allErrors };
};
