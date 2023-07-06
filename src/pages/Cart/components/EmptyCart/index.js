import styles from "./styles.module.scss";

export const EmptyCart = () => {
   return (
      <div className={styles.empty}>
         <p>Your cart is empty</p>
         <p>Why? Hurry up and <a href="pokemons">buy pokemons</a>!</p>
      </div>
   )
};