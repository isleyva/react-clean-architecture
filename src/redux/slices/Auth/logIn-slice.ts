import { createSlice } from "@reduxjs/toolkit";
import { ApiType } from "../../../models/api.type";

export const ApiEmptyState : ApiType = {
    id: 0,
    name: '',
    gender: '',
    status: '',
}

export const apiSlice = createSlice({
    name: 'api',
    initialState: ApiEmptyState,
    reducers: {
        createApi: (state, action) => {
            const response = action.payload
            return response;
        },
        modifyApi: (state, action) => ({ ...state, ...action.payload }),
        resetApi: () => ApiEmptyState,
    }
})

export const { createApi, modifyApi, resetApi } = apiSlice.actions;

export default apiSlice.reducer;