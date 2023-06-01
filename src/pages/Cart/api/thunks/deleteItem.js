import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../index";

export const deleteItemThunk = createAsyncThunk("cart/deleteItem",
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await CartService.deleteItem(payload);

         console.log(payload);

         return data;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);