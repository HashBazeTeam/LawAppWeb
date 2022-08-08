import jwtDecode from "jwt-decode";
import api from "../../api";
import { setUserData } from "./index";

const userThunk = {
  userLogin(credentials) {
    return async (dispatch) => {
      const res = await api.user.login(credentials);
      if (res.status === 200) {
        dispatch(setUserData(res.data.data));
      }
      return res;
    };
  },

  userLogout() {
    return async (dispatch) => {
      dispatch(setUserData({}));
    };
  },
};

export default userThunk;
