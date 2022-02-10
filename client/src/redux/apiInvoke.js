import { loginFail, loginInit, loginSuccess } from "./usersReducer";
import { publicReq } from "../requestMethod";
import { registerFail, registerInit, registerSuccess } from "./regReducer";

export const login = async (dispatch, user) => {
    dispatch(loginInit());
    try{
       const res = await publicReq.post("/login", user);
       dispatch(loginSuccess(res.data));
    } catch(err) {
        dispatch(loginFail());
    }
};

export const register = async (dispatch, reguser) => {
   
    dispatch(registerInit());
    try{
       const res = await publicReq.post("/register", reguser);
       dispatch(registerSuccess(res.data));
    } catch(err) {
        dispatch(registerFail());
    }
};

