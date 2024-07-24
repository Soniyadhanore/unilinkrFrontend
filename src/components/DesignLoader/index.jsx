import React from "react";
import Loader from "react-js-loader";
const DesignLoader = () => {
  return (
    <div className={"App"}>
      <div className={"item"}>
        <Loader
          type="spinner-cub"
          bgColor={"#000000"}
          color={"#ffffff"}
          size={100}
        />
      </div>
    </div>
  );
};

export default DesignLoader;
