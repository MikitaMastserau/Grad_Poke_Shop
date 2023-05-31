import { Link } from "react-router-dom";
import { startCase } from "lodash";

import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import pokecoinIcon from "static/icons/pokecoinIcon.png";
import { Pagination } from "components/Pagination";

import { ROUTE_NAMES } from "routes/routeNames";

import styles from "./styles.module.scss";

export const PokemonsLayout = ({ pokemonsData, isLoading, errors, page, handlePageChange }) => {
   return (
      <div className={styles.container}>
         <Title title="Pokemons" />

         {errors && <p className={styles.errors}>{errors}</p>}

         {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> :

            <div className={styles.wrapper}>
               {pokemonsData?.map(({ name, id, image, price }) => {
                  return (
                     <div key={id} className={styles.pokemonItem}>
                        <Link to={`${ROUTE_NAMES.POKEMONS}/${name}`} >
                           <div className={styles.pokemonLink}>
                              <img src={image} alt="" />
                              <div className={styles.pokemonText}>
                                 <p>{startCase(name)}</p>
                                 <div className={styles.price}>
                                    <img src={pokecoinIcon} alt="" />
                                    <p>{price}</p>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </div>
                  );
               })}
            </div>
         }

         <div className={styles.pagination}>
            <Pagination page={page} handlePageChange={handlePageChange} />
         </div>
      </div>
   );
};