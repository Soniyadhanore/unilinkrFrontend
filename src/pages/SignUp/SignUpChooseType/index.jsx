import { Button, Img, Text } from "components";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const SignUpChooseType = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  //states
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [type, setType] = useState("");
  //handle submit
  const handleSubmit = () => {
    let path =
      type === "company" ? "/company-sign-up" : "/academic-institution-sign-up";
    // addDeleteGetLocalStorage(STORAGE?.USER_SIGN_UP_TYPE)
    navigate(path);
  };
  //handle button disabled
  useEffect(() => {
    if (type) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [type]);
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
          <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-[427px] sm:px-4 flex flex-col justify-center items-center">
              <div className="text-center">
                <Text className="text-[24px] font-semibold mb-[24px]">
                  {t("common.welcomeToUniLinkr")}
                </Text>
              </div>
              <div
                className="cursor-pointer flex flex-col w-[350px] md:w-full mb-[16px]"
                onClick={() => {
                  setType("company");
                }}
              >
                <div
                  className={`${
                    type == "company" ? "bg-blue-50" : ""
                  } flex justify-center items-start gap-2 p-[16px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg`}
                >
                  <Img
                    className="h-[40px] w-[40px]"
                    src="images/img_company.svg"
                    alt="signUp_as"
                  />
                  <div className="flex flex-col items-start gap-[8px] flex-1">
                    <Text className="text-gray-900_02 text-base font-semibold">
                      {t("common.signUpAsCompany")}
                    </Text>
                    <Text className="text-gray-900_02 !text-gray-700 text-sm font-normal">
                      {t(
                        "common.youAreAnEntityLookingForTalentOrWorkforceOrYouWantToExposeAProduct"
                      )}
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer flex flex-col w-[350px] md:w-full gap-4 mb-[24px]"
                onClick={() => {
                  setType("institute");
                }}
              >
                <div
                  className={`${
                    type == "institute" ? "bg-blue-50" : ""
                  } flex justify-center items-start gap-2 p-[16px] border-gray-200 border border-solid bg-white-A700 flex-1 rounded-lg`}
                >
                  <Img
                    className="h-[40px] w-[40px]"
                    src="images/img_student_union.svg"
                    alt="signUp_as"
                  />
                  <div className="flex flex-col items-start gap-[8px] flex-1">
                    <Text className="text-gray-900_02 text-base font-semibold">
                      {t("common.signUpAsAcademicInstitution")}
                    </Text>
                    <Text className="text-gray-900_02 !text-gray-700 text-sm font-normal">
                      {t("common.youAreAStudentUnionFacultyUniversityEtc")}
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold text-center text-sm w-full mb-[24px]"
                shape="round"
                color="black_900"
                size="xl"
                variant="fill"
                disabled={disabledBtn}
                onClick={handleSubmit}
              >
                {t("common.continue")}
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
export default SignUpChooseType;
