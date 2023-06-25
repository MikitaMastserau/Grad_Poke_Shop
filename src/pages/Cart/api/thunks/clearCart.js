import { createAsyncThunk } from "@reduxjs/toolkit";

export const clearCartThunk = createAsyncThunk("cart/clearCart",
   async (payload, { rejectWithValue }) => {
      try {
         const { data } = await Promise.all(payload);

         return data;
      } catch (error) {
         return rejectWithValue(error.response.data.message);
      };
   }
);