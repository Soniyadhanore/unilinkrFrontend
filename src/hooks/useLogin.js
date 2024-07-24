import { API_ROUTES } from "common/Enum";
import { STORAGE } from "common/LocalVariable";
import addDeleteGetLocalStorage from "prototype/addDeleteGetLocalStorage";
import globalRequest from "prototype/globalRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLoader } from "../redux/reducers/loader";
import { setSnackbar } from "../redux/reducers/snackbar";
import { decodedToken } from "common/TokenDecode";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logIn = async (data) => {
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.LOGIN,
        "post",
        data,
        {},
        false
      );
      if (res?.status === "SUCCESS") {
        //set to local storage
        addDeleteGetLocalStorage(
          STORAGE.USER_TOKEN,
          res?.data?.token,
          "add",
          "single"
        );
        dispatch(
          setSnackbar({
            isOpen: true,
            message: res?.message,
            state: "success",
          })
        );
        let decoded = decodedToken(res?.data?.token);
        if (decoded?.is_first_login) {
          navigate("/company-profile");
        }
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("error", err?.response?.data);
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

  return { logIn };
};
