import { createSlice } from "@reduxjs/toolkit";

import { signInThunk } from "../api";

const initialState = {
   profileData: {},
   isAuthenticated: false,
   isLoading: false,
   errors: null,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(signInThunk.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
         })
         .addCase(signInThunk.fulfilled, (state, { payload }) => {
            state.profileData = payload;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.errors = null;
         })
         .addCase(signInThunk.rejected, (state, { payload }) => {
            state.profileData = {};
            state.isLoading = false;
            state.errors = payload;
         })
   },
});

export default authSlice.reducer;