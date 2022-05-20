import React, { useState } from "react";
import Header from "../Header/Header";
import StationContainer from "../Stations/StationContainer";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import bg from "../../assets/bg.png";
import Footer from "../Footer/Footer";
import style from "./ControlStation.module.css";

const ControlStation = ({ stations, loading }) => {
    const [currentStation, setCurrentStation] = useState(0);
    console.log(currentStation);
    return (
        <div className={`${style.stationContainer} ${style.containerShadow}`}>
            <Header></Header>
            <StationContainer>
                {!loading ? (
                    <div className={style.station}>
                        <h4>{stations[currentStation]?.name}</h4>
                        <h4>{stations[currentStation]?.frequency}</h4>
                    </div>
                ) : (
                    <h4 className={style.loader}>Loading...</h4>
                )}
                <div className={`${style.station} ${style.selection}`}>
                    <span
                        className={
                            currentStation >= 1
                                ? `${style.minus}`
                                : `${style.disabled}`
                        }
                        onClick={() => {
                            currentStation >= 1 &&
                                setCurrentStation(currentStation - 1);
                        }}
                    >
                        <img src={minus} alt="" />
                    </span>
                    <span>
                        <img src={bg} alt="" width={140} height={140} />
                    </span>

                    <span
                        className={
                            currentStation < stations.length - 1
                                ? `${style.plus}`
                                : `${style.disabled}`
                        }
                        onClick={() => {
                            currentStation < stations.length - 1 &&
                                setCurrentStation(currentStation + 1);
                        }}
                    >
                        <img src={plus} alt="" />
                    </span>
                </div>
                <div>
                    {!loading ? (
                        stations
                            .slice(currentStation + 1, currentStation + 3)
                            .map((item) => (
                                <div
                                    className={style.station}
                                    key={item.frequency}
                                >
                                    <h4>{item.name}</h4>
                                    <h4>{item.frequency}</h4>
                                </div>
                            ))
                    ) : (
                        <h4 className={style.loader}>Loading...</h4>
                    )}
                </div>
            </StationContainer>
            <Footer>
                <h4 className={style.current}>currently playing</h4>
                <h4 className={style.channel}>
                    {stations[currentStation]?.name}
                </h4>
            </Footer>
        </div>
    );
};

export default ControlStation;
