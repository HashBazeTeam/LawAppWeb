import { setUserCredentials, setUserData, setUserToken, setConfigs } from "./index";
import { userServices, configServices } from "../../services";
import { convertTZ } from "src/utils";

const userThunk = {
  userLogin(firebaseUser) {
    return async (dispatch, getState) => {
      const {
        user: { credentials, userData },
      } = getState();

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
                dob: convertTZ(adminUser.dob),
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

  getConfigs() {
    return async (dispatch) => {
      try {
        const configs = await configServices.getAllConfigs();
        dispatch(setConfigs(configs));
      } catch (error) {
        console.log(error);
      }
    };
  }
};

export default userThunk;
