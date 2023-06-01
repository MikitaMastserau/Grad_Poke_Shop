import { createSlice } from "@reduxjs/toolkit";

import { getPokemonsThunk } from "../api";

const initialState = {
   data: [],
   isLoading: false,
   errors: null,
};

const pokemonsSlice = createSlice({
   name: "pokemons",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getPokemonsThunk.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
         })
         .addCase(getPokemonsThunk.fulfilled, (state, { payload }) => {
            state.data = payload;
            state.isLoading = false;
            state.errors = null;
         })
         .addCase(getPokemonsThunk.rejected, (state, { payload }) => {
            state.data = [];
            state.isLoading = false;
            state.errors = payload;
         })
   },
});

export default pokemonsSlice.reducer;