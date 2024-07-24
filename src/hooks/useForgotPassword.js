import { API_ROUTES } from "common/Enum";
import globalRequest from "prototype/globalRequest";
import { useDispatch } from "react-redux";
import { changeLoader } from "../redux/reducers/loader";
import { setSnackbar } from "../redux/reducers/snackbar";
export const useForgotPassword = () => {
  const dispatch = useDispatch();

  const sendForgotPasswordLink = async (formData) => {
    const data = {
      email: formData?.email,
    };
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.FORGOT_PASSWORD_SEND_LINK,
        "post",
        data,
        {},
        false
      );
      if (res?.status === "SUCCESS") {
        dispatch(
          setSnackbar({
            isOpen: true,
            message: res?.message,
            state: "success",
          })
        );
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

  return { sendForgotPasswordLink };
};
