import { Link } from "react-router-dom";

import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";

import { ROUTE_NAMES } from "routes/routeNames";

import styles from "./styles.module.scss";
import { SignUpForm } from "../SignUpForm";

export const SignUpLayout = ({ data, isLoading, requestErrors, handleSubmit, handleChange, handleBlur, values, touched, errors }) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <Title title="Sign Up" />

            {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> : (
               <>
                  {data?.data ? (
                     <>
                        <div className={styles.success}>{data.data.message}</div>
                        <Link to={ROUTE_NAMES.SIGN_IN}>Go to Login</Link>
                     </>
                  ) : (
                     <>
                        <SignUpForm handleSubmit={handleSubmit} handleChange={handleChange} handleBlur={handleBlur} values={values} touched={touched} errors={errors} />

                        {requestErrors ? (
                           <p className={styles.errors}>{requestErrors.message}</p>
                        ) : (
                           <div className={styles.noErrors}></div>
                        )}
                     </>
                  )}
               </>
            )}
         </div>
      </div>
   );
};