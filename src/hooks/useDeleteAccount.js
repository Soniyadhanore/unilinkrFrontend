import { API_ROUTES } from "common/Enum";
import globalRequest from "prototype/globalRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLoader } from "../redux/reducers/loader";
import { setSnackbar } from "../redux/reducers/snackbar";

export const useDeleteAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteAccount = async (data) => {
    dispatch(changeLoader(true));
    try {
      const res = await globalRequest(
        API_ROUTES?.DELETE_ACCOUNT,
        "post",
        data,
        {},
        true
      );
      if (res?.status === "SUCCESS") {
        //set to local storage
        localStorage.clear();
        dispatch(
          setSnackbar({
            isOpen: true,
            message: res?.message,
            state: "success",
          })
        );
        navigate("/");
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

  return { deleteAccount };
};
