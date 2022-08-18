import jwtDecode from "jwt-decode";
import api from "../../api";
import { setUserData } from "./index";
import { auth } from "src/api/firebase";

const userThunk = {
  userLogin(user) {
    return async (dispatch) => {
      dispatch(setUserData({
        phoneNumber: user.phoneNumber,
        email: user.email,
        uid: user.uid,
      }));
    };
  },

  userLogout() {
    return async (dispatch) => {
      try {
        await auth.signOut();
        dispatch(setUserData({}));
      } catch (error) {
        console.log(error);
        return false;
      }
    };
  },
};

export default userThunk;
