import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { AlertDialog } from "components/Dialog";
import { CartBadge } from "components/CartBadge";
import { useCart } from "hooks";

import { ROUTE_NAMES } from "routes/routeNames";

import styles from "./styles.module.scss";

export const Header = () => {
   const isAuthenticated = useSelector(isAuthenticatedSelector);

   const { cartQuantity } = useCart();

   return (
      <div className={styles.wrapper}>
         {isAuthenticated && <AlertDialog />}

         {!isAuthenticated ? (
            <>
               <Link className={styles.navLink} to={ROUTE_NAMES.HOME}>Home Page</Link>
               <Link className={styles.navLink} to={ROUTE_NAMES.SIGN_UP}>Sign Up</Link>
               <Link className={styles.navLink} to={ROUTE_NAMES.SIGN_IN}>Sign In</Link>
            </>
         ) : (
            <>
               <Link className={styles.navLink} to={ROUTE_NAMES.HOME}>Home Page</Link>
               <Link className={styles.navLink} to={ROUTE_NAMES.POKEMONS}>Pokemons</Link>

               <CartBadge cartQuantity={cartQuantity} />
            </>
         )}
      </div>
   );
};