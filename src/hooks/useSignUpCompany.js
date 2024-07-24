import { useState } from "react";
import { API_ROUTES } from "common/Enum";
import globalRequest, { ThirdPartyRequest } from "prototype/globalRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLoader } from "../redux/reducers/loader";
import { setSnackbar } from "../redux/reducers/snackbar";
import { TAX_ID_API, TAX_ID_API_MAIL_ID, TAX_ID_API_TOKEN } from "BaseUrl";
import {
  removeCountryCode,
  validateEmail,
  validatePassword,
} from "common/HelperFunctions";
import { useTranslation } from "react-i18next";

export const useSignUpCompany = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpeErrors, setSignUpError] = useState(null);

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

  const verifyTaxId = async (taxId) => {
    let headers = {
      email: TAX_ID_API_MAIL_ID, //"tomas.borges@unilinkr.net", // MF sandbox API account
      token: TAX_ID_API_TOKEN, //"NaXEy37FeLn9CRi-4EEX", // MF sandbox API account
    };
    let params = {
      countryCode: "PT",
      taxId: taxId, //275223280,
    };

    //?countryCode=PT&taxId=275223280

    dispatch(changeLoader(true));
    try {
      const res = await ThirdPartyRequest(TAX_ID_API, "get", headers, "", {
        params: params,
      });
      if (res?.status === "SUCCESS") {
        //set to local storage
        console.log("res", res);
      }
    } catch (err) {
      console.error("error", err?.response?.data);
    } finally {
      dispatch(changeLoader(false));
    }
  };

  const SignUpCompany = async (formData) => {
    let { error, errObj } = handleErrors(formData);
    console.log("errObj", errObj);
    if (error) {
      setSignUpError(errObj);
      return;
    } else {
      setSignUpError(null);
    }

    let data = {
      type: "company",
      tax_id: formData?.taxIdNumber, //for company
      company_name: formData?.companyName, //for company
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
        navigate("/signup-successfully-message");
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

  return { verifyTaxId, SignUpCompany, signUpeErrors };
};
