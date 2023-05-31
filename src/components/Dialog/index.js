import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import { logout } from "utils";

import styles from "./styles.module.scss";

export const AlertDialog = () => {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div className={styles.wrapper}>
         <button className={styles.button} onClick={handleClickOpen}>Log Out</button>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alertTitle"
         >
            <DialogTitle id="alertTitle">
               {"Are you sure you want to log out of your account?"}
            </DialogTitle>
            <DialogActions>
               <button className={styles.cancelButton} onClick={handleClose}>Cancel</button>
               <button className={styles.logoutButton} onClick={logout} autoFocus>Log Out</button>
            </DialogActions>
         </Dialog>
      </div >
   );
};