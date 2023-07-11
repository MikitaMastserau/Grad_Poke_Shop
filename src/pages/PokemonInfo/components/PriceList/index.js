import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from "prop-types";

import pokecoinIcon from "static/icons/pokecoinIcon.png";

import styles from "./styles.module.scss";

export const PriceList = ({ id, image, name, price, handleAddToCart, cartItems }) => {
   return (
      <div className={styles.add}>
         <div className={styles.add__price}>
            <img src={pokecoinIcon} alt="" />
            <p>{price}</p>
         </div>
         <div className={styles.add__button}>
            <Button
               size="medium"
               variant="outlined"
               color="warning"
               startIcon={<AddShoppingCartIcon />}
               disableElevation
               onClick={() => handleAddToCart({ id, image, name, price, quantity: 1 })}
               disabled={cartItems.some((item) => item.id === id)}
            >
               Add to Cart
            </Button>
         </div>
      </div>
   );
};

PriceList.propTypes = {
   id: PropTypes.number.isRequired,
   image: PropTypes.string,
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
};