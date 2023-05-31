import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.pokemons;

export const pokemonsDataSelector = createSelector(baseSelector, (pokemons) => pokemons.data);
export const isPokemonsLoadingSelector = createSelector(baseSelector, (pokemons) => pokemons.isLoading);
export const pokemonsErrorsSelector = createSelector(baseSelector, (pokemons) => pokemons.errors);