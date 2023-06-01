import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import { Pagination } from "components/Pagination";
import { PokemonCard } from "components/PokemonCard";

import styles from "./styles.module.scss";

export const PokemonsLayout = ({ pokemonsData, isLoading, errors, page, handlePageChange, addItemToCart, handleLearnMore }) => {
   return (
      <div className={styles.container}>
         <Title title="Pokemons" />

         {errors && <p className={styles.errors}>{errors}</p>}

         {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> :

            <>
               <div className={styles.wrapper}>
                  {pokemonsData?.map(({ id, name, image, price }) => {
                     return (
                        <PokemonCard
                           key={id}
                           id={id}
                           image={image}
                           name={name}
                           price={price}
                           handleLearnMore={handleLearnMore}
                           handleAddToCart={addItemToCart} />
                     );
                  })}
               </div>

               <div className={styles.pagination}>
                  <Pagination page={page} handlePageChange={handlePageChange} />
               </div>
            </>
         }
      </div>
   );
};