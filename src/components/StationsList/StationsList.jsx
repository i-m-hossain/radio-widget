import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStations } from "../../store/slices/stationsSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import StationContainer from "../Stations/StationContainer";
import style from "./StationList.module.css";
const StationsList = ({ stations, loading }) => {
    return (
        <div className={`${style.stationContainer} ${style.containerShadow}`}>
            <Header></Header>
            <StationContainer>
                {!loading ? (
                    (stations || []).map((item, index) => (
                        <div className={style.station} key={index}>
                            <h4>{item.name}</h4>
                            <h4>{item.frequency}</h4>
                        </div>
                    ))
                ) : (
                    <h4 className={style.loader}> Loading...</h4>
                )}
            </StationContainer>
            <Footer></Footer>
        </div>
    );
};

export default StationsList;
