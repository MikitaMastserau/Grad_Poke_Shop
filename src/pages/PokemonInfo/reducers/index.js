import { createSlice } from "@reduxjs/toolkit";

import { getPokemonInfoThunk } from "../api";
import { createStatsList } from "../utils/createStatsList";
import { createAbilitiesList } from "../utils/createAbilitiesList";
import { createTypesList } from "../utils/createTypesList";

const initialState = {
   name: "",
   stats: {},
   abilities: {},
   sprites: {},
   types: [],
   height: 0,
   weight: 0,
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
            const { name, stats, abilities, sprites, types, height, weight, price } = payload;

            state.name = name;
            state.stats = createStatsList(stats);
            state.abilities = createAbilitiesList(abilities);
            state.price = price;
            state.sprites = sprites.other["official-artwork"].front_default;
            state.types = createTypesList(types);
            state.height = height;
            state.weight = weight;
            state.isLoading = false;
            state.errors = null;
         })
         .addCase(getPokemonInfoThunk.rejected, (state, { error }) => {
            state.isLoading = false;
            state.errors = error.message;
         })
   },
});

export default pokemonInfoSlice.reducer;