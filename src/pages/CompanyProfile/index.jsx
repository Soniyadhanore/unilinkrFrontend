import React, { useEffect, useState } from "react";
import { InputAdornment } from "@mui/material";
import { Tooltip } from "@mui/material";
// import Alert from "@mui/material/Alert";
import {
  Img,
  Input,
  InputLabels,
  PhoneInputComponent,
  SelectBox,
  Text,
} from "components";
import EditorComponent from "components/Editor";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DetailHeader from "layout/DetailHeader";
// import Country from "components/Country";
import { setSnackbar } from "../../redux/reducers/snackbar";
import { useDispatch } from "react-redux";
import CropImgModal from "modals/CropImgModal/CropImgModal";
import { useCreateUpdateProfile } from "hooks/useCreateUpdateProfile";
import { decodedToken } from "../../common/TokenDecode";
import addDeleteGetLocalStorage from "prototype/addDeleteGetLocalStorage";
import { STORAGE } from "../../common/LocalVariable";
import { getTextLengthOfTextEditor } from "common/HelperFunctions";
import { useGoogleLocation } from "hooks/useGoogleLocation";
import { CloseSVG } from "assets/images";
import { useSignUpInstitution } from "hooks/useSignUpInstitution";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const CompanyProfile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //states
  const [pageAccess, setPageAccess] = useState(null);
  const [companyData, setCompanyData] = useState({
    //basic details
    companyName: "", //for company
    companyNameError: "",
    facultyId: "",
    facultyName: "", //for faculty
    facultyNameError: "",
    academicInstitutionName: "", //for faculty
    academicInstitutionNameError: "",
    about: "",
    aboutError: "",
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    email: "",
    emailError: "",
    mobileNumber: "",
    mobileNumberError: "",
    countryCode: "",
    prevProfilePic: "",
    newProfilePic: null,
    //billing data
    location: "",
    city: "",
    country: "",
    pinCode: "",
    taxId: "", //for company
    documents: {
      //for company
      previousDoc: {
        base64: "",
        name: "",
        size: "",
        type: "",
      },
      newDoc: {
        base64: "",
        name: "",
        size: "",
        type: "",
      },
    },
    portfolioData: [],
  });

  //get custom hooks
  const { getProfileData, profileData } = useCreateUpdateProfile();
  const { getFacultyList, facultyList } = useSignUpInstitution();

  //update with get api data
  useEffect(() => {
    if (profileData) {
      setCompanyData({ ...profileData });
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
    getFacultyList({ perPage: 100000 });
    const userToken = addDeleteGetLocalStorage(STORAGE?.USER_TOKEN, {}, "get");
    let decoded = decodedToken(userToken);
    setCompanyData({
      ...companyData,
      type: decoded?.access, //for update api
    });
    if (decoded?.access == "company") {
      setPageAccess(decoded?.access);
    }
  }, []);

  //handleSubmit form

  //cropper manage
  const [cropImageType, setCropImageType] = useState(null);
  const [select_img, setSelect_img] = useState(null);
  const [showCropperDialog, setShowCropperDialog] = useState(false);
  const handleCloseDialog = () => {
    setShowCropperDialog(false);
  };
  const removePortfolioImage = (index) => {
    const updatedData = companyData?.portfolioData;
    updatedData.splice(index, 1);
    setCompanyData({
      ...companyData,
      portfolioData: updatedData,
    });
  };
  const handleSelectCropImage = (e, size, tagId) => {
    if (
      e.target.files[0].size > size * 1024 * 1024 ||
      (e.target.files[0].type !== "image/jpeg" &&
        e.target.files[0].type !== "image/png")
    ) {
      dispatch(
        setSnackbar({
          isOpen: true,
          message: `Invalid File Please UploadA JPEG Or PNG Image Within The Size Limit Of ${size}MB`,
          state: "error",
        })
      );
      let file = document.getElementById(tagId);
      file.value = "";
      return;
    }
    setSelect_img(URL.createObjectURL(e.target.files[0]));
    setShowCropperDialog(true);
    let file = document.getElementById(tagId);
    file.value = "";
  };

  //handle commercial document
  const handleCommercialDocumentChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64File = reader.result.split(",")[1]; // Extracting base64 data
        let size = (file.size / (1024 * 1024)).toFixed(2);
        setCompanyData({
          ...companyData,
          documents: {
            ...companyData?.documents?.previousDoc,
            newDoc: {
              base64: base64File,
              name: file?.name,
              size: size,
              type: file?.type,
            },
          },
        });
      };
      reader.onerror = (error) => {
        console.error("Error reading the file:", error);
      };
    }
    let fileInput = document.getElementById("commercialDocument");
    fileInput.value = "";
  };

  //get google api custom hooks
  const {
    getGoogleAddressSuggestions,
    getLatLongByAddress,
    setAddressSuggestion,
    addressSuggestion,
    setFullAddress,
    fullAddress,
  } = useGoogleLocation();
  //google api integration
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const [searchLock, setSearchLock] = useState(false);
  const [address, setAddress] = useState("");

  //set billing address
  useEffect(() => {
    if (fullAddress) {
      console.log("fullAddress", fullAddress);
      setCompanyData({
        ...companyData,
        location: address,
        city: fullAddress?.fullAddress,
        country: fullAddress?.country,
        pinCode: fullAddress?.zipCode,
      });
    } else {
      setCompanyData({
        ...companyData,
        location: "",
        city: "",
        country: "",
        pinCode: "",
      });
    }
  }, [fullAddress]);

  //search list of address
  useEffect(() => {
    if (search && !searchLock) getGoogleAddressSuggestions(search);
    else setAddressSuggestion([]);
  }, [search]);

  //debounce for address
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  //get lat lgn by selected address
  useEffect(() => {
    if (address) {
      getLatLongByAddress(address);
    }
  }, [address]);

  return (
    <>
      <DetailHeader buttonName={t("common.save")} closeUrl={"/dashboard"} />
      <div className="text-center my-[24px]">
        <Text className="text-[18px] font-bold">{t("common.myProfile")}</Text>
        {/* <div className="flex justify-center mt-[24px]">
          <Alert
            icon={false}
            severity="error"
            className="w-[660px] justify-center !text-red-700"
          >
            You have received one strike from student. If you have any concern -{" "}
            <span className="underline">Raise Dispute</span>
          </Alert>
        </div> */}
      </div>
      <div className="flex md:flex-col justify-center items-start w-full gap-6 md:p-[18px]">
        <div className="w-[232px] md:w-full ">
          <div className="w-full max-w-[427px] md:max-w-none border-gray-400 border rounded px-[16px] py-[24px]">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              TabIndicatorProps={{
                style: { display: "none" },
              }}
            >
              <Tab
                className="vertical-tbs"
                label={`${
                  pageAccess === "company" ? "Company" : "Faculty Info"
                }`}
                sx={{
                  textTransform: "capitalize",
                  alignItems: "flex-start",
                  color: "#323232",
                  p: "8px",
                  minHeight: "36px",
                  borderRadius: "4px",
                }}
                {...a11yProps(0)}
              />
              <Tab
                className="vertical-tbs"
                sx={{
                  textTransform: "capitalize",
                  alignItems: "flex-start",
                  color: "#323232",
                  p: "8px",
                  minHeight: "36px",
                  borderRadius: "4px",
                }}
                label="Billing Address"
                {...a11yProps(1)}
              />
              <Tab
                className="vertical-tbs"
                sx={{
                  textTransform: "capitalize",
                  alignItems: "flex-start",
                  color: "#323232",
                  p: "8px",
                  minHeight: "36px",
                  borderRadius: "4px",
                }}
                label="Portfolio"
                {...a11yProps(2)}
              />
            </Tabs>
          </div>
        </div>
        <div className="w-[708px] md:w-full md:mt-6 mb-5">
          <div className="min-h-[100vh] md:h-auto md:py-8 border-gray-400 border rounded">
            <TabPanel value={value} index={0}>
              <div className="w-full mb-8">
                <Text className="text-[16px] font-semibold mb-[20px]">
                  {`${
                    pageAccess === "company" ? "Company Logo" : "Faculty Logo"
                  }`}
                </Text>
                <div className="relative w-[120px] h-[120px] mb-[16px]">
                  <label htmlFor="profileImage" className="cursor-pointer">
                    <Img
                      src={
                        companyData?.newProfilePic
                          ? companyData?.newProfilePic
                          : "images/img_profile_image_circle_120x120.png"
                      }
                      alt="Profile"
                      className="w-[120px] h-[120px] object-cover rounded-[50%]"
                    />
                    <input
                      id="profileImage"
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/jpeg, image/png"
                      onChange={(e) => {
                        e.stopPropagation();
                        setCropImageType("profile");
                        handleSelectCropImage(e, 10, "profileImage");
                      }}
                    />
                  </label>
                  {companyData?.newProfilePic || companyData?.prevProfilePic ? (
                    <Img
                      zIndex="66"
                      src="images/img_cancel.svg"
                      alt="Profile"
                      className="w-7 h-7 object-cover rounded-[50%] absolute right-0 top-0 cursor-pointer"
                      onClick={(e) => {
                        console.log("hello ");
                        e.stopPropagation();
                        setCompanyData({
                          ...companyData,
                          newProfilePic: null,
                          prevProfilePic: null,
                        });
                      }}
                    />
                  ) : null}
                </div>
                <Text className="text-[14px] text-gray-700 font-normal">
                  {t("profile.uploadYourLogoImageSoItVisibleOnYourProfile")}
                </Text>
              </div>
              {pageAccess == "company" ? (
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.companyName")}
                  />
                  <Input
                    className="fill"
                    size="small"
                    placeholder="Tech Solutions"
                    value={companyData?.companyName}
                    onChange={(e) => {
                      let companyName = e.target.value?.trimStart();
                      setCompanyData({
                        ...companyData,
                        companyName,
                        companyNameError: "",
                      });
                    }}
                  />
                </div>
              ) : (
                <>
                  <div className="w-full">
                    <InputLabels
                      className="flex flex-col gap-1 items-start justify-start w-full"
                      labelText={t("common.selectFaculty")}
                      mandatoryAsterisk="*"
                    />
                    <SelectBox
                      size="small"
                      required
                      options={facultyList || []}
                      value={companyData?.facultyId}
                      onSelect={(facultyId, facultyName) => {
                        setCompanyData({
                          ...companyData,
                          facultyId,
                          facultyName: facultyId === 1 ? "" : facultyName,
                        });
                      }}
                    />
                  </div>
                  {companyData?.facultyId === 1 && (
                    <div className="w-full">
                      <InputLabels
                        className="flex flex-col gap-1 items-start justify-start w-full"
                        labelText={t("common.facultyName")}
                        mandatoryAsterisk="*"
                      />
                      <Input
                        className="fill"
                        size="small"
                        value={companyData?.facultyName}
                        onChange={(e) => {
                          let facultyName = e.target.value?.trimStart();
                          if (facultyName?.length > 100) return;
                          setCompanyData({ ...companyData, facultyName });
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
                    <Input className="fill" size="small" />
                  </div>
                </>
              )}
              <div className="w-full">
                <div className="flex justify-between mb-[4px] ">
                  <Text className="text-[12px] font-semibold">
                    {t("profile.aboutCompany")}
                  </Text>
                  <Text className="text-[12px] font-normal">
                    <span
                      style={{ color: companyData?.aboutError ? "red" : "" }}
                    >
                      {getTextLengthOfTextEditor(companyData?.about)}
                    </span>
                    /1000
                  </Text>
                </div>
                <EditorComponent
                  className={"mb-6"}
                  value={companyData?.about}
                  onChange={(value) => {
                    let about = value;
                    let count = getTextLengthOfTextEditor(about);
                    if (count > 1000) {
                      setCompanyData({
                        ...companyData,
                        about,
                        aboutError:
                          "Max characters limit should be less than 1000.",
                      });
                    } else {
                      setCompanyData({
                        ...companyData,
                        about,
                        aboutError: "",
                      });
                    }
                  }}
                />
              </div>
              <Text className="text-[16px] font-semibold mb-5">
                {t("common.contactPersonDetails")}
              </Text>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-x-4 md:gap-0 w-full">
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.firstName")}
                  />
                  <Input
                    className="fill"
                    size="small"
                    value={companyData?.firstName}
                    onChange={(e) => {
                      let firstName = e.target.value?.trimStart();
                      setCompanyData({
                        ...companyData,
                        firstName,
                        firstNameError: "",
                      });
                    }}
                  />
                </div>
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.lastName")}
                  />
                  <Input
                    className="fill"
                    size="small"
                    value={companyData?.lastName}
                    onChange={(e) => {
                      let lastName = e.target.value?.trimStart();
                      setCompanyData({
                        ...companyData,
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
                  labelText={t("common.emailAddress")}
                />
                <Input
                  endAdornment={
                    <Tooltip
                      title={t("common.thisWillActAsYourUsernameToLogin")}
                      placement="bottom"
                    >
                      <div className="inline-flex">
                        <Img
                          className="h-[19px] w-[19px] md:mr-0 cursor-pointer"
                          src="images/img_info.svg"
                          alt="info_one"
                        />
                      </div>
                    </Tooltip>
                  }
                  className="fill"
                  size="small"
                  value={companyData?.email}
                  onChange={(e) => {
                    let email = e.target.value?.trimStart();
                    setCompanyData({
                      ...companyData,
                      email,
                      emailError: "",
                    });
                  }}
                  disabled
                />
              </div>
              <div className="w-full relative">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.mobileNumber")}
                />
                <PhoneInputComponent
                  className="fill"
                  size="small"
                  value={companyData?.mobileNumber}
                  country={"pt"}
                  onChange={(value, data) => {
                    let mobileNumber = value;
                    let countryCode = data?.dialCode;
                    console.log(mobileNumber, countryCode);
                    setCompanyData({
                      ...companyData,
                      mobileNumber,
                      mobileNumberError: "",
                    });
                  }}
                />
                <Tooltip
                  title={t("common.thisWillActAsYourUsernameToLogin")}
                  placement="bottom"
                >
                  <div className="inline-flex">
                    <Img
                      className="h-[19px] w-[19px] md:mr-0 cursor-pointer absolute right-[14px] top-[28px]"
                      src="images/img_info.svg"
                      alt="info_one"
                    />
                  </div>
                </Tooltip>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Text className="text-[16px] font-semibold mb-[12px]">
                {t("profile.companyTaxBillingAddress")}
              </Text>
              <div className="w-full relative">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.location")}
                />
                <Input
                  placeholder={t("common.searchForLocation")}
                  endAdornment={
                    <InputAdornment position="start">
                      {!searchTerm ? (
                        <Img
                          className="h-[24px] w-[24px] md:mr-0 cursor-pointer relative right-[-8px]"
                          src="images/img_location.svg"
                          alt="info_one"
                        />
                      ) : (
                        <CloseSVG
                          className="w-[12px] cursor-pointer"
                          onClick={() => {
                            setSearchTerm("");
                            setFullAddress(null);
                          }}
                        />
                      )}
                    </InputAdornment>
                  }
                  className="fill"
                  size="small"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setSearchLock(false);
                  }}
                />
                {addressSuggestion.length > 0 && (
                  <div className="w-full absolute left-0 border border-solid border-blue_gray_100 rounded-md bg-white_A700 mt-[-23px] overflow-hidden bg-white-A700 z-[9]">
                    {addressSuggestion.map((address, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-start justify-start py-2 px-4 border-b border-solid border-blue_gray_100 last:border-none hover:bg-light_green_50 cursor-pointer last:hover:rounded-b-md first:hover:rounded-t-md"
                          onClick={() => {
                            setSearchLock(true);
                            setAddressSuggestion([]);
                            setAddress(address);
                            setSearchTerm(address);
                          }}
                        >
                          <Text className="common-pointer font-lato text-sm not-italic text-gray_900 tracking-[0.32px]">
                            {address}
                          </Text>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-0 w-full">
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.country")}
                  />
                  <Input
                    className="fill"
                    size="small"
                    value="1101-192"
                    onChange={(country) => {
                      setCompanyData({
                        ...companyData,
                        country,
                      });
                    }}
                  />
                </div>
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.city")}
                  />
                  <Input
                    className="fill"
                    size="small"
                    value="1101-192"
                    onChange={(city) => {
                      setCompanyData({
                        ...companyData,
                        city,
                      });
                    }}
                  />
                </div>
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.pincode")}
                  />
                  <Input
                    className="fill"
                    size="small"
                    value="1101-192"
                    onChange={(pinCode) => {
                      setCompanyData({
                        ...companyData,
                        pinCode,
                      });
                    }}
                  />
                </div>
              </div>
              {pageAccess == "company" && (
                <>
                  <Text className="text-[16px] font-semibold mb-[12px]">
                    {t("profile.taxInformation")}
                  </Text>
                  <div className="w-full max-w-[322px]">
                    <InputLabels
                      className="flex flex-col gap-1 items-start justify-start w-full"
                      labelText={t("common.taxIdNumberNif")}
                    />
                    <Input
                      className="fill"
                      size="small"
                      value={companyData?.taxId}
                      disabled
                    />
                  </div>
                  <Text className="text-[16px] font-semibold mb-[8px]">
                    {t("profile.commercialDocument")}
                  </Text>
                  <Text className="text-[14px] text-gray-900_02 font-normal mb-[12px]">
                    {t(
                      "profile.provideYourCommercialCertificateNotMandatoryForPostingJobsButVerifiedStatusAddsCredibilityToYourProfile"
                    )}
                  </Text>
                  <div className="flex flex-col w-full gap-[15px] p-4 border-gray-200 border border-solid bg-white-A700 rounded">
                    {companyData?.documents?.newDoc?.name ? (
                      <div className="flex flex-col self-stretch gap-2">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-1">
                            <Img
                              className="self-end h-[16px] w-[16px]"
                              src="images/img_attach_file_fil.svg"
                              alt="attach-file-fil"
                            />
                            <Text className="text-gray-900_02 font-qanelas  text-sm font-normal flex items-center justify-start">
                              {companyData?.documents?.newDoc?.name}
                              <CloseSVG
                                fillColor="red"
                                className="cursor-pointer w-3 text-[12px] h-3 mx-1"
                                onClick={() => {
                                  setCompanyData({
                                    ...companyData,
                                    documents: {
                                      previousDoc: {
                                        base64: "",
                                        name: "",
                                        size: "",
                                        type: "",
                                      },
                                      newDoc: {
                                        base64: "",
                                        name: "",
                                        size: "",
                                        type: "",
                                      },
                                    },
                                  });
                                }}
                              />
                            </Text>
                          </div>
                          <div className="">
                            <Text className="text-gray-900_02 font-qanelas !text-gray-700 text-xs font-normal">
                              {companyData?.documents?.newDoc?.size}Mb
                            </Text>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <label
                        htmlFor="commercialDocument"
                        className="cursor-pointer relative"
                      >
                        <input
                          id="commercialDocument"
                          className="cursor-pointer opacity-0 absolute"
                          type="file"
                          accept=".pdf"
                          onChange={handleCommercialDocumentChange}
                        />
                        <div className="flex flex-col self-stretch gap-2 cursor-pointer">
                          <div className="flex justify-between">
                            <div className="flex items-center gap-1">
                              <Img
                                className="self-end h-[16px] w-[16px]"
                                src="images/img_attach_file_fil.svg"
                                alt="attach-file-fil"
                              />
                              <Text className="text-gray-900_02 font-qanelas  text-sm font-normal">
                                No file added
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col self-start items-start">
                            <Text className="text-gray-900_02 font-qanelas !text-gray-700 text-xs font-normal">
                              {t("profile.supportsPdfOnly")}
                            </Text>
                            <Text className="text-gray-900_02 font-qanelas !text-gray-700 text-xs font-normal">
                              {t("profile.maximumFileSizeOf10Mb")}
                            </Text>
                          </div>
                        </div>
                      </label>
                    )}
                  </div>
                </>
              )}
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Text className="text-[16px] font-semibold mb-[12px]">
                {t("profile.portfolio")}
              </Text>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-5 sm:w-full w-[520px]">
                <div className="flex flex-col sm:w-full w-[250px] gap-[15px] p-4 border-gray-200 border border-solid bg-white-A700 rounded">
                  <div className="relative flex flex-col self-stretch items-center justify-center p-2.5 border-gray-200 border border-dashed bg-gray-100 rounded">
                    <div className="flex flex-col items-center p-1.5 ">
                      <label
                        htmlFor="uploadCommercialDocument"
                        className="cursor-pointer"
                      >
                        <Img
                          src="images/img_file.svg"
                          alt="Profile"
                          className="h-[20px] w-[20px]"
                        />
                      </label>
                      <input
                        type="file"
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer inset-0 "
                        id="uploadCommercialDocument"
                        accept="image/jpeg, image/png"
                        onChange={(e) => {
                          setCropImageType("portfolio");
                          handleSelectCropImage(
                            e,
                            5,
                            "uploadCommercialDocument"
                          );
                        }}
                      />
                    </div>

                    <Text className="text-gray-900_02 font-qanelas !text-black-900 text-xs font-semibold">
                      {t("profile.ClickToUpload")}
                    </Text>
                  </div>
                  <div className="flex flex-col self-stretch gap-2">
                    <div className="flex self-start">
                      <div className="flex items-center gap-1">
                        <Img
                          className="self-end h-[16px] w-[16px]"
                          src={"images/img_attach_file_fil.svg"}
                          alt="attach-file-fil"
                        />
                        <Text className="text-gray-900_02 font-qanelas  text-sm font-normal">
                          {t("profile.noFileAdded")}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col self-start items-start">
                      <Text className="text-gray-900_02 font-qanelas !text-gray-700 text-xs font-normal">
                        {t("profile.supportsJpgPngOnly")}
                      </Text>
                      <Text className="text-gray-900_02 font-qanelas !text-gray-700 text-xs font-normal">
                        {t("profile.maximumFileSizeOf5Mb")}
                      </Text>
                    </div>
                  </div>
                </div>
                {companyData?.portfolioData?.map((item, index) => {
                  return (
                    <div
                      className="uploaded-box relative w-[250px] sm:w-full"
                      key={index + item?.url}
                    >
                      <Img
                        src={
                          item?.url
                            ? item?.url
                            : "images/img_frame_427320220.png"
                        }
                        className="rounded-[8px] h-[188px] w-[250px] sm:w-full"
                        alt=""
                      />
                      <Img
                        src="images/img_cancel.svg"
                        alt="Profile"
                        className="w-7 h-7 object-cover rounded-[50%] absolute right-2 top-2 cursor-pointer"
                        onClick={() => removePortfolioImage(index)}
                      />
                    </div>
                  );
                })}
                {/* <div className="uploaded-box relative w-[250px] sm:w-full">
                  <Img
                    src="images/img_frame_427320220.png"
                    className="rounded-[8px] h-[188px] w-[250px] min-w-[250px]"
                    alt=""
                  />
                  <Img
                    src="images/img_cancel.svg"
                    alt="Profile"
                    className="w-7 h-7 object-cover rounded-[50%] absolute right-2 top-2 cursor-pointer"
                  />
                </div> */}
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
      {select_img && (
        <CropImgModal
          open={showCropperDialog}
          onClose={handleCloseDialog}
          select_img={select_img}
          setCropImg={(newImg) => {
            if (cropImageType === "portfolio") {
              let prevImages = companyData?.portfolioData;
              prevImages.push({ url: newImg });
              setCompanyData({ ...companyData, portfolioData: prevImages });
            } else if (cropImageType === "profile") {
              setCompanyData({ ...companyData, newProfilePic: newImg });
            }
            setSelect_img(null);
            handleCloseDialog();
          }}
        />
      )}
    </>
  );
};
export default CompanyProfile;
