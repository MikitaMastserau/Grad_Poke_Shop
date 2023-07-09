import { LoadingSpinner } from "components/LoadingSpinner";

import { Title } from "components/Title";
import { UserInfo } from "../UserInfo";
import { OrdersHistory2 } from "../OrdersHistory";

import styles from "./styles.module.scss";

export const ProfileLayout = ({ profileData, profileOrders, isLoading }) => {
   return (
      <div className={styles.wrapper}>
         <Title title="Profile" />

         <div className={styles.container}>
            {isLoading ? <div className={styles.loading}><LoadingSpinner /></div> :
               <>
                  <UserInfo profileData={profileData} />

                  <OrdersHistory2 profileOrders={profileOrders} />
               </>
            }
         </div>
      </div>
   );
};