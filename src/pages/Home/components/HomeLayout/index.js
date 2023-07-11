import PropTypes from "prop-types";

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

HomeLayout.propTypes = {
   isAuthenticated: PropTypes.bool.isRequired,
};