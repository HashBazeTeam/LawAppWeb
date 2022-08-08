import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import userReducer, * as userActions from "./user";
import userThunk from "./user/thunk";
import * as userSelectors from "./user/select";

import uiReducer, {
  sidebarShowSet,
  unfoldableSet,
  setSidebarShow,
  selectUnfoldable,
  selectSidebarShow,
  setUnfoldable,
} from "./ui";

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
  },
});

export default store;

export const actions = {
  user: userActions,
  ui: { sidebarShowSet, unfoldableSet },
};

export const thunks = {
  user: userThunk,
  ui: { setSidebarShow, setUnfoldable },
};

export const selectors = {
  user: userSelectors,
  ui: { selectSidebarShow, selectUnfoldable },
};
