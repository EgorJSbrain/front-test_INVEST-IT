import { createSlice } from "@reduxjs/toolkit";
import { photosAllRequest } from "../actions/photos";

const initialState = {
  list: [],
  total: 0,
  isLoading: false,
  error: '',
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: {
    [photosAllRequest.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.list = [...state.list, ...action.payload.images];
      state.total = action.payload.total;
    },
    [photosAllRequest.pending.type]: (state) => {
      state.isLoading = true;
    },
    [photosAllRequest.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  }
});

export default appSlice.reducer;
