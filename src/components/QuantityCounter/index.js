import styles from "./styles.module.scss";

export const QuantityCounter = ({ id, quantity, changedItemId, changeItemQuantity }) => {
   return (
      <div className={styles.counter}>
         <button disabled={changedItemId == id || quantity == 1} onClick={() => changeItemQuantity({ id, quantity: quantity - 1 })}>-</button>
         <p>{quantity}</p>
         <button disabled={changedItemId == id} onClick={() => changeItemQuantity({ id, quantity: quantity + 1 })}>+</button>
      </div>
   );
};