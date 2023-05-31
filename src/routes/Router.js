import { Route, Routes } from "react-router-dom";

import { Title } from "components/Title";
import { SignUpContainer } from "pages/SignUp/containers/SignUpContainer";
import { SignInContainer } from "pages/SignIn/containers/SignInContainer";

import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
   return (
      <Routes>
         <Route path={ROUTE_NAMES.HOME} element={<Title title="HOME PAGE" />} />
         <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
         <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />

         <Route path="*" element={<Title title="ERROR 404. NOT FOUND" />} />
      </Routes>
   );
};