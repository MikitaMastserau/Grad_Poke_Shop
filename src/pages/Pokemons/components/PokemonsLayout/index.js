import PropTypes from "prop-types";

import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import { Errors } from "components/Errors";
import { Pagination } from "components/Pagination";
import { PokemonCard } from "components/PokemonCard";

import styles from "./styles.module.scss";

export const PokemonsLayout = ({
   pokemonsData,
   page,
   handlePageChange,
   addItemToCart,
   cartItems,
   handleLearnMore,
   isLoading,
   errors,
}) => {
   return (
      <div className={styles.wrapper}>
         <Title title="Pokemons" />

         <div className={styles.container}>
            {isLoading ? <LoadingSpinner /> :
               <>
                  {errors ? <Errors errors={errors} /> :
                     <>
                        {pokemonsData?.map(({ id, name, image, price }) => {
                           return (
                              <PokemonCard
                                 key={id}
                                 id={id}
                                 image={image}
                                 name={name}
                                 price={price}
                                 handleAddToCart={addItemToCart}
                                 cartItems={cartItems}
                                 handleLearnMore={handleLearnMore} />
                           );
                        })}

                        <div className={styles.pagination}>
                           <Pagination page={page} handlePageChange={handlePageChange} />
                        </div>
                     </>
                  }
               </>
            }
         </div>
      </div>
   );
};

PokemonsLayout.propTypes = {
   pokemonsData: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
   })).isRequired,
   page: PropTypes.number.isRequired,
   handlePageChange: PropTypes.func.isRequired,
   addItemToCart: PropTypes.func.isRequired,
   cartItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      _id: PropTypes.string,
   })).isRequired,
   handleLearnMore: PropTypes.func.isRequired,
   isLoading: PropTypes.bool.isRequired,
   errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
   ]),
};