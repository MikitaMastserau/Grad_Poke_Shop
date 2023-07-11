import { useState } from "react";
import { Button } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";

import { CancelButton } from "components/CancelButton";
import { ConfirmButton } from "components/ConfirmButton";

export const ClearCartDialog = ({ cartItems, clearCart }) => {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <Button
            size="large"
            variant="outlined"
            color="warning"
            disableElevation
            startIcon={<DeleteOutlinedIcon />}
            onClick={handleClickOpen}
         >
            Clear Cart
         </Button>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alertTitle"
         >
            <DialogTitle id="alertTitle">
               {"Are you sure you want to clear the cart?"}
            </DialogTitle>
            <DialogActions>
               <CancelButton handleClose={handleClose} />
               <ConfirmButton handleConfirm={() => clearCart(cartItems)} text={"Clear"} />
            </DialogActions>
         </Dialog>
      </ >
   );
};

ClearCartDialog.propTypes = {
   cartItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      _id: PropTypes.string,
   })).isRequired,
   clearCart: PropTypes.func.isRequired,
};