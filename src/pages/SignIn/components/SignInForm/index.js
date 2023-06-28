import styles from "./styles.module.scss";

export const SignInForm = ({ form, handleChange, handleSubmit, checked, handleCheckboxChange }) => {
   return (
      <form className={styles.form} onSubmit={handleSubmit}>
         <div className={styles.form__field}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
         </div>

         <div className={styles.form__field}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={form.password} onChange={handleChange} />
         </div>

         <div className={styles.form__checkbox}>
            <input id="checkbox" type="checkbox" checked={checked} onChange={handleCheckboxChange} required />
            <label htmlFor="checkbox">I agree with Terms of Use and Privacy Policy</label>
         </div>

         <button className={styles.form__submit} type="submit">Log In</button>
      </form>
   );
};