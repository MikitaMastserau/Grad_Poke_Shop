import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { changedItemIdSelector, cartErrorsSelector, cartItemsSelector, cartQuantitySelector, isCartLoadingSelector, totalAmountSelector, totalPriceSelector, cartEmptySelector } from "pages/Cart/selectors";
import { customerIdSelector } from "pages/SignIn/selectors";
import { addItemThunk } from "pages/Cart/api/thunks/addItem";
import { changeItemThunk } from "pages/Cart/api/thunks/changeItem";
import { clearCartThunk } from "pages/Cart/api/thunks/clearCart";
import { deleteItemThunk } from "pages/Cart/api/thunks/deleteItem";
import { getItemsThunk } from "pages/Cart/api/thunks/getItems";
import { orderThunk } from "pages/Cart/api/thunks/order";

export const useCart = () => {
   const dispatch = useDispatch();

   const cartItems = useSelector(cartItemsSelector);
   const cartQuantity = useSelector(cartQuantitySelector);
   const totalPrice = useSelector(totalPriceSelector);
   const totalAmount = useSelector(totalAmountSelector);
   const changedItemId = useSelector(changedItemIdSelector);
   const isCartEmpty = useSelector(cartEmptySelector);
   const customerId = useSelector(customerIdSelector);
   const isLoading = useSelector(isCartLoadingSelector);
   const errors = useSelector(cartErrorsSelector);

   const getCartData = useCallback(() => {
      dispatch(getItemsThunk());
   }, [dispatch]);

   const addItemToCart = useCallback((itemData) => {
      dispatch(addItemThunk(itemData));
   }, []);

   const changeItemQuantity = useCallback((payload) => {
      dispatch(changeItemThunk(payload));
   }, [dispatch]);

   const deleteItem = useCallback((id) => {
      dispatch(deleteItemThunk(id));
   }, [dispatch]);

   const clearCart = useCallback((items) => {
      const promises = items.map(({ id }) => dispatch(deleteItemThunk(id)));
      dispatch(clearCartThunk(promises));
   }, [dispatch]);

   const makeOrder = useCallback(() => {
      dispatch(orderThunk({ customerId, totalPrice, itemsList: cartItems }));
   }, [dispatch]);

   return {
      cartItems,
      cartQuantity,
      totalPrice,
      totalAmount,
      changedItemId,
      isLoading,
      errors,
      isCartEmpty,
      getCartData,
      addItemToCart,
      changeItemQuantity,
      deleteItem,
      clearCart,
      makeOrder,
   };
};