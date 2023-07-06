import styles from "./styles.module.scss";

export const CancelButton = ({ handleClose }) => {
   return (
      <button className={styles.cancelButton} onClick={handleClose}>Cancel</button>
   );
};