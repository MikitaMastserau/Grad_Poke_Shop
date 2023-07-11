import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export const CancelButton = ({ handleClose }) => {
   return (
      <button className={styles.cancelButton} onClick={handleClose}>Cancel</button>
   );
};

CancelButton.propTypes = {
   handleClose: PropTypes.func.isRequired,
};