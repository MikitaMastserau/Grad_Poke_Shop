import { Title } from "components/Title";

import signInIcon from "static/icons/signInIcon.png";
import signUpIcon from "static/icons/signUpIcon.png";

import styles from "./styles.module.scss";

export const WelcomePage = () => {
   return (
      <>
         <div className={styles.wrapper}>
            <Title color="darkorange" title="Welcome to Pokemon Online Store" />
            <hr className={styles.line} />
            <div className={styles.sign}>
               {/* <img src={signInIcon} alt="" /> */}
               <p><a href="sign-in">Log In</a> your account and run to buy tons of Pokemon!</p>
            </div>
            <div className={styles.sign}>
               {/* <img src={signUpIcon} alt="" /> */}
               <p>You still don't have an account?! Quickly go <a href="sign-up">Sign Up</a>!!</p>
            </div>
         </div>
      </>
   )
};