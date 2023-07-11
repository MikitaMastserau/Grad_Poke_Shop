import { Button } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import PropTypes from "prop-types";

import { ClearCartDialog } from "../ClearCartDialog";

import pokecoinIcon from "static/icons/pokecoinIcon.png";

import styles from "./styles.module.scss";

export const CartTotals = ({ cartItems, cartQuantity, totalPrice, totalAmount, clearCart, makeOrder }) => {
   return (
      <div className={styles.totals}>
         <p className={styles.totals__item}>Total quantity: {cartQuantity}</p>
         <p className={styles.totals__item}>Total amount: {totalAmount}</p>
         <p className={styles.totals__item}>Total price: {totalPrice} <img src={pokecoinIcon} alt="" /></p>
         <ClearCartDialog cartItems={cartItems} clearCart={clearCart} />
         <Button
            size="large"
            variant="contained"
            color="warning"
            disableElevation
            startIcon={<PaymentIcon />}
            onClick={() => makeOrder()}
         >
            Checkout
         </Button>
      </div>
   )
};

CartTotals.propTypes = {
   cartItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      _id: PropTypes.string,
   })).isRequired,
   cartQuantity: PropTypes.number.isRequired,
   totalPrice: PropTypes.number.isRequired,
   totalAmount: PropTypes.number.isRequired,
   clearCart: PropTypes.func.isRequired,
   makeOrder: PropTypes.func.isRequired,
};