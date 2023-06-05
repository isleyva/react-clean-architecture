import { configureStore } from "@reduxjs/toolkit";
import { apiReducer, userReducer } from "./slices";
import { UserType } from "../models";
import { ApiType } from "../models/api.type";

export interface AppStore {
  user: UserType;
  api: ApiType
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    api: apiReducer,
  },
});
