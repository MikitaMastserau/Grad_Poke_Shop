import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useCart } from "hooks";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";

export const MainLayout = ({ children }) => {
   const { getCartData } = useCart();
   const isAuthenticated = useSelector(isAuthenticatedSelector);

   useEffect(() => {
      if (isAuthenticated) {
         getCartData();
      }
   }, [isAuthenticated]);

   return (
      <div>
         <Header />
         {children}
         <Footer />
      </div>
   );
};