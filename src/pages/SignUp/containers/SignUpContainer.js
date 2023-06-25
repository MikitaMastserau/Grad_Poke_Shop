import { useFormik } from "formik";
import omit from "lodash/omit";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { useFetching } from "hooks";
import { signUpRequest } from "../api";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { SignUpValidationSchema } from "../validations";
import { SignUpLayout } from "../components/SignUpLayout";

import { ROUTE_NAMES } from "routes/routeNames";

export const SignUpContainer = () => {
   const { data, errors: requestErrors, isLoading, handleDataLoad } = useFetching(signUpRequest);

   const isAuthenticated = useSelector(isAuthenticatedSelector);

   const formik = useFormik({
      initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         confirmPassword: "",
         gender: "",
         phone: "",
      },
      validationSchema: SignUpValidationSchema,
      onSubmit: (values, { resetForm }) => {
         handleDataLoad(omit(values, "confirmPassword"));
         resetForm();
      },
   });

   const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

   if (isAuthenticated) {
      return <Navigate to={ROUTE_NAMES.HOME} />
   };

   return (
      <SignUpLayout
         data={data}
         isLoading={isLoading}
         requestErrors={requestErrors}
         handleSubmit={handleSubmit}
         handleChange={handleChange}
         handleBlur={handleBlur}
         values={values}
         touched={touched}
         errors={errors} />
   );
};