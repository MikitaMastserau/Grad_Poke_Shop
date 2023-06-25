import { useCart } from "hooks";
import { useEffect } from "react";

import { CartLayout } from "../components/CartLayout";

export const CartContainer = () => {
   const {
      cartItems,
      cartQuantity,
      totalPrice,
      totalAmount,
      changedItemId,
      isLoading,
      errors,
      isCartEmpty,
      getCartData,
      changeItemQuantity,
      deleteItem,
      clearCart,
      makeOrder
   } = useCart();

   useEffect(() => {
      getCartData();
   }, []);

   return (
      <>
         <CartLayout
            cartItems={cartItems}
            cartQuantity={cartQuantity}
            totalPrice={totalPrice}
            totalAmount={totalAmount}
            changedItemId={changedItemId}
            isCartEmpty={isCartEmpty}
            isLoading={isLoading}
            errors={errors}
            changeItemQuantity={changeItemQuantity}
            deleteItem={deleteItem}
            clearCart={clearCart}
            makeOrder={makeOrder} />
      </>
   );
};