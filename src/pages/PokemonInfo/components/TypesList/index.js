import lowerCase from "lodash/lowerCase";

import styles from "./styles.module.scss";

export const TypesList = ({ types }) => {
   return (
      <div className={styles.types}>
         {types.map((typeName) => {
            return (
               <div className={styles.types__item} key={typeName}>
                  <p className={styles[lowerCase(typeName)]}>
                     {typeName}
                  </p>
               </div>
            )
         })}
      </div>
   )
};