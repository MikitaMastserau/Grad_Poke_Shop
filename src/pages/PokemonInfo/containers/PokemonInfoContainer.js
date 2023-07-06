import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useCart, useScrollTop } from "hooks";
import {
   isPokemonInfoLoadingSelector,
   pokemonAbilitiesSelector,
   pokemonHeightSelector,
   pokemonIdSelector,
   pokemonInfoErrorsSelector,
   pokemonNameSelector,
   pokemonPriceSelector,
   pokemonSpritesSelector,
   pokemonStatsSelector,
   pokemonTypesSelector,
   pokemonWeightSelector
} from "../selectors";
import { getPokemonInfoThunk } from "../api";
import { PokemonInfoLayout } from "../components/PokemonInfoLayout";

export const PokemonInfoContainer = () => {
   const dispatch = useDispatch();
   const { pokemonName } = useParams();
   const { addItemToCart, cartItems } = useCart();

   useScrollTop(pokemonName);

   const id = useSelector(pokemonIdSelector);
   const name = useSelector(pokemonNameSelector);
   const stats = useSelector(pokemonStatsSelector);
   const abilities = useSelector(pokemonAbilitiesSelector);
   const sprites = useSelector(pokemonSpritesSelector);
   const types = useSelector(pokemonTypesSelector);
   const height = useSelector(pokemonHeightSelector);
   const weight = useSelector(pokemonWeightSelector);
   const price = useSelector(pokemonPriceSelector);
   const isLoading = useSelector(isPokemonInfoLoadingSelector);
   const errors = useSelector(pokemonInfoErrorsSelector);

   useEffect(() => {
      dispatch(getPokemonInfoThunk(pokemonName));
   }, [pokemonName, dispatch]);

   return (
      <>
         <PokemonInfoLayout
            id={id}
            name={name}
            stats={stats}
            abilities={abilities}
            sprites={sprites}
            types={types}
            height={height}
            weight={weight}
            price={price}
            addItemToCart={addItemToCart}
            cartItems={cartItems}
            isLoading={isLoading}
            errors={errors} />
      </>
   );
};