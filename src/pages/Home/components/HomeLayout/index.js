import { WelcomePage } from "../WelcomePage";
import { HomePage } from "../HomePage";

export const HomeLayout = ({ isAuthenticated }) => {
   return (
      <>
         {!isAuthenticated ?
            <WelcomePage /> :
            <HomePage />
         }
      </>
   )
};