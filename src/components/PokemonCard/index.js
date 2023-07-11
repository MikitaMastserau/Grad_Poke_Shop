import { startCase } from "lodash";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

import pokecoinIcon from "static/icons/pokecoinIcon.png";

import styles from "./styles.module.scss";

export const PokemonCard = ({ id, image, name, price, handleAddToCart, cartItems, handleLearnMore }) => {
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
               disabled={cartItems.some((item) => item.id === id)}
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

PokemonCard.propTypes = {
   id: PropTypes.number.isRequired,
   image: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   handleAddToCart: PropTypes.func.isRequired,
   cartItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      _id: PropTypes.string,
   })).isRequired,
   handleLearnMore: PropTypes.func.isRequired,
};