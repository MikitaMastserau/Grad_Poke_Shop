import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";

import styles from "./styles.module.scss";

export const SignInLayout = ({ form, handleChange, handleSubmit, checked, handleCheckboxChange, isLoading, errors }) => {
   return (
      <div className={styles.container}>
         <Title title="Sign In" />

         {isLoading ? <LoadingSpinner /> : (
            <>
               <form className={styles.wrapper} onSubmit={handleSubmit}>
                  <div className={styles.field}>
                     <label htmlFor="email">Email</label>
                     <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
                  </div>

                  <div className={styles.field}>
                     <label htmlFor="password">Password</label>
                     <input id="password" type="password" name="password" value={form.password} onChange={handleChange} />
                  </div>

                  <div className={styles.checkbox}>
                     <input id="checkbox" type="checkbox" checked={checked} onChange={handleCheckboxChange} />
                     <label htmlFor="checkbox">I agree with Terms of Use and Privacy Policy</label>
                  </div>

                  <button className={styles.submit} type="submit">Log In</button>
               </form>

               {Array.isArray(errors) && errors.map((error) => <p key={error} className={styles.requestError}>{error}</p>)}
               {typeof errors === "string" && <p className={styles.requestError}>{errors}</p>}
            </>
         )}
      </div>
   );
};