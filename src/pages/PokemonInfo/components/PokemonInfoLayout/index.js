import { startCase } from "lodash";

import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import { SubTitle } from "components/SubTitle";
import { StatsList } from "../StatsList";
import { AbilitiesList } from "../AbilitiesList";

import { STAT_ICON_LIST, ABILITIES_LIST_MAIN_ICON, ABILITIES_ICON_LIST } from "pages/PokemonInfo/config/statsConfig";

import styles from "./styles.module.scss";

export const PokemonInfoLayout = ({ name, stats, abilities, sprites, isLoading, errors }) => {
   return (
      <>
         <Title title="Pokemon Info" />

         {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> :
            <>
               <SubTitle title={startCase(name)} color={"orangered"} />

               <div className={styles.pokemonCard}>
                  <img src={sprites?.other?.["official-artwork"]?.front_default} alt="" />

                  <div className={styles.statList}>
                     {Object.entries(stats).map(([statName, statValue]) => {
                        return (
                           <StatsList key={statName} icon={STAT_ICON_LIST[statName]} statValue={statValue} />
                        );
                     })}
                     <div className={styles.abilitiesWrapper}>
                        <img src={ABILITIES_LIST_MAIN_ICON} alt="" />
                        <div className={styles.abilitiesList}>
                           {abilities.map((abilityName, index) => {
                              return (
                                 <AbilitiesList key={abilityName} abilityName={abilityName} icon={ABILITIES_ICON_LIST[index]} />
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </div>
            </>
         }
         {errors && <p className={styles.errors}>{errors}</p>}
      </>
   );
};