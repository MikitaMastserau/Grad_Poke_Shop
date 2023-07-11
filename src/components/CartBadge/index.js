import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

import { ROUTE_NAMES } from "routes/routeNames";
import cartIcon from "static/icons/cartIcon.png";

import styles from "./styles.module.scss";

export const CartBadge = ({ cartQuantity }) => {
   const navigate = useNavigate();

   const handleGoToCart = () => {
      return navigate(`${ROUTE_NAMES.CART}`);
   };

   const StyledBadge = styled(Badge)(({ theme }) => ({
      "& .MuiBadge-badge": {
         right: 5,
         top: 5,
         border: "2px solid #fff",
         padding: "0 4px",
      },
   }));

   return (
      <IconButton sx={{ height: 45, width: 45, alignSelf: "center" }} aria-label="cart" onClick={handleGoToCart} >
         <StyledBadge badgeContent={cartQuantity} color="secondary">
            <img className={styles.cartIcon} src={cartIcon} alt="" />
         </StyledBadge>
      </IconButton>
   );
};

CartBadge.propTypes = {
   cartQuantity: PropTypes.number.isRequired,
};