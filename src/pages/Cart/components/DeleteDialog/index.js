import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import deleteIcon from "static/icons/deleteIcon.svg";
import { CancelButton } from "components/CancelButton";
import { ConfirmButton } from "components/ConfirmButton";

import styles from "./styles.module.scss";

export const DeleteDialog = ({ id, deleteItem }) => {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <button className={styles.deleteButton} onClick={handleClickOpen}><img src={deleteIcon} alt="" /> Delete</button>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alertTitle"
         >
            <DialogTitle id="alertTitle">
               {"Are you sure you want to delete this Pokémon?"}
            </DialogTitle>
            <DialogActions>
               <CancelButton handleClose={handleClose} />
               <ConfirmButton handleConfirm={() => deleteItem(id)} text={"Delete"} />
            </DialogActions>
         </Dialog>
      </ >
   );
};