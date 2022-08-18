import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  credentials: {
    phoneNumber: "",
  },
  userData: {
    userId: "",
    name: "",
    email: "",
    telephone: "",
    accountType: "",
  },
  token: {
    accessToken: "",
    refreshToken: "",
  }
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
  },
});

export const { setUserData, setUserCredentials, setUserToken } = userSlice.actions;
export default userSlice.reducer;

