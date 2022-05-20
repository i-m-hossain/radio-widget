import React from "react";
import backArrow from "../../assets/back-arrow.png";
import switchImg from "../../assets/switch.png";
import style from "./Header.module.css";
const Header = () => {
    return (
        <div className={style.header}>
            <img src={backArrow} alt="back arrow" width={20} />
            <h2 className={style.title}>Stations</h2>
            <img src={switchImg} alt="switch icon" width={40} />
        </div>
    );
};

export default Header;
