import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

import { Title } from "components/Title";
import { SignInForm } from "../SignInForm";

import styles from "./styles.module.scss";

export const SignInLayout = ({ form, handleChange, handleSubmit, checked, handleCheckboxChange, isLoading, errors }) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <Title title="Sign In" />

            {isLoading ? <div className={styles.loading}><CircularProgress color="warning" size={100} /></div> : (
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

SignInLayout.propTypes = {
   form: PropTypes.object.isRequired,
   handleChange: PropTypes.func.isRequired,
   handleSubmit: PropTypes.func.isRequired,
   checked: PropTypes.bool.isRequired,
   handleCheckboxChange: PropTypes.func.isRequired,
   isLoading: PropTypes.bool.isRequired,
   errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
   ]),
};