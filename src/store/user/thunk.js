import jwtDecode from "jwt-decode";
import api from "../../api";
import { setUserData, setTokens } from "./index";

const userThunk = {
  userLogin(credentials) {
    return async (dispatch) => {
      const res = await api.user.login(credentials);
      if (res.status === 200) {
        dispatch(setUserData(res.data.data));
        dispatch(setTokens(res.data.token));
      }
      return res;
    };
  },

  userLogout() {
    return async (dispatch) => {
      dispatch(setUserData({}));
      dispatch(setTokens({}));
      localStorage.removeItem("upto-access-token");
      localStorage.removeItem("upto-refresh-token");
    };
  },
};

export default userThunk;
