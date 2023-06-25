import { Title } from "components/Title";

import styles from "./styles.module.scss";

export const WelcomePage = () => {
   return (
      <>
         <div className={styles.wrapper}>
            <Title title="Welcome to Pokemon Online Store" />
            <hr className={styles.line} />
            <div className={styles.sign}>
               <p><a href="sign-in">Log In</a> your account and run to buy tons of Pokemon!</p>
            </div>
            <div className={styles.sign}>
               <p>You still don't have an account?! Quickly go <a href="sign-up">Sign Up</a>!!</p>
            </div>
         </div>
      </>
   )
};