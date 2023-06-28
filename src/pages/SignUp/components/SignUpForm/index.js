import styles from "./styles.module.scss";

export const SignUpForm = ({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => {
   return (
      <>
         <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__field}>
               <label htmlFor="firstName">First Name</label>
               <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
               />
               {touched.firstName && errors.firstName ?
                  <div className={styles.form__errors}>{errors.firstName}</div> :
                  <div className={styles.form__noErrors}></div>}
            </div>

            <div className={styles.form__field}>
               <label htmlFor="lastName">Last Name</label>
               <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
               />
               {touched.lastName && errors.lastName ?
                  <div className={styles.form__errors}>{errors.lastName}</div> :
                  <div className={styles.form__noErrors}></div>}
            </div>

            <div className={styles.form__field}>
               <label htmlFor="email">Email Address</label>
               <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
               />
               {touched.email && errors.email ?
                  <div className={styles.form__errors}>{errors.email}</div> :
                  <div className={styles.form__noErrors}></div>}
            </div>

            <div className={styles.form__field}>
               <label htmlFor="password">Password</label>
               <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
               />
               {touched.password && errors.password ?
                  <div className={styles.form__errors}>{errors.password}</div> :
                  <div className={styles.form__noErrors}></div>}
            </div>

            <div className={styles.form__field}>
               <label htmlFor="confirmPassword">Confirm Password</label>
               <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
               />
               {touched.confirmPassword && errors.confirmPassword ?
                  <div className={styles.form__errors}>{errors.confirmPassword}</div> :
                  <div className={styles.form__noErrors}></div>}
            </div>

            <div className={styles.form__field}>
               <label htmlFor="phone">Phone Number</label>
               <input
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
               />
               {touched.phone && errors.phone ?
                  <div className={styles.form__errors}>{errors.phone}</div> :
                  <div className={styles.form__noErrors}></div>}
            </div>

            <div className={styles.form__field}>
               <label htmlFor="gender">Gender</label>
               <select id="gender" name="gender" onChange={handleChange} onBlur={handleBlur} defaultValue={"DEFAULT"}>
                  <option value="DEFAULT" disabled>Choose Gender ...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
               </select>
               {touched.gender && errors.gender ?
                  <div className={styles.form__errors}>{errors.gender}</div> :
                  <div className={styles.form__noErrors}></div>}
            </div>

            <button type="submit">Submit</button>
         </form>
      </>
   );
};