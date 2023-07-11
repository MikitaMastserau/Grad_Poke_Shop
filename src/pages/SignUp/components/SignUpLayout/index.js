import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Title } from "components/Title";
import { SignUpForm } from "../SignUpForm";

import { ROUTE_NAMES } from "routes/routeNames";

import styles from "./styles.module.scss";

export const SignUpLayout = ({ data, handleSubmit, handleChange, handleBlur, values, touched, isLoading, requestErrors, errors }) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <Title title="Sign Up" />

            {isLoading ? <div className={styles.loading}><CircularProgress color="warning" size={100} /></div> : (
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

SignUpLayout.propTypes = {
   data: PropTypes.object,
   handleChange: PropTypes.func.isRequired,
   handleSubmit: PropTypes.func.isRequired,
   handleBlur: PropTypes.func.isRequired,
   values: PropTypes.object.isRequired,
   touched: PropTypes.object.isRequired,
   isLoading: PropTypes.bool.isRequired,
   requestErrors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
   ]),
};