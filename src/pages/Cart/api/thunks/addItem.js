import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../index";

export const addItemThunk = createAsyncThunk("cart/addItem",
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await CartService.addItem(payload);

         return data;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);