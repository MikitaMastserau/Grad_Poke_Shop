import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export const Title = ({ title }) => {
   return (
      <h1 className={styles.title}>{title}</h1>
   );
};

Title.propTypes = {
   title: PropTypes.string.isRequired,
};