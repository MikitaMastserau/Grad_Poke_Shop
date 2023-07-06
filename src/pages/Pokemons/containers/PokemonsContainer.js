import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useCart, usePagination, useScrollTop } from "hooks";
import { pokemonsDataSelector, isPokemonsLoadingSelector, pokemonsErrorsSelector } from "../selectors";
import { getPokemonsThunk } from "../api";
import { PokemonsLayout } from "../components/PokemonsLayout";

import { ROUTE_NAMES } from "routes/routeNames";

export const PokemonsContainer = () => {
   const [page, handlePageChange] = usePagination(1);
   const { addItemToCart, cartItems } = useCart();

   useScrollTop(page);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const pokemonsData = useSelector(pokemonsDataSelector);
   const isLoading = useSelector(isPokemonsLoadingSelector);
   const errors = useSelector(pokemonsErrorsSelector);

   useEffect(() => {
      dispatch(getPokemonsThunk({ page, limit: 24 }));
   }, [page, dispatch]);

   const handleLearnMore = (name) => {
      return navigate(`${ROUTE_NAMES.POKEMONS}/${name}`);
   };

   return (
      <>
         <PokemonsLayout
            pokemonsData={pokemonsData}
            isLoading={isLoading}
            errors={errors}
            page={page}
            handlePageChange={handlePageChange}
            addItemToCart={addItemToCart}
            cartItems={cartItems}
            handleLearnMore={handleLearnMore} />
      </>
   );
};