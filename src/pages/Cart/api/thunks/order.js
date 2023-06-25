import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../index";

export const orderThunk = createAsyncThunk("/order",
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await CartService.order(payload);

         return data;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);