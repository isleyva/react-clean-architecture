import { createSlice } from "@reduxjs/toolkit";
import { ApiType } from "../../models/api.type";
import { modifyUser } from "./user.slices";

export const ApiEmptyState : ApiType = {
    name: '',
    gender: '',
    status: '',
}

export const apiSlice = createSlice({
    name: 'api',
    initialState: ApiEmptyState,
    reducers: {
        createApi: (state, action) => {
            return action.payload;
        },
        modifyApi: (state, action) => ({ ...state, ...action.payload }),
        resetApi: () => ApiEmptyState,
    }
})

export const { createApi, modifyApi, resetApi } = apiSlice.actions;

export default apiSlice.reducer;