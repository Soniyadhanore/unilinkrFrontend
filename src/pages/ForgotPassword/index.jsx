import React, { useEffect, useState } from "react";
import { Button, Img, Input, InputLabels, Text } from "components";
import { useTranslation } from "react-i18next";
import { validateEmail } from "common/HelperFunctions";
import { useNavigate } from "react-router-dom";
import { useForgotPassword } from "hooks/useForgotPassword";
const ForgotPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  //states
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    emailError: "",
  });

  //get custom hooks
  const { sendForgotPasswordLink } = useForgotPassword();

  //handle submit
  const handleSubmit = () => {
    if (!validateEmail(formData?.email)) {
      setFormData({ ...formData, emailError: t("common.invalidEmail") });
      return;
    }
    if (!formData?.email) {
      setFormData({ ...formData, emailError: t("common.emailIsRequired") });
      return;
    }

    sendForgotPasswordLink(formData);
  };

  //handle button disabled
  useEffect(() => {
    if (formData?.email) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [formData?.email]);
  return (
    <>
      <div className="flex md:flex-col justify-center items-center w-full">
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
              <div className="flex">
                <Img
                  src="images/arrow.svg"
                  alt="arrow"
                  className="w-[24px] h-[24px] ml-[-8px] cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                />
                <Text className="text-[24px] font-semibold mb-[8px]">
                  {t("common.forgotPassword")}
                </Text>
              </div>
              <Text className="text-[14px] font-normal mb-[24px]">
                {t(
                  "common.allGoodEnterYourAccountEmailAddressAndWeSendYouALinkToResetYourPassword"
                )}
              </Text>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.emailAddress")}
                />
                <Input
                  className="fill"
                  size="small"
                  value={formData?.email}
                  error={formData?.emailError}
                  onChange={(e) => {
                    let email = e.target.value.trimStart();
                    setFormData({ ...formData, email, emailError: "" });
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
                {t("common.submit")}
              </Button>
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
export default ForgotPassword;
