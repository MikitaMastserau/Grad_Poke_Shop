import { createAsyncThunk } from "@reduxjs/toolkit";
import pick from "lodash/pick";
import omit from "lodash/omit";

import { pokemonApiConfig } from "config/pokemonApi";
import { mainApiConfig } from "config/mainApi";

const getPokemonInfoRequest = (pokemonName) => pokemonApiConfig.get(`/pokemon/${pokemonName}`);
const getPokemonInfoRequestFromApi = (id) => mainApiConfig.get(`/products/${id}`);

export const getPokemonInfoThunk = createAsyncThunk("pokemonInfo/getPokemonInfo",
   async (pokemonName, { rejectWithValue }) => {
      try {
         const response = await getPokemonInfoRequest(pokemonName);

         return pick(response.data, ["sprites", "types"]);
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);

export const getPokemonInfoThunkFromApi = createAsyncThunk("pokemonInfo/getPokemonInfoFromApi",
   async (body, { rejectWithValue }) => {
      try {
         const response = await getPokemonInfoRequestFromApi(body);

         return omit(response.data, ["id", "image"]);
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);