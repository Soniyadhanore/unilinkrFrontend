// import PropTypes from "prop-types";
import { STORAGE } from "common/LocalVariable";
import { decodedToken } from "common/TokenDecode";
import addDeleteGetLocalStorage from "prototype/addDeleteGetLocalStorage";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CommonRoutes = () => {
  const userAccess = addDeleteGetLocalStorage(STORAGE?.USER_TOKEN, {}, "get");
  let decoded = decodedToken(userAccess);
  return (
    <>
      {!userAccess ? (
        <Outlet />
      ) : decoded?.is_first_login ? (
        <Navigate to="/company-profile" />
      ) : (
        <Navigate to="/dashboard" />
      )}
    </>
  );
};

export default CommonRoutes;
