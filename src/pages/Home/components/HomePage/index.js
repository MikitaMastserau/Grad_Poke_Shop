import { Title } from "components/Title";

import homeIcon from "static/icons/homeIcon.png";

import styles from "./styles.module.scss";

export const HomePage = () => {
   return (
      <>
         <div className={styles.accWrapper}>
            <Title title="Home Page" />
            <h2>WHO ARE POKEMONS?</h2>
            <p>Pokémon are creatures of all shapes and sizes, living in nature next to people. Most Pokémon they can't speak and can only say their name.</p>
            <img src={homeIcon} alt="" />
         </div>
      </>
   )
};