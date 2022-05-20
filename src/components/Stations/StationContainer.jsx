import React from "react";
import style from "./StationContainer.module.css";
const StationContainer = ({ children }) => {
    return <div className={style.container}>{children}</div>;
};

export default StationContainer;
