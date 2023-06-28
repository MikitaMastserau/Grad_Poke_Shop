import { useSelector } from "react-redux";

import { isAuthenticatedSelector } from "pages/SignIn/selectors";

import telegramIcon from "static/icons/telegramIcon.svg";
import linkedInIcon from "static/icons/linkedinIcon.svg";
import githubIcon from "static/icons/githubIcon.svg";

import styles from "./styles.module.scss";

export const Footer = () => {
   const isAuthenticated = useSelector(isAuthenticatedSelector);

   return (
      <>
         <footer className={styles.footer}>
            <div className={styles.container}>
               <p>Pokémon and Pokémon character names are trademarks of Nintendo.</p>
               {isAuthenticated &&
                  <div className={styles.footer__info}>
                     <a href="https://t.me/MikitaMastserau" target="_blank" rel="noreferrer"><img src={telegramIcon} alt="" /></a>
                     <a href="https://www.linkedin.com/in/mikita-mastserau" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="" /></a>
                     <a href="https://github.com/MikitaMastserau" target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /></a>
                  </div>
               }
               <div className={styles.footer__info}>
                  <p><time dateTime="2023">2023</time></p><address>Planet Earth</address>
               </div>
            </div>
         </footer>
      </>
   );
};