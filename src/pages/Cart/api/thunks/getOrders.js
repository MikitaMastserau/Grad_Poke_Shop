import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../index";

export const getOrderThunk = createAsyncThunk("profile/orders",
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await CartService.getOrders();

         return data;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);