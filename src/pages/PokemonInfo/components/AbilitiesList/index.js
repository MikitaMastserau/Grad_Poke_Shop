import { ABILITIES_ICON_LIST } from "pages/PokemonInfo/config/iconsConfig";
import abilitiesListIcon from "static/icons/abilitiesListIcon.png";

import styles from "./styles.module.scss";

export const AbilitiesList = ({ abilities }) => {
   return (
      <div className={styles.wrapper}>
         <img className={styles.image} src={abilitiesListIcon} alt="" title="Abilities" />
         <div className={styles.abils}>
            {Object.entries(abilities).map(([abilityName, abilityDescription], index) => {
               return (
                  <div className={styles.abils__item} key={abilityName}>
                     <div>
                        <img src={ABILITIES_ICON_LIST[index]} alt="" />
                        <p>{abilityName}</p>
                     </div>
                     <p>{abilityDescription}</p>
                  </div>
               );
            })}
         </div>
      </div>
   );
};