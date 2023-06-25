import { createSlice } from "@reduxjs/toolkit";

import { getPokemonInfoThunk } from "../api";
import { createStatsList } from "../utils/createStatsList";
import { createAbilitiesList } from "../utils/createAbilitiesList";

const initialState = {
   name: "",
   stats: {},
   abilities: [],
   sprites: {},
   isLoading: false,
   errors: null,
};

const pokemonInfoSlice = createSlice({
   name: "pokemonInfo",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getPokemonInfoThunk.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
         })
         .addCase(getPokemonInfoThunk.fulfilled, (state, { payload }) => {
            const { name, stats, abilities, sprites } = payload;

            state.name = name;
            state.stats = createStatsList(stats);
            state.abilities = createAbilitiesList(abilities);
            state.sprites = sprites;
            state.isLoading = false;

         })
         .addCase(getPokemonInfoThunk.rejected, (state, { error }) => {
            state.isLoading = false;
            state.errors = error.message;
         })
   },
});

export default pokemonInfoSlice.reducer;