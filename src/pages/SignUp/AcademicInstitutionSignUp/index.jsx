import React, { useEffect, useState } from "react";
import { InputAdornment, Tooltip } from "@mui/material";
import {
  Button,
  CheckBox,
  Input,
  InputLabels,
  InputPassword,
  Text,
  SelectBox,
  Img,
} from "components";
import { PhoneInputComponent } from "components/PhoneInput";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSignUpInstitution } from "hooks/useSignUpInstitution";
import { removeNonAlphabets } from "common/HelperFunctions";
const AcademicInstitutionSignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  //states
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [formData, setFormData] = useState({
    facultyId: "",
    facultyName: "",
    academicInstituteName: "",
    firstName: "",
    lastName: "",
    email: "",
    emailError: "",
    mobileNumber: "",
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
    isAgreementChecked: false,
    isNewsletterChecked: false,
    isPrivacyPolicyChecked: false,
  });

  //get custom hooks
  const { getFacultyList, facultyList, SignUpInstitute, signUpeErrors } =
    useSignUpInstitution();

  //get faculty list
  useEffect(() => {
    getFacultyList({perPage:100000});
  }, []);

  //updated state with errors
  useEffect(() => {
    if (signUpeErrors) {
      setFormData(signUpeErrors);
    }
  }, [signUpeErrors]);
  //handle submit form
  const handleSubmit = () => {
    SignUpInstitute(formData);
  };
  //handle button disable
  useEffect(() => {
    if (
      formData?.facultyId &&
      formData?.academicInstituteName &&
      formData?.firstName &&
      formData?.lastName &&
      formData?.email &&
      formData?.mobileNumber &&
      formData?.password &&
      formData?.confirmPassword &&
      formData?.isAgreementChecked &&
      formData?.isPrivacyPolicyChecked
    ) {
      if (formData?.facultyId !== 1) {
        setDisabledBtn(false);
      } else if (formData?.facultyId == 1 && formData?.facultyName) {
        setDisabledBtn(false);
      } else {
        setDisabledBtn(true);
      }
    } else {
      setDisabledBtn(true);
    }
  }, [formData]);
  return (
    <>
      <div className="flex md:flex-col justify-center items-center w-full">
        <div className="w-[50%] md:w-full">
          <div className="absolute top-3 left-4 md:relative md:left-0 md:mb-10 md:pl-4">
            <Img
              src="images/Logo.svg"
              alt="Logo"
              className="w-[88px] object-cover cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-start items-center pt-5 max-h-[calc(100vh_-_50px)] md:max-h-full overflow-auto">
            <div className="w-full max-w-[427px] sm:px-4 flex flex-col justify-center items-start">
              <div className="pt-[20px] flex items-center mb-[20px]">
                <Img
                  src="images/back-black-arrow.svg"
                  alt=""
                  className="mr-2 cursor-pointer"
                  onClick={() => {
                    navigate(-1);
                  }}
                />
                <Text className="text-[24px] font-semibold ">
                  {t("common.signUp")}
                </Text>
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.selectFaculty")}
                  mandatoryAsterisk="*"
                />
                <SelectBox
                  size="small"
                  classNameInner="choose-select-box"
                  required
                  options={facultyList || []}
                  value={formData?.facultyId}
                  onSelect={(facultyId, facultyName) => {
                    setFormData({
                      ...formData,
                      facultyId,
                      facultyName: facultyId === 1 ? "" : facultyName,
                    });
                  }}
                />
              </div>
              {formData?.facultyId === 1 && (
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.whatIsYourFacultyName")}
                    mandatoryAsterisk="*"
                  />
                  <Input
                    className="fill"
                    size="small"
                    value={formData?.facultyName}
                    onChange={(e) => {
                      let facultyName = e.target.value?.trimStart();
                      if (facultyName?.length > 100) return;
                      setFormData({ ...formData, facultyName });
                    }}
                  />
                </div>
              )}
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.academicInstitutionName")}
                  mandatoryAsterisk="*"
                />
                <Input
                  className="fill"
                  size="small"
                  value={formData?.academicInstituteName}
                  onChange={(e) => {
                    let academicInstituteName = removeNonAlphabets(
                      e.target.value?.trimStart()
                    );

                    if (academicInstituteName?.length > 100) return;
                    setFormData({ ...formData, academicInstituteName });
                  }}
                />
              </div>
              <Text className="text-[16px] font-semibold mb-[20px]">
                {t("common.contactPersonDetails")}
              </Text>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.firstName")}
                    mandatoryAsterisk="*"
                  />
                  <Input
                    className="fill"
                    size="small"
                    value={formData?.firstName}
                    onChange={(e) => {
                      let firstName = removeNonAlphabets(
                        e.target.value?.trimStart()
                      );
                      if (firstName?.length > 50) return;
                      setFormData({
                        ...formData,
                        firstName,
                      });
                    }}
                  />
                </div>
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.lastName")}
                    mandatoryAsterisk="*"
                  />
                  <Input
                    className="fill"
                    size="small"
                    value={formData?.lastName}
                    onChange={(e) => {
                      let lastName = removeNonAlphabets(
                        e.target.value?.trimStart()
                      );
                      if (lastName?.length > 50) return;
                      setFormData({
                        ...formData,
                        lastName,
                        lastNameError: "",
                      });
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.yourEmailAddress")}
                  mandatoryAsterisk="*"
                />
                <Input
                  endAdornment={
                    <InputAdornment position="start">
                      <Tooltip
                        className="relative right-[-8px]"
                        title={t("common.thisWillActAsYourUsernameToLogin")}
                        placement="top"
                        arrow
                      >
                        <Img
                          className="h-[24px] w-[24px] md:mr-0 cursor-pointer"
                          src="images/img_info.svg"
                          alt="info_one"
                        />
                      </Tooltip>
                    </InputAdornment>
                  }
                  className="fill"
                  size="small"
                  value={formData?.email}
                  error={formData?.emailError}
                  onChange={(e) => {
                    let email = e.target.value?.trimStart();
                    if (email?.length > 100) return;
                    setFormData({
                      ...formData,
                      email,
                      emailError: "",
                    });
                  }}
                />
              </div>
              <div className="w-full relative">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.yourMobileNumber")}
                  mandatoryAsterisk="*"
                />
                <PhoneInputComponent
                  className="fill"
                  size="small"
                  value={formData?.mobileNumber}
                  country={"pt"}
                  onChange={(value, data) => {
                    let mobileNumber = value;
                    let countryCode = data?.dialCode;
                    setFormData({
                      ...formData,
                      countryCode,
                      mobileNumber,
                      mobileNumberError: "",
                    });
                  }}
                />
                <Tooltip
                  title={t("common.thisWillActAsYourUsernameToLogin")}
                  placement="top"
                >
                  <Img
                    className="h-[19px] w-[19px] md:mr-0 cursor-pointer absolute right-[14px] top-[28px]"
                    src="images/img_info.svg"
                    alt="info_one"
                  />
                </Tooltip>
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.password")}
                  mandatoryAsterisk="*"
                />
                <InputPassword
                  id="institute-password"
                  className="fill"
                  size="small"
                  error={formData?.passwordError ? true : false}
                  errorText={formData?.passwordError}
                  password={formData?.password}
                  setPassword={(value) => {
                    let password = value;
                    setFormData({ ...formData, password, passwordError: "" });
                  }}
                />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.confirmPassword")}
                  mandatoryAsterisk="*"
                />
                <InputPassword
                  id="institute-confirm-password"
                  className="fill"
                  size="small"
                  error={formData?.confirmPasswordError ? true : false}
                  errorText={formData?.confirmPasswordError}
                  password={formData?.confirmPassword}
                  setPassword={(value) => {
                    let confirmPassword = value;
                    setFormData({
                      ...formData,
                      confirmPassword,
                      confirmPasswordError: "",
                    });
                  }}
                />
              </div>
              <div className="mb-[9px]">
                <CheckBox
                  labelClassName="text-black-900 text-xs"
                  label={t("common.iUnderstand&AgreeToDataProcessingAgreement")}
                  checked={formData?.isAgreementChecked}
                  onChange={(value) => {
                    let isAgreementChecked = value;
                    setFormData({
                      ...formData,
                      isAgreementChecked,
                    });
                  }}
                />
              </div>
              <div className="mb-[9px]">
                <CheckBox
                  labelClassName="text-black-900 text-xs"
                  label={t("common.subscribeMeToWeeklyNewsletter")}
                  checked={formData?.isNewsletterChecked}
                  onChange={(value) => {
                    let isNewsletterChecked = value;
                    setFormData({
                      ...formData,
                      isNewsletterChecked,
                    });
                  }}
                />
              </div>
              <div className="mb-[20px]">
                <CheckBox
                  labelClassName="text-black-900 text-xs"
                  label={t(
                    "common.iUnderstandAgreeToTermsConditionsPrivacyPolicyOfWebsite"
                  )}
                  checked={formData?.isPrivacyPolicyChecked}
                  onChange={(value) => {
                    let isPrivacyPolicyChecked = value;
                    setFormData({
                      ...formData,
                      isPrivacyPolicyChecked,
                    });
                  }}
                />
              </div>
              <Button
                className="cursor-pointer font-semibold text-center text-sm w-full mb-[20px]"
                shape="round"
                color="black_900"
                size="xl"
                variant="fill"
                disabled={disabledBtn}
                onClick={handleSubmit}
              >
                {t("common.signUp")}
              </Button>
              <div className="text-center w-full">
                <Text>
                  {t("common.haveAnAccount")}{" "}
                  <span
                    className="!text-light_blue-900 text-center underline font-semibold text-[14px] cursor-pointer"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    {t("common.login")}
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] md:w-full md:mt-6">
          <div className="onBoarding-Bg flex flex-col justify-center items-center">
            <div className="w-full max-w-[440px] h-[100vh] md:h-auto md:py-8 flex flex-col justify-center items-center">
              <Img
                src="images/img_image_97.png"
                alt="imageninetyseve"
                className="w-[220px] object-cover"
              />
              <div className="flex flex-col self-stretch items-center gap-[7px] mt-[40px]">
                <Text className="!text-white-A700 text-center font-semibold text-[24px] pb-[8px]">
                  {t("common.welcomeToUniLinkr")}
                </Text>
                <Text className="!text-white-A700 text-center text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Felis id est amet
                  accumsan. Egestas id libero faucibus commodo enim mollis.{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AcademicInstitutionSignUp;
