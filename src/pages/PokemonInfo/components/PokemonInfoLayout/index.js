import { startCase } from "lodash";

import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import { SubTitle } from "components/SubTitle";
import { StatsList } from "../StatsList";
import { AbilitiesList } from "../AbilitiesList";
import { DescriptionList } from "../DescriptionList";

import styles from "./styles.module.scss";

export const PokemonInfoLayout = ({ name, stats, abilities, sprites, types, height, weight, price, isLoading, errors }) => {
   return (
      <div className={styles.wrapper}>
         <Title title="Pokemon Info" />

         {errors && <p className={styles.errors}>{errors}</p>}

         {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> :
            <div className={styles.container}>
               <SubTitle title={startCase(name)} color={"orangered"} />
               <div className={styles.card}>
                  <img className={styles.card__image} src={sprites} alt="" />
                  <DescriptionList types={types} height={height} weight={weight} />
                  <StatsList stats={stats} />
                  <AbilitiesList abilities={abilities} />
               </div>
            </div>
         }
      </div>
   );
};