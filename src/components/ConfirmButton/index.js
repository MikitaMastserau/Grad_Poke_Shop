import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export const ConfirmButton = ({ handleConfirm, text }) => {
   return (
      <button className={styles.confirmButton} onClick={handleConfirm} autoFocus>{text}</button>
   );
};

ConfirmButton.propTypes = {
   handleConfirm: PropTypes.func.isRequired,
   text: PropTypes.string.isRequired,
};