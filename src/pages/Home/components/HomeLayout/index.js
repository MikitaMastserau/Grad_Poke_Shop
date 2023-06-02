import { Title } from "components/Title";
import { SubTitle } from "components/SubTitle";

import signInIcon from "static/icons/signInIcon.png";
import signUpIcon from "static/icons/signUpIcon.png";

import homeIcon from "static/icons/homeIcon.png";

import styles from "./styles.module.scss";

export const HomeLayout = ({ isAuthenticated }) => {
   return (
      <>
         {!isAuthenticated ?
            <div className={styles.wrapper}>
               <SubTitle color="orangered" title="Welcome to Pokemon Online Store" />
               <div className={styles.sign}>
                  <img src={signInIcon} alt="" />
                  <p>Log In your account and run to buy tons of Pokemon!</p>
               </div>
               <div className={styles.sign}>
                  <img src={signUpIcon} alt="" />
                  <p>You still don't have an account? Quickly go Sign Up!</p>
               </div>
            </div> :
            <div className={styles.accWrapper}>
               <Title title="Home Page" />
               <h2>WHO ARE POKEMONS?</h2>
               <p>Pokémon are creatures of all shapes and sizes, living in nature next to people. Most Pokémon they can't speak and can only say their name.</p>
               <img src={homeIcon} alt="" />
            </div>
         }
      </>
   )
};