import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
       currentUser: null,
       isFetching: false,
       error: false,
    },
    reducers: {
        loginInit : (state) => {
            state.isFetching = true;
        },
        loginSuccess : (state,action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFail : (state) => {
            state.isFetching= false;
            state.error= true;
        },
    },
});

export const { loginInit, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;