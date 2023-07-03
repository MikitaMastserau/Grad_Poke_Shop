import { startCase } from "lodash";

import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import { SubTitle } from "components/SubTitle";
import { StatsList } from "../StatsList";
import { AbilitiesList } from "../AbilitiesList";
import { TypesList } from "../TypesList";

import styles from "./styles.module.scss";

export const PokemonInfoLayout = ({ name, stats, abilities, sprites, types, price, isLoading, errors }) => {
   return (
      <div className={styles.wrapper}>
         <Title title="Pokemon Info" />

         {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> :
            <div className={styles.container}>
               <div className={styles.card}>
                  <SubTitle title={startCase(name)} color={"orangered"} />
                  <img className={styles.card__image} src={sprites} alt="" />
               </div>

               <StatsList stats={stats} />
               <AbilitiesList abilities={abilities} />
               <TypesList types={types} />
            </div>
         }

         {errors && <p className={styles.errors}>{errors}</p>}
      </div>
   );
};