import styles from "./styles.module.scss";

export const ConfirmButton = ({ handleConfirm, text }) => {
   return (
      <button className={styles.confirmButton} onClick={handleConfirm} autoFocus>{text}</button>
   );
};