import styles from "./styles.module.scss";

export const AbilitiesList = ({ abilityName, icon }) => {
   return (
      <div className={styles.abilities}>
         <img src={icon} alt="" />
         <p>{abilityName}</p>
      </div>
   );
};