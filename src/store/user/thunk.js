import { setUserCredentials, setUserData, setUserToken } from "./index";
import { userServices } from "../../services";

const userThunk = {
  userLogin(firebaseUser) {
    return async (dispatch, getState) => {
      const {
        user: { credentials, userData },
      } = getState();
      console.log(credentials, userData);

      if (!userData?.userID || userData.userID == "") {
        try {
          const adminUser = await userServices.getAdminByPhoneNumber(
            firebaseUser.phoneNumber
          );
          if (adminUser) {
            dispatch(
              setUserData({
                userID: adminUser.userID,
                fullName: adminUser.fullName,
                country: adminUser.country,
                phoneNumber: adminUser.phoneNumber,
                email: adminUser.email,
              })
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
      dispatch(
        setUserCredentials({
          phoneNumber: firebaseUser.phoneNumber,
          email: firebaseUser.email,
          uid: firebaseUser.uid,
        })
      );
      dispatch(
        setUserToken({
          accessToken: firebaseUser.accessToken,
          refreshToken: firebaseUser.refreshToken,
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
