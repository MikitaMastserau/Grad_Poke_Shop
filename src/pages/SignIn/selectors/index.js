import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.auth;

export const signInDataSelector = createSelector(baseSelector, (auth) => auth.profileData);
export const isSignInLoadingSelector = createSelector(baseSelector, (auth) => auth.isLoading);
export const isAuthenticatedSelector = createSelector(baseSelector, (auth) => auth.isAuthenticated);
export const signInErrorsSelector = createSelector(baseSelector, (auth) => auth.errors);