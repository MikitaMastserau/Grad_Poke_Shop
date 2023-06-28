import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";

import styles from "./styles.module.scss";
import { SignInForm } from "../SignInForm";

export const SignInLayout = ({ form, handleChange, handleSubmit, checked, handleCheckboxChange, isLoading, errors }) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <Title title="Sign In" />

            {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> : (
               <>
                  <SignInForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} checked={checked} handleCheckboxChange={handleCheckboxChange} />

                  {errors ? (
                     <div className={styles.errors}>
                        {Array.isArray(errors) && errors.map((error) => <p key={error} className={styles.requestError}>{error}</p>)}
                        {typeof errors === "string" && <p className={styles.requestError}>{errors}</p>}
                     </div>
                  ) : (
                     <div className={styles.errors}></div>)
                  }
               </>
            )}
         </div>
      </div >
   );
};