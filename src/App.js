import style from "./css/App.module.css";
import "./css/global.css";

import StationsList from "./components/StationsList/StationsList";
import ControlStation from "./components/ControlStation/ControlStation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStations } from "./store/slices/stationsSlice";

function App() {
    const dispatch = useDispatch();
    const { stations, loading } = useSelector((state) => state.stations);

    useEffect(() => {
        dispatch(getStations());
    }, [dispatch]);
    return (
        <div className={`${style.container} common`}>
            <StationsList stations={stations} loading={loading} />
            <ControlStation stations={stations} loading={loading} />
        </div>
    );
}

export default App;
