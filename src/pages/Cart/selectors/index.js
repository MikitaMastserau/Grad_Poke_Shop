import { createSelector } from "@reduxjs/toolkit";

export const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(cartSelector, (cart) => cart.itemsList);
export const totalPriceSelector = createSelector(cartSelector, (cart) => cart.totalPrice);
export const cartQuantitySelector = createSelector(cartSelector, (cart) => cart.quantity);
export const isCartLoadingSelector = createSelector(cartSelector, (cart) => cart.isLoading);
export const cartErrorsSelector = createSelector(cartSelector, (cart) => cart.errors);
export const totalAmountSelector = createSelector(cartItemsSelector, (items) => {
   return items.reduce((result, { quantity }) => result + quantity, 0);
});
export const changedItemIdSelector = createSelector(cartSelector, (cart) => cart.changedItemId);
export const cartEmptySelector = createSelector(cartItemsSelector, (items) => items.length === 0);