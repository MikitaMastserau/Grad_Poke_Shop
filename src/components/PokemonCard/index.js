import { startCase } from "lodash";
import Button from '@mui/material/Button';

import pokecoinIcon from "static/icons/pokecoinIcon.png";

import styles from "./styles.module.scss";

export const PokemonCard = ({ id, image, name, price, handleAddToCart, handleLearnMore }) => {
   return (
      <div className={styles.pokemonCard}>
         <img src={image} alt="" />
         <div className={styles.pokemonText}>
            <p>{startCase(name)}</p>
            <div className={styles.price}>
               <img src={pokecoinIcon} alt="" />
               <p>{price}</p>
            </div>
         </div>
         <div className={styles.buttons}>
            <Button
               size="small"
               variant="contained"
               color="warning"
               disableElevation
               onClick={() => handleAddToCart({ id, image, name, price, quantity: 1 })}
            >
               Add to Cart
            </Button>
            <Button
               size="small"
               variant="outlined"
               color="warning"
               disableElevation
               onClick={() => handleLearnMore(name)}
            >
               Learn More
            </Button>
         </div>
      </div>
   );
};

