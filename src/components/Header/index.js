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
      <>
         {!isAuthenticated ? (
            <header className={styles.header}>
               <div className={styles.container}>
                  <Link className={styles.header__logo} to={ROUTE_NAMES.HOME}><img src={logoIcon} alt="" /><img src={logo} alt="" /></Link>
                  <div className={styles.header__nav}>
                     <Link className={styles.header__link} to={ROUTE_NAMES.SIGN_UP}>Sign Up</Link>
                     <Link className={styles.header__link} to={ROUTE_NAMES.SIGN_IN}>Sign In</Link>
                  </div>
               </div>
            </header>
         ) : (
            <header className={styles.header}>
               <div className={styles.container}>
                  <Link className={styles.header__logo} to={ROUTE_NAMES.HOME}><img src={logoIcon} alt="" /><img src={logo} alt="" /></Link>
                  <Link className={styles.header__link} to={ROUTE_NAMES.POKEMONS}>Pokemons</Link>
                  <div className={styles.header__ico}>
                     <ProfileButton />
                     <CartBadge cartQuantity={cartQuantity} />
                     {isAuthenticated && <AlertDialog />}
                  </div>
               </div>
            </header>
         )}
      </ >
   );
};