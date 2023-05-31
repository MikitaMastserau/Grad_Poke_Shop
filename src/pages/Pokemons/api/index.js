import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainApiConfig } from "config/mainApi";

const getPokemonsRequest = ({ page, limit = 24 }) => mainApiConfig.get("/products", {
   params: {
      page,
      limit,
   }
});

export const getPokemonsThunk = createAsyncThunk("pokemons/getPokemons",
   async (body, { rejectWithValue }) => {
      try {
         const response = await getPokemonsRequest(body);

         return response.data;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);