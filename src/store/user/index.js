import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  credentials: {
    phoneNumber: "",
    uid: "",
  },
  userData: {
    userID: "",
    fullName: "",
    phoneNumber: "",
    country: "",
    dob: "",
    role: "",
    email: "",
    telephone: "",
  },
  token: {
    accessToken: "",
    refreshToken: "",
  },
  configs: {
    expiryTime: 24,
    reminderTime: 30,
  },
};

/**
 * User slice
 */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCredentials: (state, action) => {
      state.credentials = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
    setConfigs: (state, action) => {
      state.configs = action.payload;
    },
  },
});

export const { setUserData, setUserCredentials, setUserToken, setConfigs } =
  userSlice.actions;
export default userSlice.reducer;
