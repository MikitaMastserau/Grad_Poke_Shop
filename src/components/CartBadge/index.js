import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import cartIcon from "static/icons/cartIcon.png";
import { ROUTE_NAMES } from "routes/routeNames";

import styles from "./styles.module.scss";

export const CartBadge = ({ cartQuantity }) => {
   const navigate = useNavigate();

   const handleGoToCart = () => {
      return navigate(`${ROUTE_NAMES.CART}`);
   };

   return (
      <IconButton sx={{ height: 45, width: 45, alignSelf: "center" }} aria-label="cart" onClick={handleGoToCart} >
         <Badge badgeContent={cartQuantity} color="warning">
            <img className={styles.cartIcon} src={cartIcon} alt="" />
         </Badge>
      </IconButton>
   );
};