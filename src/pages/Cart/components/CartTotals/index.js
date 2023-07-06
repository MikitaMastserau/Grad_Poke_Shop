import { Button } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';

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