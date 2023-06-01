import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../index";

export const getItemsThunk = createAsyncThunk("cart/getItems",
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await CartService.getItems();

         return data;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);