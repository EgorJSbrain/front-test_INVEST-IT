import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPhotos } from "../api";

export const photosAllRequest = createAsyncThunk(
  'photos/fetchAllPhotos',
  async ({perPage, page}, { rejectWithValue }) => {

    try {
      const response = await fetchPhotos({ perPage, page })

      if (!response) {
        throw new Error('Server error')
      }

      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e)
    }
  }
);
