import { createSlice } from "@reduxjs/toolkit";

import { getPokemonInfoThunk, getPokemonInfoThunkFromApi } from "../api";
import { createStatsList } from "../utils/createStatsList";
import { createAbilitiesList } from "../utils/createAbilitiesList";
import { createTypesList } from "../utils/createTypesList";

const initialState = {
   name: "",
   stats: {},
   abilities: [],
   sprites: {},
   types: [],
   price: 0,
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
            const { sprites, types } = payload;

            state.sprites = sprites.other["official-artwork"].front_default;
            state.types = createTypesList(types);
            state.isLoading = false;
            state.errors = null;
         })
         .addCase(getPokemonInfoThunk.rejected, (state, { error }) => {
            state.isLoading = false;
            state.errors = error.message;
         })

         .addCase(getPokemonInfoThunkFromApi.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
         })
         .addCase(getPokemonInfoThunkFromApi.fulfilled, (state, { payload }) => {
            const { name, stats, abilities, price } = payload;

            console.log(payload);

            state.name = name;
            state.stats = createStatsList(stats);
            state.abilities = createAbilitiesList(abilities);
            state.price = price;
            state.isLoading = false;
            state.errors = null;
         })
         .addCase(getPokemonInfoThunkFromApi.rejected, (state, { error }) => {
            state.isLoading = false;
            state.errors = error.message;
         })
   },
});

export default pokemonInfoSlice.reducer;