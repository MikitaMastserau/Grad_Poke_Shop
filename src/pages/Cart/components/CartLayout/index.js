import { startCase } from "lodash";

import { Title } from "components/Title";
import { QuantityCounter } from "components/QuantityCounter";

import pokecoinIcon from "static/icons/pokecoinIcon.png";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import { LoadingSpinner } from "components/LoadingSpinner";

export const CartLayout = ({
   cartItems,
   cartQuantity,
   totalPrice,
   totalAmount,
   changedItemId,
   isCartEmpty,
   changeItemQuantity,
   isLoading,
   errors,
   deleteItem,
   clearCart,
   makeOrder,
}) => {
   return (
      <>
         <Title title="Cart" />

         {errors && <p className={styles.errors}>{errors}</p>}

         {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> :

            <div className={styles.container}>
               {isCartEmpty ? (
                  <div className={styles.empty}>
                     <p>Your cart is empty</p>
                     <p>Why? Hurry up and buy pokemons!</p>
                  </div>
               ) : (
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
                              <button className={styles.del} onClick={() => deleteItem(id)}>Delete</button>
                           </div>
                        ))}
                     </div>

                     <div className={styles.prices}>
                        <p>Tsotal quantity: {cartQuantity}</p>
                        <p>Total price: {totalPrice}</p>
                        <p>Total amount: {totalAmount}</p>
                        <Button
                           size="large"
                           variant="outlined"
                           color="warning"
                           disableElevation
                           onClick={() => clearCart(cartItems)}
                        >
                           Clear Cart
                        </Button>
                        <Button
                           size="large"
                           variant="contained"
                           color="warning"
                           disableElevation
                           onClick={() => makeOrder()}
                        >
                           Checkout
                        </Button>
                     </div>
                  </div>
               )}
            </div>
         }
      </>
   );
};