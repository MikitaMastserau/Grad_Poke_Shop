import { useState } from "react";
import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import { CancelButton } from "components/CancelButton";
import { ConfirmButton } from "components/ConfirmButton";
import { logout } from "utils";

import logoutIcon from "static/icons/logoutIcon.png";

import styles from "./styles.module.scss";

export const LogoutDialog = () => {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <IconButton sx={{ height: 45, width: 45, alignSelf: "center" }} onClick={handleClickOpen} >
            <img className={styles.logoutIcon} src={logoutIcon} alt="" />
         </IconButton>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alertTitle"
         >
            <DialogTitle id="alertTitle">
               {"Are you sure you want to log out of your account?"}
            </DialogTitle>
            <DialogActions>
               <CancelButton handleClose={handleClose} />
               <ConfirmButton handleConfirm={logout} text={"Log Out"} />
            </DialogActions>
         </Dialog>
      </ >
   );
};