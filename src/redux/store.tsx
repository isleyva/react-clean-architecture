import { configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "./slices";
// import { UserType } from "../models";
import { ApiType } from "../models/api.type";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

export interface AppStore {
  api: ApiType
}
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, apiReducer)

export const store = configureStore({
  reducer: {
    api: persistedReducer,
  },
});

export const persistor = persistStore(store)