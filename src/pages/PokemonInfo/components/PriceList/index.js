import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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