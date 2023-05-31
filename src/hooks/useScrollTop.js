import { useCallback, useEffect } from "react";

export const useScrollTop = (spectatedValue) => {
   const scrollTop = useCallback(() => {
      window.scroll({
         behavior: "smooth",
         top: 0,
      });
   }, []);

   useEffect(() => {
      if (spectatedValue) {
         scrollTop();
      };
   }, [spectatedValue]);

   return scrollTop;
};