import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import { EmptyCart } from "../EmptyCart";
import { CartItems } from "../CartItems";
import { CartTotals } from "../CartTotals";

import styles from "./styles.module.scss";

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
   const stylesForCover = (styles.cover) + " " + (((cartQuantity === 1) && styles.oneItem) || ((cartQuantity === 2) && styles.twoItems));

   return (
      <div className={styles.wrapper}>
         <Title title="Cart" />

         {errors && <p className={styles.errors}>{errors}</p>}

         {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> :

            <div className={styles.container}>
               {isCartEmpty ? (
                  <EmptyCart />
               ) : (
                  <div className={stylesForCover}>
                     <CartItems
                        cartItems={cartItems}
                        changedItemId={changedItemId}
                        changeItemQuantity={changeItemQuantity}
                        deleteItem={deleteItem}
                     />

                     <CartTotals
                        cartItems={cartItems}
                        cartQuantity={cartQuantity}
                        totalPrice={totalPrice}
                        totalAmount={totalAmount}
                        clearCart={clearCart}
                        makeOrder={makeOrder}
                     />
                  </div>
               )}
            </div>
         }
      </div>
   );
};