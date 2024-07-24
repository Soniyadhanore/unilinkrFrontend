import { jwtDecode } from "jwt-decode";
import { STORAGE } from "./LocalVariable";
import addDeleteGetLocalStorage from "prototype/addDeleteGetLocalStorage";

const userToken = addDeleteGetLocalStorage(STORAGE?.USER_TOKEN, {}, "get");

export const decoded = () => {
  let decode = null;
  if (!userToken) {
    decode = null;
  } else {
    decode = jwtDecode(userToken);
  }
  return decode;
};

export const decodedToken = (token) => {
  if (!token) {
    return null;
  } else {
    return jwtDecode(token);
  }
};
