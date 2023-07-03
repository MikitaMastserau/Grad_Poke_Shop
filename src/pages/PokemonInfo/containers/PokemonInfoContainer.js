import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { isPokemonInfoLoadingSelector, pokemonAbilitiesSelector, pokemonInfoErrorsSelector, pokemonNameSelector, pokemonPriceSelector, pokemonSpritesSelector, pokemonStatsSelector, pokemonTypesSelector } from "../selectors";
import { getPokemonInfoThunk, getPokemonInfoThunkFromApi } from "../api";
import { PokemonInfoLayout } from "../components/PokemonInfoLayout";

export const PokemonInfoContainer = () => {
   const dispatch = useDispatch();
   const { pokemonName } = useParams();

   const name = useSelector(pokemonNameSelector);
   const stats = useSelector(pokemonStatsSelector);
   const abilities = useSelector(pokemonAbilitiesSelector);
   const sprites = useSelector(pokemonSpritesSelector);
   const types = useSelector(pokemonTypesSelector);
   const price = useSelector(pokemonPriceSelector);
   const isLoading = useSelector(isPokemonInfoLoadingSelector);
   const errors = useSelector(pokemonInfoErrorsSelector);

   useEffect(() => {
      dispatch(getPokemonInfoThunk(pokemonName));
   }, [pokemonName, dispatch]);

   useEffect(() => {
      dispatch(getPokemonInfoThunkFromApi(1));
   }, [pokemonName, dispatch]);

   return (
      <>
         <PokemonInfoLayout
            name={name}
            stats={stats}
            abilities={abilities}
            sprites={sprites}
            types={types}
            price={price}
            isLoading={isLoading}
            errors={errors} />
      </>
   );
};