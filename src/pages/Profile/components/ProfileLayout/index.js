import { SubTitle } from "components/SubTitle";
import { Title } from "components/Title";

import avatarIcon from "static/icons/avatarIcon.png";

import styles from "./styles.module.scss";
import { LoadingSpinner } from "components/LoadingSpinner";
import { startCase } from "lodash";

export const ProfileLayout = ({ profileData, profileOrders, isLoading }) => {
   const { email, firstName, gender, lastName, phone } = profileData;

   return (
      <div className={styles.container}>
         <Title title="Order Checkout" />

         {isLoading ? <LoadingSpinner /> :
            <>
               <SubTitle color="orangered" title="Profile Data" />
               <div className={styles.wrapper}>
                  <div className={styles.card}>
                     <h1 className={styles.name}>{`${firstName} ${lastName}`}</h1>
                     <img className={styles.image} src={avatarIcon} alt="ava" />
                     <div className={styles.data}>
                        <h2 className={styles.email}>Email: {email}</h2>
                        <h2 className={styles.phone}>Phone: {phone}</h2>
                        <h2 className={styles.gender}>Gender: {gender}</h2>
                     </div>
                  </div>
               </div>

               <SubTitle color="orangered" title="Orders History" />
               <div className={styles.orders}>
                  {profileOrders.map(({ totalPrice, itemsList, createdAt, _id }) => (
                     <div className={styles.order} key={_id}>
                        <div className={styles.desc}>
                           <p>{createdAt.slice(0, 10)}</p>
                           <p>Total summary: {totalPrice}</p>
                        </div>
                        <div className={styles.items}>
                           {itemsList.map(({ id, name, image, quantity, price }) => (
                              <div key={id}>
                                 <img src={image} alt={name} />
                                 <p>{startCase(name)}</p>
                                 <p>Quantity: {quantity}</p>
                                 <p>Price: {price * quantity}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </>
         }
      </div>
   );
};