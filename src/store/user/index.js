import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    userId: "",
    name: "",
    email: "",
    telephone: "",
    accountType: "",
  },
};

/**
 * User slice
 */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

