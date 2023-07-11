import PropTypes from "prop-types";

import { Title } from "components/Title";
import { LoadingSpinner } from "components/LoadingSpinner";
import { Errors } from "components/Errors";
import { UserInfo } from "../UserInfo";
import { OrdersHistory } from "../OrdersHistory";

import styles from "./styles.module.scss";

export const ProfileLayout = ({ profileData, profileOrders, isLoading, errors }) => {
   return (
      <div className={styles.wrapper}>
         <Title title="Profile" />

         <div className={styles.container}>
            {isLoading ? <LoadingSpinner /> :
               <>
                  {errors ? <Errors errors={errors} /> :
                     <>
                        <UserInfo profileData={profileData} />

                        <OrdersHistory profileOrders={profileOrders} />
                     </>
                  }
               </>
            }
         </div>
      </div>
   );
};

ProfileLayout.propTypes = {
   profileData: PropTypes.shape({
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      gender: PropTypes.string,
      phone: PropTypes.string,
   }).isRequired,
   profileOrders: PropTypes.array.isRequired,
   isLoading: PropTypes.bool.isRequired,
   errors: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
   ]),
};