import { API_ROUTES } from "common/Enum";
import globalRequest from "prototype/globalRequest";
import { useDispatch } from "react-redux";
import { changeLoader } from "../redux/reducers/loader";
import { setSnackbar } from "../redux/reducers/snackbar";
import { useState } from "react";

export const useCreateUpdateProfile = () => {
  const dispatch = useDispatch();

  //states
  const [profileData, setProfileData] = useState(null);

  //handle updated errors
  const handleErrors = (data) => {
    let error = false;
    let errObj = { ...data };

    if (data?.type === "company") {
      if (!data?.companyName) {
        errObj.companyNameError = "Company name is required";
        error = true;
      }
      if (!data?.taxId) {
        errObj.taxIdError = "Company name is required";
        error = true;
      }
    }
    if (data?.type === "institution") {
      if (!data?.facultyName) {
        errObj.facultyNameError = "faculty name is required";
        error = true;
      }
      if (!data?.facultyId) {
        errObj.facultyIdError = "faculty name is required";
        error = true;
      }
      if (!data?.academicInstitutionName) {
        errObj.academicInstitutionNameError = "Company name is required";
        error = true;
      }
    }

    if (!data?.about) {
      errObj.aboutError = "Company name is required";
      error = true;
    }
    if (!data?.firstName) {
      errObj.firstNameError = "Company name is required";
      error = true;
    }
    if (!data?.lastName) {
      errObj.lastNameError = "Company name is required";
      error = true;
    }
    if (!data?.email) {
      errObj.emailError = "Company name is required";
      error = true;
    }
    if (!data?.mobileNumber) {
      errObj.mobileNumberError = "Company name is required";
      error = true;
    }
    if (!data?.location) {
      errObj.locationError = "Company name is required";
      error = true;
    }
    if (!data?.city) {
      errObj.cityError = "Company name is required";
      error = true;
    }
    if (!data?.country) {
      errObj.countryError = "Company name is required";
      error = true;
    }
    if (!data?.pinCode) {
      errObj.pinCodeError = "Company name is required";
      error = true;
    }
    if (data?.portfolioData?.length < 1) {
      errObj.pinCodeError = "Company name is required";
      error = true;
    }

    {
      /**
  {
    //basic details
    8 companyName: "", //for company
    8 companyNameError: "",
    8 facultyId:"", for faculty
    8 facultyIdError:"", for faculty
    8 facultyName: "",//for faculty
    8 facultyNameError: "",
    8 academicInstitutionName: "", //for faculty 
    8 academicInstitutionNameError: "",
    8 about: "",
    8 aboutError: "",
    8 firstName: "",
    8 firstNameError: "",
    8 lastName: "",
    8 lastNameError: "",
    8 email: "",
    8 emailError: "",
    8 mobileNumber: "",
    8 mobileNumberError: "",
    prevProfilePic: "",
    newProfilePic: null,
    //billing data
    8 location: "",
    8 city: "",
    8 country: "",
    8 pinCode: "",
    8 taxId: "", //for company
    documents: { //for company
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
  }
  */
    }

    return { error };
  };

  const getProfileData = async () => {
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.GET_PROFILE_DATA,
        "get",
        {},
        {},
        true
      );
      if (res?.status === "SUCCESS") {
        let data = res?.data;
        let userData = data?.userData;
        let companyData = data?.companyData;
        let portfolioImg = data?.portfolioImg;
        let allData = {
          //basic details
          prevProfilePic: userData?.profile_pic,
          firstName: userData?.first_name,
          lastName: userData?.last_name,
          email: userData?.email,
          mobileNumber: userData?.mobile,
          countryCode: userData?.country_code,
          companyName: companyData?.company_institute_name,
          facultyId: companyData?.faculty_id,
          academicInstitutionName: companyData?.company_institute_name,
          about: companyData?.about,
          facultyName: "",
          newProfilePic: null,
          //billing data
          location: companyData?.billing_address,
          city: companyData?.billing_city,
          country: companyData?.billing_country,
          pinCode: companyData?.billing_pincode,
          lat: companyData?.billing_latitude,
          lng: companyData?.billing_longitude,
          taxId: companyData?.tax_id,
          documents: {
            previousDoc: {
              base64: companyData?.commercial_document,
              name: companyData?.commercial_document_display_name,
              size: companyData?.commercial_document_size,
            },
            newDoc: {
              base64: "",
              name: "",
              size: "",
            },
          },
          portfolioData: portfolioImg || [],
        };
        setProfileData(allData);
        {
          /**
          "data": {
        "userData": {
            "id": 68,
            "slug": null,
            "first_name": "first name ",
            "last_name": "last name ",
            "mobile": "898777457786",
            "country_code": null,
            "email": "shanti1@mailinator.com",
            "new_email": "",
            "profile_pic": null,
            "login_otp": null,
            "forgot_password_code": null,
            "is_first_login": false,
            "unilinkr_score": 0,
            "no_of_strikes": 0,
            "access": "institution",
            "selected_lang": null,
            "createdAt": "2024-04-24T06:43:39.871Z",
            "updatedAt": "2024-04-24T12:00:04.319Z",
            "addedBy": null,
            "updatedBy": null,
            "status": "active",
            "dob": "",
            "email_verify_otp": "",
            "del_reason": ""
        },
        "companyData": {
            "id": 1,
            "slug": null,
            "faculty_id": 1,
            "tax_id": null,
            "company_institute_name": "academic name ",
            "about": "",
            "billing_address": "",
            "billing_country": "",
            "billing_city": "",
            "billing_pincode": "",
            "billing_latitude": "",
            "billing_longitude": "",
            "commercial_document": "",
            "commercial_document_size": "",
            "commercial_document_display_name": "",
            "createdAt": "2024-04-24T06:43:39.930Z",
            "updatedAt": "2024-04-24T06:43:39.930Z",
            "addedBy": 68,
            "updatedBy": 68,
            "type": "institution",
            "status": "active"
        },
        "portfolioImg": []
    }
      */
        }
      }
    } catch (err) {
      console.error("error", err?.response?.data);
      setProfileData(null);
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

  const updateProfileData = async (formData) => {
    let { error } = handleErrors(formData);
    if (error) return;
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.GET_PROFILE_DATA,
        "post",
        {},
        {},
        true
      );
      if (res?.status === "SUCCESS") {
        console.log("res", res);
      }
    } catch (err) {
      console.error("error", err?.response?.data);
      setProfileData(null);
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

  return { getProfileData, updateProfileData, profileData };
};
