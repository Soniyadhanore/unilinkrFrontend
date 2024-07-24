import { API_ROUTES } from "common/Enum";
import globalRequest from "prototype/globalRequest";
import { useDispatch } from "react-redux";
import { changeLoader } from "../redux/reducers/loader";
import { setSnackbar } from "../redux/reducers/snackbar";
import { validatePassword } from "common/HelperFunctions";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allErrors, setAllError] = useState(null);

  const handleErrors = (data) => {
    let error = false;
    let errObj = { ...data };
    // Validate password
    if (!data.password) {
      errObj.passwordError = t("errorMessages.passwordIsRequired");
      error = true;
    } else if (!validatePassword(data.password)) {
      errObj.passwordError = t("errorMessages.inValidPasswordFormat");
      error = true;
    }
    // Validate confirm password
    if (!data.confirmPassword) {
      errObj.confirmPasswordError = t(
        "errorMessages.confirmPasswordIsRequired"
      );
      error = true;
    } else if (data.password !== data.confirmPassword) {
      errObj.confirmPasswordError = t("errorMessages.passwordsDoNotMatch");
      error = true;
    }
    return { error, errObj };
  };

  const resetPassword = async (formData) => {
    let { error, errObj } = handleErrors(formData);
    if (error) {
      setAllError(errObj);
      return;
    } else {
      setAllError(null);
    }
    let data = {
      password: formData?.password,
      confirm_password: formData?.confirmPassword,
      code: formData?.code,
    };
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.RESET_PASSWORD,
        "post",
        data,
        {},
        false
      );
      if (res?.status === "SUCCESS") {
        dispatch(
          setSnackbar({
            isOpen: true,
            message: res?.message,
            state: "success",
          })
        );
        navigate("/");
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

  return { resetPassword, allErrors };
};
