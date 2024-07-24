// import PropTypes from "prop-types";
import { STORAGE } from "common/LocalVariable";
import addDeleteGetLocalStorage from "prototype/addDeleteGetLocalStorage";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const userAccess = addDeleteGetLocalStorage(STORAGE?.USER_TOKEN, {}, "get");
  return <>{userAccess ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoutes;
