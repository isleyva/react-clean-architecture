import { configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "./slices";
import { UserType } from "../models";
import { ApiType } from "../models/api.type";

export interface AppStore {
  api: ApiType
}

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
