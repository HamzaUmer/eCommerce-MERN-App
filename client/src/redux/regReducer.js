import {createSlice} from "@reduxjs/toolkit";

const regSlice = createSlice({
    name: "reguser",
    initialState: {
       regUser: null,
       isFetching: false,
       error: false,
    },
    reducers: {
        registerInit : (state) => {
            state.isFetching = true;
        },
        registerSuccess : (state,action) => {
            state.isFetching = false;
            state.regUser = action.payload;
        },
        lregisterFail : (state) => {
            state.isFetching= false;
            state.error= true;
        },
    },
});

export const { registerInit, registerSuccess, registerFail } = regSlice.actions;
export default regSlice.reducer;