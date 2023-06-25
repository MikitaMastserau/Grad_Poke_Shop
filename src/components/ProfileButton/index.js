import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

import profileIcon from "static/icons/profileIcon.png";
import { ROUTE_NAMES } from "routes/routeNames";

import styles from "./styles.module.scss";

export const ProfileButton = () => {
   const navigate = useNavigate();

   const handleGoToProfile = () => {
      return navigate(`${ROUTE_NAMES.PROFILE}`);
   };

   return (
      <IconButton sx={{ height: 45, width: 45, alignSelf: "center" }} aria-label="profile" onClick={handleGoToProfile} >
         <img className={styles.cartIcon} src={profileIcon} alt="" />
      </IconButton>
   );
};