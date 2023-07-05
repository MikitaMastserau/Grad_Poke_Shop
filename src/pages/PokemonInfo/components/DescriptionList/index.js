import lowerCase from "lodash/lowerCase";

import styles from "./styles.module.scss";

export const DescriptionList = ({ types, height, weight }) => {
   return (
      <div className={styles.desc}>
         <div className={styles.desc__antropo}>
            <div>
               <h3>Height:</h3>
               <p>{height * 10} cm</p>
            </div>
            <div>
               <h3>Weight:</h3>
               <p>{weight / 10} kg</p>
            </div>
         </div>
         <h3>Type:</h3>
         {types.map((typeName) => {
            return (
               <div className={styles.desc__types} key={typeName}>
                  <p className={styles[lowerCase(typeName)]}>
                     {typeName}
                  </p>
               </div>
            )
         })}
      </div>
   )
};