import { createSlice } from "@reduxjs/toolkit";

import { getPokemonInfoThunk } from "../api";
import { createStatsList } from "../utils/createStatsList";
import { createAbilitiesList } from "../utils/createAbilitiesList";
import { createSpritesList } from "../utils/createSpritesList";
import { createTypesList } from "../utils/createTypesList";

const initialState = {
   id: 0,
   name: "",
   stats: {},
   abilities: {},
   sprites: [],
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
            const { id, name, stats, abilities, sprites, types, height, weight, price } = payload;

            state.id = id;
            state.name = name;
            state.stats = createStatsList(stats);
            state.abilities = createAbilitiesList(abilities);
            state.sprites = createSpritesList(sprites);
            state.types = createTypesList(types);
            state.height = height;
            state.weight = weight;
            state.price = price;
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