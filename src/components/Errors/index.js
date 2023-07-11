import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export const Errors = ({ errors }) => {
   return (
      <p className={styles.errors}>{errors}</p>
   );
};

Errors.propTypes = {
   errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
   ]),
};