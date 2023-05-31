import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { isAuthenticatedSelector, isSignInLoadingSelector, signInErrorsSelector } from "../selectors";
import { useForm } from "hooks";
import { signInThunk } from "../api";
import { SignInLayout } from "../components/SignInLayout";

import { ROUTE_NAMES } from "routes/routeNames";

export const SignInContainer = () => {
   const dispatch = useDispatch();

   const isAuthenticated = useSelector(isAuthenticatedSelector);
   const isLoading = useSelector(isSignInLoadingSelector);
   const errors = useSelector(signInErrorsSelector);

   const { form, handleChange } = useForm({
      email: "",
      password: "",
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(signInThunk(form));
   };

   const [checked, setChecked] = useState(false);

   const handleCheckboxChange = (event) => {
      setChecked(event.target.checked);
   };

   if (isAuthenticated) {
      return <Navigate to={ROUTE_NAMES.HOME} />
   };

   return (
      <SignInLayout
         form={form}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         checked={checked}
         handleCheckboxChange={handleCheckboxChange}
         isLoading={isLoading}
         errors={errors} />
   );
};