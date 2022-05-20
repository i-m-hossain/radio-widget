import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    stations: [],
    loading: false,
};
export const getStations = createAsyncThunk("stations/getStations", async () => {
    const res = await fetch("/stationsList.json").then((data) => data.json());
    return res;
});
export const stationsSlice = createSlice({
    name: "stations",
    initialState,
    reducers: {},
    extraReducers: {
        [getStations.pending]: (state) => {
            state.loading = true;
        },
        [getStations.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.stations = payload;
        },
        [getStations.rejected]: (state) => {
            state.loading = false;
        },
    },
});

export default stationsSlice.reducer;
