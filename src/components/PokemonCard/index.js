import { startCase } from "lodash";
import Button from '@mui/material/Button';

import pokecoinIcon from "static/icons/pokecoinIcon.png";

import styles from "./styles.module.scss";

export const PokemonCard = ({ id, image, name, price, handleAddToCart, handleLearnMore }) => {
   return (
      <div className={styles.card}>
         <img className={styles.card__image} src={image} alt="" />
         <div className={styles.card__text}>
            <p>{startCase(name)}</p>
            <div className={styles.card__text__price}>
               <img src={pokecoinIcon} alt="" />
               <p>{price}</p>
            </div>
         </div>
         <div className={styles.card__buttons}>
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

