import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { usePagination, useScrollTop } from "hooks";
import { pokemonsDataSelector, isPokemonsLoadingSelector, pokemonsErrorsSelector } from "../selectors";
import { getPokemonsThunk } from "../api";
import { PokemonsLayout } from "../components/PokemonsLayout";

export const PokemonsContainer = () => {
   const [page, handlePageChange] = usePagination(1);

   useScrollTop(page);

   const dispatch = useDispatch();

   const pokemonsData = useSelector(pokemonsDataSelector);
   const isLoading = useSelector(isPokemonsLoadingSelector);
   const errors = useSelector(pokemonsErrorsSelector);

   useEffect(() => {
      dispatch(getPokemonsThunk({ page, limit: 24 }));
   }, [page]);

   return (
      <>
         <PokemonsLayout
            pokemonsData={pokemonsData}
            isLoading={isLoading}
            errors={errors}
            page={page}
            handlePageChange={handlePageChange} />
      </>
   );
};