import * as React from "react";
import { InputAdornment } from "@mui/material";
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
const citySelect = [
  { value: "Indore", label: "Indore" },
  { value: "Bhopal", label: "Bhopal" },
  { value: "Other", label: "Other" },
];
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
const FacultyProfile = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <DetailHeader buttonName={t("common.save")} />
      <div className="text-center my-[24px]">
        <Text className="text-[18px] font-bold">{t("common.myProfile")}</Text>
      </div>
      <div className="flex md:flex-col justify-center items-start w-full gap-6 md:p-[18px]">
        <div className="w-[232px] md:w-full ">
          <div className="w-full max-w-[427px] border-gray-400 border rounded px-[16px] py-[24px]">
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
                label="Company/Faculty Info"
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
                  {t("profile.companyFacultyLogo")}
                </Text>
                <div className="relative w-[120px] h-[120px] mb-[16px]">
                  <label htmlFor="profileImage" className="cursor-pointer">
                    <Img
                      src="images/img_profile_image_circle_120x120.png"
                      alt="Profile"
                      className="w-[120px] h-[120px] object-cover rounded-[50%]"
                    />
                    <Img
                      src="images/img_cancel.svg"
                      alt="Profile"
                      className="w-7 h-7 object-cover rounded-[50%] absolute right-0 top-0 cursor-pointer"
                    />
                  </label>
                  <input
                    id="profileImage"
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <Text className="text-[14px] text-gray-700 font-normal">
                  {t("profile.uploadYourLogoImageSoItVisibleOnYourProfile")}
                </Text>
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.facultyName")}
                />
                <Input
                  className="fill"
                  size="small"
                  placeholder="Tech Solutions"
                />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.academicInstitutionName")}
                  mandatoryAsterisk="*"
                />
                <Input className="fill" size="small" />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("profile.aboutFaculty")}
                />
                <EditorComponent className={"mb-6"} />
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
                  <Input className="fill" size="small" />
                </div>
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.lastName")}
                  />
                  <Input className="fill" size="small" />
                </div>
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.emailAddress")}
                />
                <Input className="fill" size="small" />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.mobileNumber")}
                />
                <PhoneInputComponent
                  className="fill"
                  size="small"
                  value={"351"}
                  country={"pt"}
                  onChange={(value, data) => {
                    let mobileNumber = value;
                    let countryCode = data?.dialCode;
                    console.log(mobileNumber, countryCode);
                  }}
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Text className="text-[16px] font-semibold mb-[12px]">
                {t("profile.facultyTaxBillingAddress")}
              </Text>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.location")}
                />
                <Input
                  placeholder={t("common.searchForLocation")}
                  endAdornment={
                    <InputAdornment position="start">
                      <Img
                        className="h-[24px] w-[24px] md:mr-0 cursor-pointer relative right-[-8px]"
                        src="images/img_location.svg"
                        alt="info_one"
                      />
                    </InputAdornment>
                  }
                  className="fill"
                  size="small"
                  value="Rua da Inovação, District 123"
                />
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
                    value="Portugal"
                    disabled
                  />
                </div>
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.city")}
                  />
                  <SelectBox
                    size="small"
                    required
                    options={citySelect}
                    value=""
                    onSelect={(type, name) => {
                      console.log(type, name);
                    }}
                  />
                </div>
                <div className="w-full">
                  <InputLabels
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelText={t("common.pincode")}
                  />
                  <Input className="fill" size="small" value="1101-192" />
                </div>
              </div>
              <Text className="text-[16px] font-semibold mb-[12px]">
                {t("profile.taxInformation")}
              </Text>
              <div className="w-full max-w-[322px]">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.taxIdNumberNif")}
                />
                <Input className="fill" size="small" value="PT123456789" />
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
                <div className="flex flex-col self-stretch gap-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <Img
                        className="self-end h-[16px] w-[16px]"
                        src="images/img_attach_file_fil.svg"
                        alt="attach-file-fil"
                      />
                      <Text className="text-gray-900_02 font-qanelas  text-sm font-normal">
                        Commercial Certificate.pdf
                      </Text>
                    </div>
                    <div className="">
                      <Text className="text-gray-900_02 font-qanelas !text-gray-700 text-xs font-normal">
                        1.01Mb
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
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Text className="text-[16px] font-semibold mb-[12px]">
                {t("profile.portfolio")}
              </Text>
              <div className="grid grid-cols-2 gap-5 w-[520px]">
                <div className="flex flex-col w-[250px] gap-[15px] p-4 border-gray-200 border border-solid bg-white-A700 rounded">
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
                        id="uploadCommercialDocument"
                        type="file"
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer inset-0 "
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
                          src="images/img_attach_file_fil.svg"
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
                <div className="uploaded-box relative w-[250px]">
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
                </div>
                <div className="uploaded-box relative w-[250px]">
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
                </div>
                <div className="uploaded-box relative w-[250px]">
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
                </div>
                <div className="uploaded-box relative w-[250px]">
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
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
};
export default FacultyProfile;
