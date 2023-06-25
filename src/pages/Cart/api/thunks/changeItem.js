import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../index";

export const changeItemThunk = createAsyncThunk("cart/changeItem",
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await CartService.changeItem({
            quantity: payload.quantity,
            id: payload.id,
         });

         return data;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);