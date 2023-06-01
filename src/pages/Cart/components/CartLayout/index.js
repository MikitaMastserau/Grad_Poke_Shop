import { startCase } from "lodash";

import { Title } from "components/Title";
import { QuantityCounter } from "components/QuantityCounter";

import pokecoinIcon from "static/icons/pokecoinIcon.png";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";

export const CartLayout = ({
   cartItems,
   cartQuantity,
   totalPrice,
   totalAmount,
   changedItemId,
   changeItemQuantity,
   deleteItem,
   clearCart,
}) => {
   return (
      <>
         <Title title="Cart" />

         <div className={styles.wrapper}>
            <div className={styles.itemsList}>
               {cartItems.map(({ id, name, image, quantity, price }) => (
                  <div className={styles.item} key={id}>
                     <img src={image} alt="" />
                     <p>{startCase(name)}</p>
                     <QuantityCounter id={id} quantity={quantity} changedItemId={changedItemId} changeItemQuantity={changeItemQuantity} />
                     <div className={styles.price}>
                        <img src={pokecoinIcon} alt="" />
                        <p>{price * quantity}</p>
                     </div>
                     <button onClick={() => deleteItem(id)}>Delete</button>
                  </div>
               ))}
            </div>

            <div>
               <p>Tsotal quantity: {cartQuantity}</p>
               <p>Total price: {totalPrice}</p>
               <p>Total amount: {totalAmount}</p>
               <Button
                  size="medium"
                  variant="contained"
                  color="warning"
                  disableElevation
                  onClick={() => clearCart(cartItems)}
               >
                  Clear Cart
               </Button>
            </div>
         </div>
      </>
   );
};