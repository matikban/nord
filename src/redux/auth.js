import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");

const initialState = {
    isAuthorized: token && token.length > 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => {
        state.isAuthorized = true;
    },
    loginError: (state) => {
        state.isAuthorized = false;
    },
    logout: (state) => {
        state.isAuthorized = false;
    },
  },
});

export const { loginSuccess, loginError, logout } = authSlice.actions;


export default authSlice.reducer;
