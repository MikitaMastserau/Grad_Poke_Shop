import PropTypes from "prop-types";

import { SubTitle } from "components/SubTitle";

import avatarIcon from "static/icons/avatarIcon.png";

import styles from "./styles.module.scss";

export const UserInfo = ({ profileData }) => {
   const { email, firstName, lastName, gender, phone } = profileData;

   return (
      <>
         <SubTitle color="orangered" title="Profile Data" />
         <div className={styles.wrapper}>
            <div className={styles.user}>
               <h3 className={styles.user__name}>{`${firstName} ${lastName}`}</h3>
               <img className={styles.user__image} src={avatarIcon} alt="ava" />
               <div className={styles.user__data}>
                  <p className={styles.user__email}>Email: {email}</p>
                  <p className={styles.user__phone}>Phone: {phone}</p>
                  <p className={styles.user__gender}>Gender: {gender}</p>
               </div>
            </div>
         </div>
      </>
   );
};

UserInfo.propTypes = {
   profileData: PropTypes.shape({
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      gender: PropTypes.string,
      phone: PropTypes.string,
   }).isRequired,
};