import first from "static/images/first.jpg";
import who from "static/images/who.jpg";
import amount_1 from "static/images/amount_1.png";
import amount_2 from "static/images/amount_2.png";
import amount_3 from "static/images/amount_3.png";
import amount_4 from "static/images/amount_4.png";
import amount_5 from "static/images/amount_5.png";
import amount_6 from "static/images/amount_6.png";
import amount_7 from "static/images/amount_7.png";
import amount_8 from "static/images/amount_8.png";
import battle_1 from "static/images/battle_1.png";
import battle_2 from "static/images/battle_2.png";
import trainer from "static/images/trainer.png";
import life from "static/images/life.jpeg";
import friends from "static/images/friends.png";
import last from "static/images/last.png";

import styles from "./styles.module.scss";

export const HomePage = () => {
   return (
      <>
         <div className={styles.back}>
            <img src={first} alt="" />
         </div>

         <div className={styles.wrapper}>
            <div className={styles.container}>

               <section className={styles.who}>
                  <h2>WHO ARE POKEMONS?</h2>
                  <div className={styles.who__content}>
                     <div className={styles.who__content__image}>
                        <img src={who} alt="" />
                     </div>
                     <p>
                        Pokémons are creatures of all shapes and sizes, living in nature and possessing supernatural
                        powers. Pokémons are moderately intelligent, some can talk.
                        Under certain conditions, pokémon can evolve - transform into an advanced form that is stronger
                        than the previous one and is considered an independent species.
                     </p>
                  </div>
               </section>

               <section className={styles.total}>
                  <h2>TOTAL</h2>
                  <p><strong>1008</strong> varieties of pokémons</p>
                  <div className={styles.total__images}>
                     <img src={amount_1} alt="" />
                     <img src={amount_2} alt="" />
                     <img src={amount_3} alt="" />
                     <img src={amount_4} alt="" />
                     <img src={amount_5} alt="" />
                     <img src={amount_6} alt="" />
                     <img src={amount_7} alt="" />
                     <img src={amount_8} alt="" />
                  </div>
                  <div className={styles.total__text}>
                     <p>
                        There are 18 different types of pokémons in total: fire, water, grass, electric, eormal
                        (no special affiliation to the elements), flying, ice, ghost, dark, steel, rock, ground,
                        psychic, insect, dragon, poison, magical and combat (martial arts masters).
                     </p>
                     <p>
                        In battles with other types, each pokémon has both advantages and disadvantages.
                        There are also shining pokémon, which differ from the usual ones in color and higher
                        characteristics. Shiny ones are extremely rare.
                     </p>
                  </div>
               </section>

               <section className={styles.battles}>
                  <h2>BATTLES of POKÉMONS</h2>
                  <div>
                     <div className={styles.battles__images}>
                        <img src={battle_1} alt="" />
                        <img src={battle_2} alt="" />
                     </div>
                     <div className={styles.battles__text}>
                        <p>
                           Battles are very important in the life of a pokémon, and it's not even about proving one's superiority
                           or attracting the attention of a pokémon of the opposite sex - battles are needed for development.
                        </p>
                        <p>
                           Winning gives valuable experience, losing - the desire to become stronger. When a pokémon reaches
                           the peak of its power, a unique process begins - evolution, which changes the pokémon forever.
                        </p>
                     </div>
                     <p className={styles.battles__note}>
                        Fights go on until one of the pokémon falls unconscious or
                        its trainer gives up - fights never happen until death.
                     </p>
                  </div>
               </section>

            </div>
         </div>

         <div className={styles.back}>
            <img src={trainer} alt="" />
         </div>

         <div className={styles.wrapper}>
            <div className={styles.container}>
               <div className={styles.trainers}>
                  <p>
                     Pokémon Trainer is a term commonly used
                     to refer to a person who catches and trains several different kinds and types of pokémon.
                     Pokémon trainers usually start out at the age of 10 when they receive their first pokémon.
                     However, this can also happen later in life.
                  </p>
               </div>

               <section className={styles.life}>
                  <div className={styles.life__text}>
                     <h2>what are they doing?</h2>
                     <p>
                        Usually there are pokémon trainers almost everywhere. The trainers themselves do not directly
                        take part in the battles: only pokémons fight, to which the owners give commands, which attack or
                        ability to use. Training and battles most often take place in stadiums.
                     </p>
                     <p>
                        Most pokémon trainers have a common goal: to become the best pokémon trainer. This is a prestigious
                        title that can only be obtained by defeating the Elite Four and becoming the Pokémons Champion.
                     </p>
                     <p>
                        Many trainers have a Pokedex, a pocket-sized electronic encyclopedia that contains information about pokémons.
                     </p>
                  </div>
                  <div className={styles.life__image}>
                     <img src={life} alt="" />
                  </div>
               </section>

               <section className={styles.friends}>
                  <h2>FRIENDSHIP</h2>
                  <div className={styles.friends__content}>
                     <img src={friends} alt="" />
                     <div>
                        <p>
                           A good trainer is someone who takes good care of their pokémons.
                           It has been determined that <strong>six</strong> pokémons is the optimal number in a
                           group to give enough attention to each pokémon and form strong bonds with them.
                        </p>
                        <p>
                           Pokémons training develops in the trainer responsibility, composure, compassion, the ability to plan.
                        </p>
                     </div>
                  </div>
               </section>

               <section className={styles.last}>
                  <p>Wow, did you read to the end? Well done!</p>
                  <a href="pokemons">Click and start happy shopping!</a>
               </section>
            </div>
         </div>

         <div className={styles.back}>
            <img src={last} alt="" />
         </div>
      </>
   )
};