import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { addItemThunk } from "pages/Cart/api/thunks/addItem";
import { changeItemThunk } from "pages/Cart/api/thunks/changeItem";
import { clearCartThunk } from "pages/Cart/api/thunks/clearCart";
import { deleteItemThunk } from "pages/Cart/api/thunks/deleteItem";
import { getItemsThunk } from "pages/Cart/api/thunks/getItems";
import { changedItemIdSelector, cartErrorsSelector, cartItemsSelector, cartQuantitySelector, isCartLoadingSelector, totalAmountSelector, totalPriceSelector, cartEmptySelector } from "pages/Cart/selectors";

export const useCart = () => {
   const dispatch = useDispatch();

   const cartItems = useSelector(cartItemsSelector);
   const cartQuantity = useSelector(cartQuantitySelector);
   const totalPrice = useSelector(totalPriceSelector);
   const totalAmount = useSelector(totalAmountSelector);
   const changedItemId = useSelector(changedItemIdSelector);
   const isCartEmpty = useSelector(cartEmptySelector);
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
      console.log(id);
      dispatch(deleteItemThunk(id));
   }, [dispatch]);

   const clearCart = useCallback((items) => {
      const promises = items.map(({ id }) => dispatch(deleteItemThunk(id)));
      dispatch(clearCartThunk(promises));
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
   };
};