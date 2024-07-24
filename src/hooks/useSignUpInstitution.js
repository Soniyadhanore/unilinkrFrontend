import { API_ROUTES } from "common/Enum";
import globalRequest from "prototype/globalRequest";
import { useDispatch } from "react-redux";
import { changeLoader } from "../redux/reducers/loader";
import { useState } from "react";
import { setSnackbar } from "../redux/reducers/snackbar";
import { useNavigate } from "react-router-dom";
import {
  removeCountryCode,
  validateEmail,
  validatePassword,
} from "common/HelperFunctions";
import { useTranslation } from "react-i18next";

export const useSignUpInstitution = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpeErrors, setSignUpError] = useState(null);
  const [facultyList, setFacultyList] = useState(null);

  const getFacultyList = async (data) => {
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.GET_FACULTY_LIST,
        "post",
        data,
        {},
        true
      );
      if (res?.status === "SUCCESS") {
        let list = res?.data?.data;
        const transformedData = list?.map((item) => ({
          value: item.id,
          label: item.name_en,
        }));
        setFacultyList(transformedData);
      }
    } catch (err) {
      console.error("error", err?.response?.data);
    } finally {
      dispatch(changeLoader(false));
    }
  };
  const handleErrors = (data) => {
    let error = false;
    let errObj = { ...data };
    if (!data?.email) {
      errObj.emailError = t("errorMessages.emailIsRequired");
      error = true;
    }
    if (!data?.mobileNumber) {
      errObj.mobileNumberError = t("errorMessages?.mobileNumberIsRequired");
      error = true;
    }
    if (!validateEmail(data?.email)) {
      errObj.emailError = t("errorMessages.invalidEmailAddress");
      error = true;
    }
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

  const SignUpInstitute = async (formData) => {
    let { error, errObj } = handleErrors(formData);
    if (error) {
      setSignUpError(errObj);
      return;
    } else {
      setSignUpError(null);
    }

    let data = {
      type: "institution",
      faculty_id: formData?.facultyId, // for institution
      faculty_name: formData?.facultyName, // for institution
      institute_name: formData?.academicInstituteName, //for institution
      first_name: formData?.firstName,
      last_name: formData?.lastName,
      email: formData?.email,
      mobile: removeCountryCode(formData?.mobileNumber, formData?.countryCode),
      password: formData?.password,
      confirm_password: formData?.confirmPassword,
      country_code: formData?.countryCode,
      agreement: formData?.isAgreementChecked,
      newsletter: formData?.isNewsletterChecked,
      term_and_condition: formData?.isPrivacyPolicyChecked,
    };
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.SIGN_UP,
        "post",
        data,
        {},
        false
      );
      if (res?.status === "SUCCESS") {
        // dispatch(
        //   setSnackbar({
        //     isOpen: true,
        //     message: res?.message,
        //     state: "success",
        //   })
        // );
        navigate("/signup-successfully-pending-message");
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

  return { getFacultyList, facultyList, SignUpInstitute, signUpeErrors };
};
