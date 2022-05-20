import { configureStore } from "@reduxjs/toolkit";
import stationsReducer from "./slices/stationsSlice";
export const store = configureStore({
    reducer: {
        stations: stationsReducer,
    },
});
