import { startCase } from "lodash";
import PropTypes from "prop-types";

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

         {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> :
            <div className={styles.container}>
               {errors ? <p className={styles.errors}>{errors}</p> :
                  <>
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
                  </>
               }
            </div>
         }
      </div>
   );
};

PokemonInfoLayout.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   stats: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
   ])).isRequired,
   abilities: PropTypes.objectOf(PropTypes.string).isRequired,
   sprites: PropTypes.arrayOf(PropTypes.string).isRequired,
   types: PropTypes.arrayOf(PropTypes.string).isRequired,
   height: PropTypes.number.isRequired,
   weight: PropTypes.number.isRequired,
   price: PropTypes.number.isRequired,
   addItemToCart: PropTypes.func.isRequired,
   cartItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      _id: PropTypes.string,
   })).isRequired,
   isLoading: PropTypes.bool.isRequired,
   errors: PropTypes.string,
};