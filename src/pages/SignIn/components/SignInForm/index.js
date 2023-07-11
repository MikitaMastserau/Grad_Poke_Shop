import PropTypes from "prop-types";

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
            <input id="password" type="password" name="password" autoComplete="off" value={form.password} onChange={handleChange} />
         </div>

         <div className={styles.form__checkbox}>
            <input id="checkbox" type="checkbox" checked={checked} onChange={handleCheckboxChange} required />
            <label htmlFor="checkbox">I agree with Terms of Use and Privacy Policy</label>
         </div>

         <button className={styles.form__submit} type="submit">Log In</button>
      </form>
   );
};

SignInForm.propTypes = {
   form: PropTypes.object.isRequired,
   handleChange: PropTypes.func.isRequired,
   handleSubmit: PropTypes.func.isRequired,
   checked: PropTypes.bool.isRequired,
   handleCheckboxChange: PropTypes.func.isRequired,
};