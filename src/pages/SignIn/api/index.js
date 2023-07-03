import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainApiConfig } from "config/mainApi";
import LocalStorageService from "services/LocalStorageService";

export const signInRequest = (body) => mainApiConfig.post("/auth/signIn", body);

export const signInThunk = createAsyncThunk("auth/signIn",
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await signInRequest(payload);

         const { accessToken, ...profileData } = data;

         LocalStorageService.saveToken(accessToken);

         return profileData;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);