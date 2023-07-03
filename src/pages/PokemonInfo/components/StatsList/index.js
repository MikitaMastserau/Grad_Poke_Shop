import { startCase } from "lodash";

import { STAT_ICON_LIST } from "pages/PokemonInfo/config/iconsConfig";

import styles from "./styles.module.scss";

export const StatsList = ({ stats }) => {
   return (
      <div className={styles.stats}>
         {Object.entries(stats).map(([statName, statValue]) => {
            return (
               <div className={styles.stats__item} key={statName}>
                  <img src={STAT_ICON_LIST[statName]} alt="" title={startCase(statName)} />
                  <p>{statValue}</p>
               </div>
            );
         })}
      </div>
   );
};