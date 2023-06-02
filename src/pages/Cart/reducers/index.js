import { getItemsThunk } from "../api/thunks/getItems";
import { addItemThunk } from "../api/thunks/addItem";
import { changeItemThunk } from "../api/thunks/changeItem";
import { deleteItemThunk } from "../api/thunks/deleteItem";
import { clearCartThunk } from "../api/thunks/clearCart";
import { orderThunk } from "../api/thunks/order";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   itemsList: [],
   totalPrice: 0,
   quantity: 0,
   changedItemId: null,
   isLoading: false,
   errors: null,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getItemsThunk.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
         })
         .addCase(getItemsThunk.fulfilled, (state, { payload }) => {
            const { itemsList, totalPrice, quantity } = payload;

            state.itemsList = itemsList;
            state.totalPrice = totalPrice;
            state.quantity = quantity;
            state.isLoading = false;
            state.errors = null;
         })
         .addCase(getItemsThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.errors = payload;
         })

         .addCase(addItemThunk.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
         })
         .addCase(addItemThunk.fulfilled, (state, { payload }) => {
            const { itemsList, totalPrice, quantity } = payload;

            state.itemsList = itemsList;
            state.totalPrice = totalPrice;
            state.quantity = quantity;
            state.isLoading = false;
            state.errors = null;
         })
         .addCase(addItemThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.errors = payload;
         })

         .addCase(changeItemThunk.pending, (state, { meta }) => {
            state.changedItemId = meta.arg.id;
            state.errors = null;
         })
         .addCase(changeItemThunk.fulfilled, (state, { payload }) => {
            const { cartState, updatedItem } = payload;
            const foundItem = state.itemsList.find((item) => item.id === updatedItem.id);

            foundItem.quantity = updatedItem.quantity;
            state.totalPrice = cartState.totalPrice;
            state.changedItemId = null;
            state.errors = null;
         })
         .addCase(changeItemThunk.rejected, (state, { payload }) => {
            state.errors = payload;
         })

         .addCase(deleteItemThunk.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
         })
         .addCase(deleteItemThunk.fulfilled, (state, { payload }) => {
            const { cartState, removedItemId } = payload;

            const foundItemId = state.itemsList.findIndex(({ id }) => id === removedItemId);
            state.itemsList.splice(foundItemId, 1);

            state.totalPrice = cartState.totalPrice;
            state.quantity = cartState.quantity;
            state.isLoading = false;
            state.errors = null;
         })
         .addCase(deleteItemThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.errors = payload;
         })

         .addCase(clearCartThunk.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
         })
         .addCase(clearCartThunk.fulfilled, (state) => {
            state.isLoading = false;
            state.errors = null;
         })
         .addCase(clearCartThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.errors = payload;
         })

         .addCase(orderThunk.pending, (state) => {
            state.isLoading = true;
            state.errors = null;
         })
         .addCase(orderThunk.fulfilled, (state) => {
            state.itemsList = [];
            state.totalPrice = 0;
            state.quantity = 0;
            state.isLoading = false;
            state.errors = null;
         })
         .addCase(orderThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.errors = payload;
         })
   },
});

export default cartSlice.reducer;