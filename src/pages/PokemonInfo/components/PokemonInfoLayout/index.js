import { startCase } from "lodash";

import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import { SubTitle } from "components/SubTitle";
import { DescriptionList } from "../DescriptionList";
import { PriceList } from "../PriceList";
import { StatsList } from "../StatsList";
import { AbilitiesList } from "../AbilitiesList";

import styles from "./styles.module.scss";

export const PokemonInfoLayout = ({
   id,
   name,
   stats,
   abilities,
   sprites,
   types,
   height,
   weight,
   price,
   addItemToCart,
   cartItems,
   isLoading,
   errors
}) => {
   return (
      <div className={styles.wrapper}>
         <Title title="Pokemon Info" />

         {errors && <p className={styles.errors}>{errors}</p>}

         {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> :
            <div className={styles.container}>
               <SubTitle title={startCase(name)} color={"orangered"} />
               <div className={styles.info}>
                  <img className={styles.info__image} src={sprites[0]} alt="" />
                  <div className={styles.info__panel}>
                     <DescriptionList types={types} height={height} weight={weight} />
                     <PriceList id={id} image={sprites[1]} name={name} price={price} handleAddToCart={addItemToCart} cartItems={cartItems} />
                  </div>
                  <StatsList stats={stats} />
                  <AbilitiesList abilities={abilities} />
               </div>
            </div>
         }
      </div>
   );
};