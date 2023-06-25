import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { AlertDialog } from "components/Dialog";
import { CartBadge } from "components/CartBadge";
import { useCart } from "hooks";
import { ProfileButton } from "components/ProfileButton";

import logoIcon from "static/icons/logoIcon.ico";
import logo from "static/icons/logo.png";
import { ROUTE_NAMES } from "routes/routeNames";

import styles from "./styles.module.scss";

export const Header = () => {
   const isAuthenticated = useSelector(isAuthenticatedSelector);

   const { cartQuantity } = useCart();

   return (
      <div>
         {!isAuthenticated ? (
            <div className={styles.wrapper}>
               <Link className={styles.logoLink} to={ROUTE_NAMES.HOME}><img src={logoIcon} alt="" /><img src={logo} alt="" /></Link>
               <div className={styles.sign}>
                  <Link className={styles.navLink} to={ROUTE_NAMES.SIGN_UP}>Sign Up</Link>
                  <Link className={styles.navLink} to={ROUTE_NAMES.SIGN_IN}>Sign In</Link>
               </div>
            </div>
         ) : (
            <div className={styles.wrapper}>
               <Link className={styles.logoLink} to={ROUTE_NAMES.HOME}>Home Page</Link>
               <Link className={styles.navLink} to={ROUTE_NAMES.POKEMONS}>Pokemons</Link>

               <div className={styles.icons}>
                  <ProfileButton />
                  <CartBadge cartQuantity={cartQuantity} />
                  {isAuthenticated && <AlertDialog />}
               </div>
            </div>
         )}
      </div >
   );
};