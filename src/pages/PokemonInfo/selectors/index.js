import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.pokemonInfo;

export const pokemonNameSelector = createSelector(baseSelector, (info) => info.name);
export const pokemonStatsSelector = createSelector(baseSelector, (info) => info.stats);
export const pokemonAbilitiesSelector = createSelector(baseSelector, (info) => info.abilities);
export const pokemonSpritesSelector = createSelector(baseSelector, (info) => info.sprites);
export const pokemonTypesSelector = createSelector(baseSelector, (info) => info.types);
export const pokemonHeightSelector = createSelector(baseSelector, (info) => info.height);
export const pokemonWeightSelector = createSelector(baseSelector, (info) => info.weight);
export const pokemonPriceSelector = createSelector(baseSelector, (info) => info.price);
export const isPokemonInfoLoadingSelector = createSelector(baseSelector, (info) => info.isLoading);
export const pokemonInfoErrorsSelector = createSelector(baseSelector, (info) => info.errors);