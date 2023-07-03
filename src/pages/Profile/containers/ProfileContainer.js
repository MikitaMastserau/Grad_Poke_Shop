import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { isOrdersLoadingSelector, ordersSelector } from "../selectors";
import { ProfileLayout } from "../components/ProfileLayout";
import { getOrderThunk } from "pages/Cart/api/thunks/getOrders";
import { signInDataSelector } from "pages/SignIn/selectors";

export const ProfileContainer = () => {
   const dispatch = useDispatch();

   const profileData = useSelector(signInDataSelector);
   const profileOrders = useSelector(ordersSelector);
   const isLoading = useSelector(isOrdersLoadingSelector);

   useEffect(() => {
      dispatch(getOrderThunk());
   }, [dispatch]);

   return (
      <>
         <ProfileLayout
            profileData={profileData}
            profileOrders={profileOrders}
            isLoading={isLoading} />
      </>
   );
};