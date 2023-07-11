import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { errorsSelector, isOrdersLoadingSelector, ordersSelector } from "../selectors";
import { ProfileLayout } from "../components/ProfileLayout";
import { getOrderThunk } from "pages/Cart/api/thunks/getOrders";
import { signInDataSelector } from "pages/SignIn/selectors";

export const ProfileContainer = () => {
   const dispatch = useDispatch();

   const profileData = useSelector(signInDataSelector);
   const profileOrders = useSelector(ordersSelector);
   const isLoading = useSelector(isOrdersLoadingSelector);
   const errors = useSelector(errorsSelector);

   useEffect(() => {
      dispatch(getOrderThunk());
   }, [dispatch]);

   return (
      <>
         <ProfileLayout
            profileData={profileData}
            profileOrders={profileOrders}
            isLoading={isLoading}
            errors={errors} />
      </>
   );
};