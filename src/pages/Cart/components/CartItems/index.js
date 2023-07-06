import { startCase } from "lodash";

import { QuantityCounter } from "components/QuantityCounter";
import { DeleteDialog } from "../DeleteDialog";

import pokecoinIcon from "static/icons/pokecoinIcon.png";

import styles from "./styles.module.scss";

export const CartItems = ({ cartItems, changedItemId, changeItemQuantity, deleteItem }) => {
   return (
      <div className={styles.wrapper}>
         {cartItems.map(({ id, name, image, quantity, price }) => (
            <div className={styles.item} key={id}>
               <img className={styles.item__image} src={image} alt="" />
               <div className={styles.item__info}>
                  <p>{startCase(name)}</p>
                  <QuantityCounter id={id} quantity={quantity} changedItemId={changedItemId} changeItemQuantity={changeItemQuantity} />
                  <p><img src={pokecoinIcon} alt="" /> {price * quantity}</p>
               </div>
               <DeleteDialog id={id} deleteItem={deleteItem} />
            </div>
         ))}
      </div>
   )
};