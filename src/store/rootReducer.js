import { combineReducers } from "redux";

import signInReducer from "pages/SignIn/reducers";
import pokemonsReducer from "pages/Pokemons/reducers";
import pokemonInfoReducer from "pages/PokemonInfo/reducers";

export const rootReducer = combineReducers({
   auth: signInReducer,
   pokemons: pokemonsReducer,
   pokemonInfo: pokemonInfoReducer,
});