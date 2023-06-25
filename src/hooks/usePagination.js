import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const usePagination = (initialPage) => {
   const [params, setParams] = useSearchParams({ page: initialPage, limit: 25 });

   const page = +Object.fromEntries(params).page;

   useEffect(() => {
      setParams({ page, limit: 25 });
   }, []);

   const handlePageChange = useCallback((_, page) => {
      setParams({ page, limit: 25 });
   }, [setParams]);

   return [page, handlePageChange];
};