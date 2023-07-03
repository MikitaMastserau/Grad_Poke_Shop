import { ABILITIES_ICON_LIST } from "pages/PokemonInfo/config/iconsConfig";
import abilitiesListIcon from "static/icons/abilitiesListIcon.png";

import styles from "./styles.module.scss";

export const AbilitiesList = ({ abilities }) => {
   return (
      <div className={styles.abils}>
         <img className={styles.abils__image} src={abilitiesListIcon} alt="" title="Abilities" />
         <div className={styles.abils__list}>
            {abilities.map((abilityName, index) => {
               return (
                  <div className={styles.abils__list__item} key={abilityName}>
                     <img src={ABILITIES_ICON_LIST[index]} alt="" />
                     <p>{abilityName}</p>
                  </div>
               );
            })}
         </div>
      </div>
   );
};