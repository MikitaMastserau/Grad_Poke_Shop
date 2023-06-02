import { useSelector } from "react-redux";
import { HomeLayout } from "../components/HomeLayout";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";

export const HomeContainer = () => {
   const isAuthenticated = useSelector(isAuthenticatedSelector);

   return (
      <>
         <HomeLayout isAuthenticated={isAuthenticated} />
      </>
   )
};