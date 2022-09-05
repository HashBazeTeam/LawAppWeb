import { setUserCredentials, setUserData, setUserToken } from "./index";
import { userServices } from "../../services";

const userThunk = {
  userLogin(user) {
    return async (dispatch, getState) => {
      const {
        user: { credentials, userData },
      } = getState();
      if (!userData.userID) {
        try {
          const adminUser = await userServices.getAdminByPhoneNumber(
            user.phoneNumber
          );
          dispatch(
            setUserData({
              userID: adminUser.userID,
              fullName: adminUser.fullName,
              country: adminUser.country,
              phoneNumber: adminUser.phoneNumber,
              email: adminUser.email,
            })
          );
        } catch (error) {
          console.log(error);
        }
      }
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
        await userServices.signOut();
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
