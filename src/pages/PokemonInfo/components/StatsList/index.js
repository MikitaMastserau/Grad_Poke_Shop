import styles from "./styles.module.scss";

export const StatsList = ({ statValue, icon }) => {
   return (
      <div className={styles.stats}>
         <img src={icon} alt="" />
         <p>{statValue}</p>
      </div>
   );
};