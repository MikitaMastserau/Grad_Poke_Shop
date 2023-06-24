import { SubTitle } from "components/SubTitle";

import signInIcon from "static/icons/signInIcon.png";
import signUpIcon from "static/icons/signUpIcon.png";

import styles from "./styles.module.scss";

export const WelcomePage = () => {
   return (
      <>
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
         </div>
      </>
   )
};