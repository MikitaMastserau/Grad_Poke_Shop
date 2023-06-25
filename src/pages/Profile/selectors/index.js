import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.profile;

export const ordersSelector = createSelector(baseSelector, (profile) => [...profile.orders].reverse());
export const isOrdersLoadingSelector = createSelector(baseSelector, (profile) => profile.isLoading);
export const errorsSelector = createSelector(baseSelector, (profile) => profile.errors);