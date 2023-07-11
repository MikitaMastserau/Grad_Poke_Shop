import CircularProgress from "@mui/material/CircularProgress";

import styles from "./styles.module.scss";

export const LoadingSpinner = () => {
   return (
      <div className={styles.loading}>
         <CircularProgress color="warning" size={100} />
      </div>
   );
};