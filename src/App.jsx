import React, { useEffect } from "react";
import Routes from "./Routes/routing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DesignLoader from "components/DesignLoader";
import { useSelector, useDispatch } from "react-redux";
import { currentLoader } from "./redux/reducers/loader";
import { setSnackbar, snackObj } from "./redux/reducers/snackbar";
import Alert from "@mui/material/Alert";
const theme = createTheme({
  typography: {
    fontFamily: "Qanelas", // Replace 'Qanelas' with your desired font family
  },
});

function App() {
  const loader = useSelector(currentLoader);
  const snackBar = useSelector(snackObj);
  const dispatch = useDispatch();

  useEffect(() => {
    if (snackBar?.isOpen) {
      setTimeout(() => {
        dispatch(
          setSnackbar({
            ...snackBar,
            isOpen: false,
          })
        );
      }, 2000);
    }
  }, [snackBar?.isOpen]);

  return (
    <ThemeProvider theme={theme}>
      {loader && <DesignLoader />}
      {snackBar?.isOpen && (
        <Alert
          icon={false}
          severity={snackBar?.state}
          className="z-[999] fixed left-0 right-0 top-[24px] mx-auto w-full max-w-[382px]"
        >
          {snackBar?.message}
        </Alert>
      )}
      <Routes />
    </ThemeProvider>
  );
}
export default App;
