import PropTypes from "prop-types";

import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import { Errors } from "components/Errors";
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
         <div className={styles.container}>
            {isLoading ? <LoadingSpinner /> :
               <>
                  {errors ? <Errors errors={errors} /> :
                     <>
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
                     </>
                  }
               </>
            }
         </div>
      </div >
   );
};

CartLayout.propTypes = {
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
   changedItemId: PropTypes.number,
   isCartEmpty: PropTypes.bool.isRequired,
   changeItemQuantity: PropTypes.func.isRequired,
   deleteItem: PropTypes.func.isRequired,
   clearCart: PropTypes.func.isRequired,
   makeOrder: PropTypes.func.isRequired,
   isLoading: PropTypes.bool.isRequired,
   errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
   ]),
};