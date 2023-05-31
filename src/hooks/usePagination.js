import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const usePagination = (initialPage) => {
   const [params, setParams] = useSearchParams({ page: initialPage, limit: 24 });

   const page = +Object.fromEntries(params).page;

   useEffect(() => {
      setParams({ page, limit: 24 });
   }, []);

   const handlePageChange = useCallback((_, page) => {
      setParams({ page, limit: 24 });
   }, [setParams]);

   return [page, handlePageChange];
};