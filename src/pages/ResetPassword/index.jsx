import React, { useEffect, useState } from "react";
import { Button, Img, InputLabels, InputPassword, Text } from "components";
import { useTranslation } from "react-i18next";
// import Alert from "@mui/material/Alert";
import { useResetPassword } from "hooks/useResetPassword";
import { useParams } from "react-router-dom";
import logoImg from "../../assets/images/Logo.svg";
import img_image_97 from "../../assets/images/img_image_97.png";
const ResetPassword = () => {
  const { t } = useTranslation();
  const { code } = useParams();
  //states
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
    code: code,
  });

  //get custom hook
  const { resetPassword, allErrors } = useResetPassword();
  //handle submit
  const handleSubmit = () => {
    resetPassword(formData);
  };

  // handle errors
  useEffect(() => {
    if (allErrors) {
      setFormData(allErrors);
    }
  }, [allErrors]);
  //handle button disabled
  useEffect(() => {
    if (formData?.confirmPassword && formData?.password) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [formData]);

  return (
    <>
      <div className="flex md:flex-col justify-center items-center w-full">
        {/* <Alert
          icon={false}
          severity="success"
          className="z-[999] !bg-gray-100 fixed left-0 right-0 top-[24px] mx-auto w-full max-w-[382px]"
        >
          {t("alertMessages.successYourPasswordHasBeenSuccessfullyChanged")}
        </Alert> */}
        <div className="w-[50%] md:w-full md:h-[calc(100vh_-_408px)]">
          <div className="absolute top-3 left-4 md:relative md:left-0 md:mb-10 md:pl-4">
            <Img
              src={logoImg ? logoImg : "images/Logo.svg"}
              alt="Logo"
              className="w-[88px] object-cover cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-[427px] sm:px-4 flex flex-col justify-center items-start">
              <div className="">
                <Text className="text-[24px] font-semibold mb-[8px]">
                  {t("common.resetPassword")}
                </Text>
                <Text className="text-[14px] font-normal mb-[24px]">
                  {t("common.almostDoneEnterYourNewPasswordAndYouGoodToGo")}
                </Text>
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
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.password")}
                />
                <InputPassword
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
              <Button
                className="cursor-pointer font-semibold text-center text-sm w-full"
                shape="round"
                color="black_900"
                size="xl"
                variant="fill"
                disabled={disabledBtn}
                onClick={handleSubmit}
              >
                {t("common.save")}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[50%] md:w-full md:mt-6">
          <div className="onBoarding-Bg flex flex-col justify-center items-center">
            <div className="w-full max-w-[440px] h-[100vh] md:h-full md:py-8 flex flex-col justify-center items-center">
              <Img
                src={img_image_97 ? img_image_97 : "images/img_image_97.png"}
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
export default ResetPassword;
