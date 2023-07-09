import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moment from "moment/moment";
import { startCase } from "lodash";

import { SubTitle } from "components/SubTitle";

import pokecoinIcon from "static/icons/pokecoinIcon.png";

import styles from "./styles.module.scss";

export const OrdersHistory2 = ({ profileOrders }) => {
   const [expanded, setExpanded] = useState(false);

   const handleChange = (panel) => (_, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

   return (
      <>
         <SubTitle color="orangered" title="Orders History" />
         <div className={styles.wrapper}>
            {profileOrders.map(({ totalPrice, itemsList, createdAt, _id }) => (
               <Accordion className={styles.order} key={_id} expanded={expanded === _id} onChange={handleChange(_id)}>
                  <AccordionSummary aria-controls={_id} id={_id} expandIcon={<ExpandMoreIcon />}>
                     <p className={styles.order__data}>{moment(createdAt).format("LLL")}</p>
                     <p className={styles.order__sum}>Total summary: {totalPrice} <img src={pokecoinIcon} alt="" /></p>
                  </AccordionSummary>
                  <AccordionDetails className={styles.order__items}>
                     {itemsList?.map(({ id, name, image, quantity, price }) => (
                        <div key={id}>
                           <img src={image} alt={name} />
                           <p>{startCase(name)}</p>
                           <p>Quantity: {quantity}</p>
                           <p>Price: {price * quantity} <img src={pokecoinIcon} alt="" /></p>
                        </div>
                     ))}
                  </AccordionDetails>
               </Accordion>
            ))}
         </div>
      </>
   );
};

// export const OrdersHistory = ({ profileOrders }) => {
//    return (
//       <>
//          <SubTitle color="orangered" title="Orders History" />
//          <div className={styles.wrapper}>
//             {profileOrders.map(({ totalPrice, itemsList, createdAt, _id }) => (
//                <div className={styles.order} key={_id}>
//                   <div className={styles.order__desc}>
//                      <p>{createdAt.slice(0, 10)}</p>
//                      <p>Total summary: {totalPrice} <img src={pokecoinIcon} alt="" /></p>
//                   </div>
//                   <div className={styles.order__items}>
//                      {itemsList.map(({ id, name, image, quantity, price }) => (
//                         <div key={id}>
//                            <img src={image} alt={name} />
//                            <p>{startCase(name)}</p>
//                            <p>Quantity: {quantity}</p>
//                            <p>Price: {price * quantity}</p>
//                         </div>
//                      ))}
//                   </div>
//                </div>
//             ))}
//          </div>
//       </>
//    );
// };