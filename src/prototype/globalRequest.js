import axios from "axios";
import addDeleteGetLocalStorage from "./addDeleteGetLocalStorage";
import { API_KEY, BASE_URL } from "BaseUrl";
import { STORAGE } from "common/LocalVariable";

/**
 * @description This function is used to logout the user
 */
export const sessionLogout = async () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "/";
};

/**
 * @description This function is used to start the session time
 */
const startSessionTime = () => {
  let time = new Date().getTime().toString();
  addDeleteGetLocalStorage(STORAGE.SESSION_TIME, time, "add", "single");
};

/**
 * @description This function is used to get the third party request
 */
export const ThirdPartyRequest = async (
  url,
  method = "get",
  headers = {},
  data = {},
  options = {}
) => {
  startSessionTime();
  var config = {
    method: method,
    url: url,
    headers: headers,
    data: data,
    ...options,
  };

  if (url !== undefined) {
    return new Promise((resolve, reject) => {
      axios(config)
        .then((response) => {
          if (response?.data?.status === 401) {
            sessionLogout();
          }
          resolve(response.data);
        })
        .catch((err) => {
          if (err?.response?.status === 401) {
            sessionLogout();
          }
          reject(err);
        });
    });
  }
};

const globalRequest = (
  url,
  method = "get",
  data = {},
  options = {},
  token = false
) => {
  //gloabl axios request for post get put and delete

  let headers = {
    "x-api-key": API_KEY,
  };
  if (token) {
    const userToken = addDeleteGetLocalStorage(STORAGE.USER_TOKEN, {}, "get");
    headers.authorization = userToken;
  }
  let sendData = {
    method: method,
    url: BASE_URL + url,
    headers: headers,
    ...options,
  };

  if (data) {
    sendData.data = data;
  }

  startSessionTime(); //start session time
  return new Promise((resolve, reject) => {
    axios(sendData)
      .then((response) => {
        if (response?.data?.status === 401) {
          sessionLogout();
        }
        resolve(response.data);
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          sessionLogout();
        }
        reject(err);
      });
  });
};

export default globalRequest;
