import { createAsyncThunk } from "@reduxjs/toolkit";
import pick from "lodash/pick";
import omit from "lodash/omit";

import { pokemonApiConfig } from "config/pokemonApi";
import { mainApiConfig } from "config/mainApi";

const getPokemonInfoRequestByName = (pokemonName) => pokemonApiConfig.get(`/pokemon/${pokemonName}`);
const getPokemonInfoRequestById = (pokemonId) => mainApiConfig.get(`/products/${pokemonId}`);

export const getPokemonInfoThunk = createAsyncThunk("pokemonInfo/getPokemonInfo",
   async (pokemonName, { rejectWithValue }) => {
      try {
         const responseByName = await getPokemonInfoRequestByName(pokemonName);

         const fieldsByName = pick(responseByName.data, ["id", "sprites", "types", "height", "weight"]);

         const pokemonId = responseByName.data.id;

         const responseById = await getPokemonInfoRequestById(pokemonId);

         const fieldsById = omit(responseById.data, ["id", "image"]);

         const response = Object.assign(fieldsByName, fieldsById);

         return response;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   },
);