/**
 * User selectors
 */
import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const selectUserCredentials = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.credentials
);

export const selectUserData = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.userData
);

export const selectUserID = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.userData.userID
)

export const selectRole = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.userData.role
);

export const selectUserId = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.userData.userID
);