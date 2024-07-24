/**
 * this file contains all the api routes
 */

export const API_ROUTES = {
  LOGIN: "auth/login",
  LOG_OUT: "auth/logout",
  SIGN_UP: "auth/institute-company-signup",
  FORGOT_PASSWORD_SEND_LINK: "auth/forgot-password",
  RESET_PASSWORD: "auth/company-reset-password",
  CHANGE_PASSWORD: "auth/change-password",
  DELETE_ACCOUNT: "auth/delete-account",
  //common api's routes
  GOOGLE_ADDRESS_SUGGESTIONS: (search) => `common/address-suggestions?input=${search}`,
  GET_LAT_LNG: (search) => `common/get-lat-lang?address=${search}`,
  GET_FULL_ADDRESS_USING_LAT_LNG: (lat, lng) => `common/get-full-address?lat=${lat}&lng=${lng}`,
  GET_SELECTED_LANGUAGE: "common/language",
  CHANGE_LANGUAGE: "common/language",
  GET_FACULTY_LIST: "common/get-faculty-list",
  //user get data
  GET_PROFILE_DATA: "company/profile/get-personal-details",
  UPDATE_PROFILE_DATA:"company/profile/update-personal-details",
  //helps and support 
  GET_CATEGORY_LIST:"student/get_types",
  GET_HELPS_AND_SUPPORT: "student/get_help_support",
  ADD_HELPS_AND_SUPPORT: "student/add_help_support"
};
