import React, { useEffect, useState } from "react";
import {
  Button,
  Img,
  Input,
  InputLabels,
  InputPassword,
  Text,
} from "components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLogin } from "hooks/useLogin";
// import { Alert } from "@mui/material";
const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  //states
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });
  // get custom hook to login
  const { logIn } = useLogin();
  const handleLogin = async () => {
    let data = {
      email: formData?.email,
      password: formData?.password,
    };
    logIn(data);
  };
  //handle button disabled
  useEffect(() => {
    if (formData?.email && formData?.password) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [formData?.email, formData?.password]);
  return (
    <>
      <div className="flex md:flex-col justify-center items-center w-full">
        {/* <Alert
          icon={false}
          severity="success"
          className="z-[999] !bg-gray-100 fixed left-0 right-0 top-[24px] mx-auto w-full max-w-[382px]"
        >
          {t("alertMessages.yourAccountIsStillUnderReviewByAdministrationTeam")}
        </Alert> */}
        <div className="w-[50%] md:w-full md:h-[calc(100vh_-_408px)]">
          <div className="absolute top-3 left-4 md:relative md:left-0 md:mb-10 md:pl-4">
            <Img
              src="images/Logo.svg"
              alt="Logo"
              className="w-[88px] object-cover cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-[427px] sm:px-4 flex flex-col justify-center items-start">
              <div className="">
                <Text className="text-[24px] font-semibold mb-[8px]">
                  {t("common.login")}
                </Text>
                <Text className="text-[14px] font-normal mb-[24px]">
                  {t("common.loginToExploreOurFeatures")}
                </Text>
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.emailAddress")}
                />
                <Input
                  className="fill"
                  size="small"
                  value={formData?.email}
                  onChange={(e) => {
                    let email = e.target.value.trimStart();
                    setFormData({ ...formData, email, emailError: "" });
                  }}
                />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.password")}
                />
                <InputPassword
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
              <Button
                className="cursor-pointer font-semibold text-center text-sm w-full"
                shape="round"
                color="black_900"
                size="xl"
                variant="fill"
                disabled={disabledBtn}
                onClick={handleLogin}
              >
                {t("common.login")}
              </Button>
              <div className="text-center mt-[16px] w-full">
                <Text
                  size="lg"
                  className="!text-light_blue-900 text-center underline font-semibold mb-[24px] cursor-pointer"
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                >
                  {t("common.forgotPassword")}
                </Text>
                <Text>
                  {t("common.don'tHaveAnAccount")}{" "}
                  <span
                    className="!text-light_blue-900 text-center underline font-semibold text-[14px] cursor-pointer"
                    onClick={() => {
                      navigate("/signup-choose-type");
                    }}
                  >
                    {t("common.signUp")}
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] md:w-full md:mt-6 ">
          <div className="onBoarding-Bg flex flex-col justify-center items-center">
            <div className="w-full max-w-[440px] h-[100vh] md:h-full md:py-8 flex flex-col justify-center items-center">
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
export default LoginPage;
