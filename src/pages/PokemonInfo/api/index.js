import { createAsyncThunk } from "@reduxjs/toolkit";
import pick from "lodash/pick";

import { pokemonApiConfig } from "config/pokemonApi";

const getPokemonInfoRequest = (pokemonName) => pokemonApiConfig.get(`/pokemon/${pokemonName}`);

export const getPokemonInfoThunk = createAsyncThunk("pokemonInfo/getPokemonInfo",
   async (pokemonName) => {
      const response = await getPokemonInfoRequest(pokemonName);

      return pick(response.data, ["name", "stats", "abilities", "sprites"]);
   }
);