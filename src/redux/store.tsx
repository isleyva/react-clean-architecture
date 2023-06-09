import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "./slices";
// import { UserType } from "../models";
import { ApiType } from "../models/api.type";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

export interface AppStore {
  api: ApiType;
}
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
  api: apiReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)