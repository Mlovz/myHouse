import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
  token: "",
  otp: {
    hash: "",
    phone: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      console.log(action.payload);
      state.user = action.payload.user;
      state.isAuth = true;
      state.token = action.payload.token;
    },
    setOpt: (state, action) => {
      state.otp.hash = action.payload.hash;
      state.otp.phone = action.payload.phone;
    },
  },
});

export const { setAuth, setOpt } = authSlice.actions;

export default authSlice.reducer;
