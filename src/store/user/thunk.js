import jwtDecode from "jwt-decode";
import api from "../../api";
import { setUserCredentials, setUserData, setUserToken } from "./index";
import { auth, signOut } from "src/api/firebase";

const userThunk = {
  userLogin(user) {
    return async (dispatch) => {
      dispatch(
        setUserCredentials({
          phoneNumber: user.phoneNumber,
          email: user.email,
          uid: user.uid,
        })
      );
      dispatch(
        setUserToken({
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        })
      );
    };
  },

  userLogout() {
    return async (dispatch) => {
      try {
        await auth.signOut();
        console.log("logout");
        dispatch(setUserCredentials({}));
        dispatch(setUserData({}));
        dispatch(setUserToken({}));
      } catch (error) {
        console.log(error);
        return false;
      }
    };
  },
};

export default userThunk;
